import {verify} from "hcaptcha";
import {NextApiRequest, NextApiResponse} from "next";
import mailchimp, { Status } from "@mailchimp/mailchimp_marketing";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.CAPTCHA_SECRET_KEY as string;
  const listId = process.env.MAILCHIMP_LIST_ID as string;
  const mailchimpApiKey = process.env.MAILCHIMP_API_KEY as string;
  const mailchimServer = process.env.MAILCHIMP_SERVER as string;

  mailchimp.setConfig({
    apiKey: mailchimpApiKey,
    server: mailchimServer
  });

  if (req.method === "POST") {
    const {email, response} = req.body;
    const {success} = await verify(secret, response);
    
    if (success) {
      try {
        await mailchimp.lists.addListMember(listId, {
          email_address: email,
          status: "pending" as Status,
        });

        return res.status(201).json({
          message: "Successfully subscribed",
          code: "success",
          status: 201,
        });
      } catch (e: any) {
        return res.status(400).json({
          message: "Failed to subscribe",
          code: "error",
          status: 400,
          detail: e.detail,
        });
      }
    }

    res.status(400).json({
      message: "Invalid captcha.",
      code: "invalid_captcha",
      status: 400,
    });
  }
}

export default handler;
