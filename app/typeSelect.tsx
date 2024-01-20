import Card from "../components/card";
import React from "react";
import { View } from "react-native";

const TypeSelect = () => {
  return (
    <View className="">
      <Card
        title="Developer"
        description="As a developer you can explore the trending tech stack"
        direction={1}
      ></Card>
      <Card
        title="Recuriter"
        description="As a Recuriter you can explore the required developer for your tech stack"
        direction={2}
      ></Card>
    </View>
  );
};

export default TypeSelect;
