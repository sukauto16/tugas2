import { View, Text, StyleSheet, TextInput, Pressable, Image } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (username && password) {
      router.push("/page1");
    } else {
      alert("Username dan Password wajib diisi");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png" }}
        style={styles.logo}
      />
      <Text style={styles.title}>Masuk</Text>
      <Text style={styles.subtitle}>Gunakan akun Google Anda</Text>

      <TextInput
        style={styles.input}
        placeholder="Email atau ponsel"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Masukkan password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Pressable style={styles.forgotButton}>
        <Text style={styles.forgotText}>Lupa sandi?</Text>
      </Pressable>

      <Pressable style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Berikutnya</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
    paddingTop: 80,
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: "#f9f9f9",
  },
  forgotButton: {
    alignItems: "flex-end",
    marginBottom: 30,
  },
  forgotText: {
    color: "#1a73e8",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#1a73e8",
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  createAccount: {
    marginTop: 40,
    alignItems: "center",
  },
  createText: {
    fontSize: 14,
    color: "#1a73e8",
    fontWeight: "500",
  },
});
