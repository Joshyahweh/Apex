var axios = require("axios");
var FormData = require("form-data");
var data = new FormData();
data.append("email", "samkddfkkdwe@mailinator.com");
data.append("password", "Password@1");
data.append("first_name", "Test");
data.append("last_name", "Test");
data.append("auth_type", "password");
data.append("referral_code", "");
data.append("phone", "+2348054643230");
data.append("occupation", "Farmer");

var config = {
  method: "post",
  url: "https://ecncomx-api.afexnigeria.com/api/register",
  headers: { ...data.getHeaders() },
  data,
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });

module.exports = data;
module.exports = config
