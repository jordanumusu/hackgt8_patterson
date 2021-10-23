const hmacSHA512 = require("crypto-js/hmac-sha512");
const Base64 = require("crypto-js/enc-base64");

interface HMACTypes {
  sharedKey: string;
  secretKey: string;
  date: Date,
  httpMethod: string;
  requestURL: string;
  contentType?: string;
  contentMD5?: string;
  nepApplicationKey?: string;
  nepCorrelationID?: string;
  nepOrganization?: string;
  nepServiceVersion?: string;
}

function createHMAC({
  sharedKey,
  secretKey,
  date,
  httpMethod,
  requestURL,
  contentType,
  contentMD5,
  nepApplicationKey,
  nepCorrelationID,
  nepOrganization,
  nepServiceVersion,
}: HMACTypes) {
    let uri = encodeURI(requestURL.replace(/^https?:\/\/[^/]+\//, "/"));

    const isoDate = date.toISOString().slice(0, 19) + ".000Z";
  
    const oneTimeSecret = secretKey + isoDate;
  
    let toSign = httpMethod + "\n" + uri;
    if (contentType) {
      toSign += "\n" + contentType.trim();
    }
    if (contentMD5) {
      toSign += "\n" + contentMD5.trim();
    }
    if (nepApplicationKey) {
      toSign += "\n" + nepApplicationKey.trim();
    }
    if (nepCorrelationID) {
      toSign += "\n" + nepCorrelationID.trim();
    }
    if (nepOrganization) {
      toSign += "\n" + nepOrganization.trim();
    }
    if (nepServiceVersion) {
      toSign += "\n" + nepServiceVersion.trim();
    }
  
    const key = hmacSHA512(toSign, oneTimeSecret);
    console.log("bruh");
    console.log(`${sharedKey}:${Base64.stringify(key)}`);
    return `${sharedKey}:${Base64.stringify(key)}`;
  };

  export default createHMAC;