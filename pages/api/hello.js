const mailjet = require("node-mailjet").connect(
  process.env['MAILJET_1'],
  process.env['MAILJET_2']
);

module.exports = async (req, res) => {
  // this function will be launched from Hasura event
  const { body } = req;
  try {
    const recipient = body.event.data.new;
    const result = await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: "lwar780@gmail.com",
            Name: "Skip Schedules",
          },
          To: [
            {
              Email: recipient.email,
            },
          ],
          Subject: "Greetings from Skip Schedules!",
          TextPart: recipient.name +
            "You have a meeting scheduled in the next 30 mins.",
          HTMLPart:
            "<p>Here is a link to your meeting! {link}</p>",
        },
      ],
    });

    res.status(200).json({
      method: req.method,
      msg: "Received the event and sent the email to the user!",
      result: result.body,
    });
  } catch (err) {
    res.send(err); // send the thrown error
  }
};