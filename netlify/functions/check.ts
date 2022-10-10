import { schedule } from "@netlify/functions";
import axios from "axios";

exports.handler = schedule("* * * * *", async (event) => {
  // TODO implement
  axios
    .get("https://gxoib8zz.directus.app/users", {})
    .then((response) => {
      console.log("status: Success");
      console.log("response: ", response);
    })
    .catch((error) => {
      console.log(error);
    });
  const response = {
    statusCode: 200,
    body: JSON.stringify("Checked!"),
  };
  return response;
});
