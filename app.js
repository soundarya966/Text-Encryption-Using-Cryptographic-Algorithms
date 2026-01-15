require('dotenv').config();
const { encrypt, decrypt } = require('./encryption');

const message = "Hello, Cyber Security Task 1!";

// Encrypting
const encrypted = encrypt(message);
console.log("Encrypted Output:", encrypted);

// Decrypting
const decrypted = decrypt(encrypted);
console.log("Decrypted Output:", decrypted);
