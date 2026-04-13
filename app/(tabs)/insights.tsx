import { styled } from "nativewind";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView as RNsafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNsafeAreaView);
const insights = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text>insights</Text>
    </SafeAreaView>
  );
};

export default insights;
