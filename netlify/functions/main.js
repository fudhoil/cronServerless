import emailjs from "@emailjs/browser";

exports.handler = async (event, context) => {
  const templateParams = {
    to_email: "bintangbluzz@gmail.com",
    from_name: "UGM | UIF",
    to_name: "Bintang",
    url_qrcode: "https://i.ibb.co/0nZ6Z3T/qr-code.png",
  };

  emailjs
    .send(
      "service_wt14onj",
      "template_grhzrbj",
      templateParams,
      "bdOgiOZHYPdwJmOw_"
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Pengiriman email berhasil" }),
  };
};
