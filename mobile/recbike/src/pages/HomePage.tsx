import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "@react-native-material/core";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Button title="Click Me" onPress={() => alert("🎉🎉🎉")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
