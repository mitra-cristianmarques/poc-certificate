# poc-certificate

A proof-of-concept React Native app for certificate-based cryptography, built with Expo.

## Features

- AES-GCM payload decryption using RSA-OAEP encrypted AES keys
- Secure storage and handling of private keys
- Example UI to trigger decryption
- Uses [`CryptoDecryptor`](encrypt/CryptData.ts) for cryptographic operations

## Project Structure

- [`App.tsx`](App.tsx): Main app UI and logic
- [`encrypt/CryptData.ts`](encrypt/CryptData.ts): AES/RSA decryption logic
- [`encrypt/PrivateKey.ts`](encrypt/PrivateKey.ts): PEM-formatted RSA private key
- [`index.ts`](index.ts): Entry point for Expo
- [`assets/`](assets/): App icons and splash images

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm
- Expo CLI (`npm install -g expo-cli`)

### Install Dependencies

```sh
npm install
```

### Run the App

```sh
npm start
```

Or for specific platforms:

```sh
npm run android
npm run ios
npm run web
```

## Cryptography

- Decryption is handled by [`CryptoDecryptor`](encrypt/CryptData.ts) using `react-native-quick-crypto`.
- Private key is stored in [`PrivateKey.ts`](encrypt/PrivateKey.ts).

## License

This project is for demonstration