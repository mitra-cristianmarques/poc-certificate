import crypto from "react-native-quick-crypto";
import { Buffer } from "buffer";

export class CryptoDecryptor {
  private static privateKey = ``;
  /**
   * Decrypts AES-GCM encrypted data using RSA-OAEP decrypted AES key.
   * @param {string} encryptedKey - Base64 RSA-encrypted AES key
   * @param {string} encryptedPayload - Base64 AES-GCM encrypted payload (ciphertext + authTag)
   * @param {string} ivBase64 - Base64 IV (must be 12 bytes)
   * @param {string} privateKey - PEM-formatted RSA private key
   * @returns {string} - Decrypted plaintext
   */
  static async decrypt(
    encryptedKey: string,
    encryptedPayload: string,
    ivBase64: string
  ) {
    try {
      const aesKey = this.decryptRSAKey(encryptedKey);

      const {authTag, ciphertext} = this.getAuthTagAndCipherText(encryptedPayload)

      // decrypt the payload using the AES key, iv code and the extracted authTag from payload
      const iv = Buffer.from(ivBase64, "base64");

      const decipher = crypto.createDecipheriv("aes-256-gcm", aesKey, iv);
      decipher.setAuthTag(authTag);

      let decrypted = decipher.update(ciphertext);
      decrypted = Buffer.concat([decrypted, decipher.final()]);

      return decrypted.toString();
    } catch (error) {
      console.error("Decryption failed:", error);
      return null;
    }
  }

  private static decryptRSAKey(key: string) {
    return crypto.privateDecrypt(
      {
        key: this.privateKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
      },
      Buffer.from(key, "base64")
    );
  }

  private static getAuthTagAndCipherText(encryptedPayload: string) {
    const fullPayload = Buffer.from(encryptedPayload, "base64");
    const ciphertext = fullPayload.slice(0, -16);
    const authTag = fullPayload.slice(-16);
    return {ciphertext, authTag}
  }
}
