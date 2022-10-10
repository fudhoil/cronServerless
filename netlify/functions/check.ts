import { schedule } from "@netlify/functions";
import axios from "axios";

exports.handler = schedule("* * * * *", async (event) => {
  // TODO implement
  axios
    .get("https://gxoib8zz.directus.app/users/me", {
      headers: {
        Authorization: "Bearer 1234567890",
      },
    })
    .then((response) => {
      console.log(response.data);
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
