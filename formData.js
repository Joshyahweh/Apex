const Manager = require("./encryption.js");
require("dotenv").config();
const data = require("./form");
const config = require("./form");

const manager = new Manager({
  key: process.env.KEY,
  vector: process.env.VECTOR,
});

// USAGE
function handleSubmit() {
  //   const form_data = data;
  manager.encrypt(data); // impure encryption

  //   console.log(handleSubmit(data));
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  //   headers.set("Authorization", `Bearer ${
  //     sessionStorage.getItem("user.auth.token") ?? context.user?.token
  //   }`);

  fetch(config.url, {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  })
    .then((response) => response.json())
    .then((response) => {
      manager.decrypt(response); // impure decryption
      console.log(response); // something intelligible
    });
}
// handleSubmit();
