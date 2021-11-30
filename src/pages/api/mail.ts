import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import mailchimp, { Body } from "@mailchimp/mailchimp_marketing";

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const secret = process.env.CAPTCHA_SECRET_KEY;
    const listId = process.env.MAILCHIMP_LIST_ID as string;

    mailchimp.setConfig({
        apiKey: process.env.MAILCHIMP_API_KEY,
        server: process.env.MAILCHIMP_SERVER,
    });

    if (req.method === "POST") {
        const {email, response} = req.body;
        const captchaResult = await axios.post("https://hcaptcha.com/siteverify", null, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            params: {
                secret,
                response,
            },
        });

        const responseJson = JSON.parse(captchaResult.data.content);

        if (responseJson.success) {
            try{
                await mailchimp.lists.addListMember(
                    listId,
                    {
                        email_address: email,
                        status: mailchimp.Status.pending
                    });

                res.status(201).json({
                    message: "Successfully subscribed",
                    code: "success",  
                    status: 2001,
                })
            } catch (e: any) {
                res.status(400).json({
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