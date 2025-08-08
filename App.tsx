import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CryptoDecryptor } from "./encrypt/CryptData";

export default function App() {

  const handleDecrypt = async () => {
    try {
      const data = {
        dado_criptografado:
          "1NhSgo/dOZORQ8a3zIf97OwFO2khwsY0VOp7z3azegTbc5FkN1+dedu8QBJHkeU=",
        chave_aes_criptografada:
          "g17PQYCnPyjF0yTwLnMphXoX14oYIaGcMnp+EG4C61aLbKOWZvaW1fqkIKEN4NVat6nVGp4KFxzFPcSpZNssK6jVyPxn2L75dh5YSoP8+ZTe4uJbVp4lyWyNdYv4FIg10F5VETRbF4PCW0c7H0K7qqEhdEIpvUJcALYJ9UGS+nPjDFDPDOu2rKVOykiPFXKDMQWrO9MIz3EZgrMKi0XtSchRsH2Y0+iO/C9Sm3nDJiIchhEeEQa2nJpnVK0tbbQeAI01H1nHC1dWKhreBMzM/qWlmonLkgefEsPee4ad+xbxbr5W60SaoWjA+iKzUDXEUUP1KCOUoiH6uxuOsW7K9g==",
        iv: "OSLDE1F2PKgf09+9",
      };

      const response = CryptoDecryptor.decrypt(data.chave_aes_criptografada, data.dado_criptografado, data.iv)
      console.log('conteudo descriptografado', response);
      
    } catch (error) {
      console.error("Decryption error:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleDecrypt}>
        <Text>Testar descriptografia</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
