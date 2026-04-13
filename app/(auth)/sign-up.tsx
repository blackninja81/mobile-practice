import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const signup = () => {
  return (
    <View>
      <Text>signup</Text>
      <Link href="/(auth)/sign-in">Login To Account</Link>
    </View>
  );
};

export default signup;
