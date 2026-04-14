import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNsafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNsafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-7xl font-bold font-sans-extrabold">Home</Text>
      <Link
        href="/Onboarding"
        className="mt-4 bg-primary text-white rounded p-4  font-sans-bold "
      >
        Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 bg-primary text-white rounded p-4  font-sans-bold "
      >
        Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 bg-primary text-white rounded p-4  font-sans-bold "
      >
        Sign Up
      </Link>
    </SafeAreaView>
  );
}
