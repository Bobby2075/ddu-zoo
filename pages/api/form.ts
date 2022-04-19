import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  //get data submitted in request's body.
  const body = req.body;

  //logging to see the respond
  console.log("body: ", body);

  //checks for first and last name
  // and returns true if found
  if (!body.name || !body.mail) {
    //sends a HHTP bad request error code
    return res.status(400).json({ data: "First or last name not found" });
  }

  // found the name
  //sends a hhtp succes code

  res.status(200).json({ data: `${body.first} ${body.last}` });
}
