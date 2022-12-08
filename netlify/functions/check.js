import { schedule } from "@netlify/functions";

exports.handler = schedule("0 1 * * *", async (event) => {

  await fetch("https://gxoib8zz.directus.app/users");
  const response = {
    statusCode: 200,
    body: JSON.stringify("Checked!"),
  };
  console.log("response: ", response);
  return response;
});
