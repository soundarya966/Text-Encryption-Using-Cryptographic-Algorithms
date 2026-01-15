'use strict';

const crypto = require('crypto');

const PASSWORD = process.env.ENCRYPTION_KEY; // User secret
const IV_LENGTH = 16;
const SALT_LENGTH = 16;

function encrypt(text) {
  // Generate random salt and IV
  const salt = crypto.randomBytes(SALT_LENGTH);
  const iv = crypto.randomBytes(IV_LENGTH);

  // Derive key using password and salt
  const key = crypto.scryptSync(PASSWORD, salt, 32);

  // Create cipher
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

  let encrypted = cipher.update(text, 'utf8');
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  // Return salt:iv:ciphertext
  return salt.toString('hex') + ':' + iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text) {
  const parts = text.split(':');

  const salt = Buffer.from(parts[0], 'hex');
  const iv = Buffer.from(parts[1], 'hex');
  const encryptedText = Buffer.from(parts[2], 'hex');

  // Re-derive key using same salt
  const key = crypto.scryptSync(PASSWORD, salt, 32);

  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);

  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);

  return decrypted.toString('utf8');
}

module.exports = { encrypt, decrypt };
