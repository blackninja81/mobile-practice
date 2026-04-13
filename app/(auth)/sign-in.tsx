import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const signin = () => {
  return (
    <View>
      <Text>signin</Text>
      <Link href="/(auth)/sign-up">Create New Account</Link>
    </View>
  );
};

export default signin;
