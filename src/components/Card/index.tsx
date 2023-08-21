import React from "react";
import { View, Text, Image } from "react-native";

import { styles } from "./styles";
import UserData from "../../@types/dataUser";

type CardProps = {
  item: UserData;
};

export default function Card({ item }: CardProps) {
  return (
    <View style={styles.card} key={`${(item.id, "-", item.uid)}`}>
      <Image source={{ uri: item?.avatar }} style={styles.imgBox} />
      <View style={styles.infoBox}>
        <View style={styles.row}>
          <Text> {item?.employment?.title}</Text>
        </View>
        <View style={styles.row}>
          <Text>
            Name: {item.first_name} {item?.last_name}{" "}
          </Text>
          <Text>from {item?.address?.state}</Text>
        </View>
      </View>
    </View>
  );
}
