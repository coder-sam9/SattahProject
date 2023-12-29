import React, { useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
  Modal,
  FlatList,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "../Config/Colors";
import AppScreen from "./AppScreen";

import PickerItem from "../components/PickerItem";

function AppPicker({ items, placeholder, onSelectItem, selectedItem, icon }) {
  const [ModalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            name="apps"
            size={25}
            color="blue"
            style={{ paddingRight: 80 }}
          />
          <Text>{selectedItem ? selectedItem.label : placeholder}</Text>
          <MaterialCommunityIcons name="chevron-down" size={25} color="red" />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={ModalVisible} animationType="slide">
        <AppScreen>
          <FlatList
            data={items}
            numColumns={3}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                icon={item.icon}
                backgroundColor={item.backgroundColor}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
          <Button onPress={() => setModalVisible(false)} title="Close" />
        </AppScreen>
      </Modal>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
});

export default AppPicker;
