/** @format */

import nodemailer from "nodemailer";
import { google } from "googleapis";

export default async function handler(req, res) {
  const {
    body: { candidateName, candidateEmail, pdf },
    method,
  } = req;

  const OAuth2 = google.auth.OAuth2;

  const email = "";

  switch (method) {
    case "POST":
      try {
        const createTransporter = async () => {
          const oauth2Client = new OAuth2(
            "484878004661-mk5kflp0tvvr59jeei2pstpdmsue37sp.apps.googleusercontent.com",
            "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",
            "https://developers.google.com/oauthplayground"
          );

          oauth2Client.setCredentials({
            refresh_token:
              "1//04Qu_hhXj9dmiCgYIARAAGAQSNwF-L9Ir2D9zrCv_AxoJCwE6SdbSG2PERHguGHDhdcgjkHNCXxLLv2Q8BSmKlhkoXXko6l8ajnI",
          });

          const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
              if (err) {
                reject();
              }
              resolve(token);
            });
          });

          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              type: "OAuth2",
              user: "proficientnow.marketing@gmail.com",
              accessToken,
              clientId:
                "484878004661-mk5kflp0tvvr59jeei2pstpdmsue37sp.apps.googleusercontent.com",
              clientSecret: "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",
              refreshToken:
                "1//04Qu_hhXj9dmiCgYIARAAGAQSNwF-L9Ir2D9zrCv_AxoJCwE6SdbSG2PERHguGHDhdcgjkHNCXxLLv2Q8BSmKlhkoXXko6l8ajnI",
            },
          });

          return transporter;
        };

        const sendEmail = async (emailOptions) => {
          let emailTransporter = await createTransporter();
          await emailTransporter.sendMail(emailOptions);
        };

        // sendEmail({
        //   subject: `Resume of ${candidateName}`,
        //   text: `Candidate Name: ${candidateName}
        //   Candidate Email: ${candidateEmail}`,
        //   to: "proficientnow.marketing@gmail.com",
        //   from: "proficientnow.marketing@gmail.com",
        //   attachments: [
        //     {
        //       filename: `${candidateName}_resume.pdf`,
        //       contentType: "application/pdf",
        //       content: new Buffer.from(pdf.split("base64,")[1], "base64"),
        //     },
        //   ],
        // })
        //   .then(() => {
        //     return res.status(200).json({
        //       success: true,
        //       message: "mail sent successfully",
        //     });
        //   })
        //   .catch((err) => {
        //     return res.status(400).json({ success: false, message: err });
        //   });

        const emailSent = await sendEmail({
          subject: `Resume of ${candidateName}`,
          text: `Candidate Name: ${candidateName}
			   Candidate Email: ${candidateEmail}`,
          to: "proficientnow.marketing@gmail.com",
          from: "proficientnow.marketing@gmail.com",
          attachments: [
            {
              filename: `${candidateName}_resume.pdf`,
              contentType: "application/pdf",
              content: new Buffer.from(pdf.split("base64,")[1], "base64"),
            },
          ],
        });

        if (!emailSent) {
          return res.status(400).json({
            success: false,
            message: "an error occured",
          });
        }
        res.status(200).json({
          success: true,
          message: "email sent successfully!",
        });
      } catch (error) {
        return res.status(400).json({ success: false, message: error });
      }

    default:
      res
        .status(500)
        .json({ success: false, message: "hello the error is here" });
      break;
  }
}
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb", // Set desired value here
    },
  },
};
