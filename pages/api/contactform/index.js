/** @format */

import ContactForm from "../../../models/ContactForm";

import dbConnect from "../../../lib/mongooseDb";

export default async function handler(req, res) {
  const { body: contactDetails, method, query } = req;

  const pageParams = {
    page: query.page,
    limit: query.limit,
  };

  await dbConnect();

  switch (method) {
    case "POST":
      try {
        console.log(contactDetails);
        const contact = await ContactForm.create(contactDetails);
        console.log("heyyy");
        if (!contact) {
          return res.status(400).json({
            success: false,
            message: "sorry could not send the data",
          });
        }

        res.status(200).json({ success: true, data: contact });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "GET" /* Get all contact forms */:
      try {
        const contacts = await ContactForm.find()
          .skip(pageParams.page * pageParams.limit)
          .limit(pageParams.limit);

        if (!contacts) {
          res.status(400).json({
            success: false,
            message: "sorry could not get any data",
          });
        }
        res.status(200).json({ success: true, data: contacts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}
