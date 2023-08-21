import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";

import { styles } from "./styles";
import UserData from "../../@types/dataUser";
import { getUsers } from "../../services/app/getUsers";
import Card from "../../components/Card";
export default function Home() {
  const [users, setUsers] = useState<UserData[]>();

  async function loadUserData() {
    try {
      const data = await getUsers();

      if (data?.status === 200 || data?.status === 201) {
        setUsers(data?.data);
      } else {
        Alert.alert("Erro!", "Dados não carregados...");
      }
    } catch (error) {
      throw new Error("Ocorreu um erro durante o processamento.");
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  function renderVertical(item: UserData) {
    return <Card item={item} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <FlatList
        data={users}
        snapToAlignment="start"
        scrollEventThrottle={16}
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${(item.id, "-", item.uid)}`}
        renderItem={({ item }) => renderVertical(item)}
        style={{ width: "100%" }}
        ListFooterComponent={<View style={{ height: 20 }} />}
      />
    </View>
  );
}
