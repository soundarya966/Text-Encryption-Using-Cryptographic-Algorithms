# Text Encryption Using Cryptographic Algorithms

## Description
This project implements a text encryption and decryption system using
symmetric cryptography. It ensures unique ciphertext outputs for identical
inputs by using a random IV and salt.

## Algorithm Used
- AES-256-CBC (Symmetric Encryption)

## Features
- Encrypts user text securely
- Decrypts encrypted text
- Uses random IV and salt
- Same input produces different encrypted output

## Technology Stack
- JavaScript (Node.js)
- crypto library

## How Encryption Works
1. User provides plaintext and password
2. A random salt is generated
3. A random IV is generated
4. AES-256-CBC encrypts the data
5. Encrypted text is returned

## How to Run
```bash
node encryption.js

## Learning Outcomes
- Symmetric encryption basics
- IV and salt usage
- Secure key derivation
