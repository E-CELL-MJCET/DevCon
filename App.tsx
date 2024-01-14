import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView>
      <View className="flex h-full items-center justify-center">
        <Text className="text-green-600">
          Open up App.js to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}
