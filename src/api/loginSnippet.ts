import axios from "axios";
import CryptoJS from "crypto-js";
function login(username: string, password: string) {
  const Base64 = require("crypto-js/enc-base64");
  const url =
    "https://gateway-staging.ncrcloud.com/security/authentication/login";
  const decoded = `${username}:${password}`;
  const decodedWord = CryptoJS.enc.Utf8.parse(decoded);
  //const encoded = CryptoJS.enc.Base64.stringify(decodedWord).toISOString();
  const encoded = "e"

  const headers = {
    Authorization: `Basic ${encoded}`,
  };

  let response: any;

  axios.post(url, "", { headers: headers }).then((data) => {
    response = data;
  });
  const token = response!.json()["token"];

  return `AccessToken ${token}`;
}
