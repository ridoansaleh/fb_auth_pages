const CryptoJS = require("crypto-js");

const { REACT_APP_SECRET_KEY } = process.env;

export const encryptText = (text) => {
  const ciphertext = CryptoJS.AES.encrypt(
    text,
    REACT_APP_SECRET_KEY
  ).toString();
  return ciphertext;
};

export const decryptText = (ciphertext) => {
  const bytes = CryptoJS.AES.decrypt(ciphertext, REACT_APP_SECRET_KEY);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};
