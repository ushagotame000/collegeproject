// utils/rc4.js
export const rc4 = (key, text) => {
  let s = [],
    j = 0,
    x,
    i = 0,
    res = [];
  for (let i = 0; i < 256; i++) {
    s[i] = i;
  }
  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
    [s[i], s[j]] = [s[j], s[i]];
  }
  i = j = 0;
  for (let y = 0; y < text.length; y++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    [s[i], s[j]] = [s[j], s[i]];
    x = s[(s[i] + s[j]) % 256];
    res.push(String.fromCharCode(text.charCodeAt(y) ^ x));
  }
  return res.join("");
};

export const encrypt = (key, text) => {
  return rc4(key, text);
};

export const decrypt = (key, encryptedText) => {
  return rc4(key, encryptedText);
};
