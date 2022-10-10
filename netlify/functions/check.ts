import { schedule } from "@netlify/functions";
import axios from "axios";

exports.handler = schedule("* * * * *", async (event) => {
  // TODO implement
  axios.get("https://gxoib8zz.directus.app/users", {});
  const response = {
    statusCode: 200,
    body: JSON.stringify("Checked!"),
  };
  console.log("response: ", response);
  return response;
});
