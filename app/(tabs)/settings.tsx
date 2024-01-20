import React from "react";
import { Text, View, Image } from "react-native";

function settings({ name, title, description, contributions, image }) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{title}</Text>
      <Text>{description}</Text>
      <Text>{contributions}</Text>
      <Image
        source={{
          uri: `$image`,
        }}
      ></Image>
    </View>
  );
}

export default settings;
