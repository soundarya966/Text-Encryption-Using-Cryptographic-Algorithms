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

## Technologies Used
* Node.js (Crypto module)
* Dotenv (Environment Management)
  
## How Encryption Works
1. User provides plaintext and password
2. A random salt is generated
3. A random IV is generated
4. AES-256-CBC encrypts the data
5. Encrypted text is returned

## Learning Outcomes Achieved
* **Symmetric Encryption Basics**: Utilized the AES-256-CBC algorithm for high-security data protection.
* **IV/Nonce Handling**: Implemented a random Initialization Vector (IV) for every encryption process. This ensures that the same plaintext input results in a unique ciphertext output every time.
* **Secure Key Storage**: Used environment variables (\`.env\`) and \`.gitignore\` to prevent sensitive cryptographic keys from being exposed in source control.

## How to Run
1. Clone the repository.
2. Run \`npm install\` to install dependencies (\`express\`, \`dotenv\`).
3. Create a \`.env\` file in the root directory and add:
   \`ENCRYPTION_KEY=your_32_character_secret_key_here\`
4. Run \`node app.js\` to see the encryption/decryption in action.

EOF
