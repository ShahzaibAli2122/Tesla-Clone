import { StyleSheet, Text, View , Pressable} from "react-native";
import { Link } from "expo-router";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

const MenuOption = ({ item }) => {
return (
  <Link href={item.href} asChild >
    <Pressable style={styles.optionRow}>
      {/* {Icon} */}
      
    <MaterialCommunityIcons name={item.iconName} size={26} color="gray" />

      {/* {Text} */}

    <Text href={item.href} style={styles.optionText}>{item.name}</Text>
      {/* {Icons} */}
    <MaterialIcons
        name="keyboard-arrow-right"
        size={24}
        color="gray"
        style={{ marginLeft: "auto" }}
    />
    </Pressable>
    </Link>
);
};

const styles = StyleSheet.create({
optionText: {
    color: "#eee",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
},
optionRow: {
    marginVertical: 15,
    flexDirection: "row",
    alignItems: "center",
},
});

export default MenuOption;
