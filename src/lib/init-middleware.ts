// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
// See: https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/lib/init-middleware.js
export default function initMiddleware(middleware: (arg0: any, arg1: any, arg2: (result: any) => void) => void) {
    return (req: any, res: any) =>
      new Promise((resolve, reject) => {
        middleware(req, res, (result) => {
          if (result instanceof Error) {
            return reject(result)
          }
          return resolve(result)
        })
      })
  }