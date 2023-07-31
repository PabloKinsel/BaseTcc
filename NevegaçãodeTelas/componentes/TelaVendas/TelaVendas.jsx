import React from "react";
import { Text } from "react-native";

export function TelaVendas({ route }) {
  const { productName } = route.params;

  return (
    <Text>
      Venda do produto: {productName}
    </Text>
  );
}