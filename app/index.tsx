import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-3xl font-bold mb-4">Welcome!</Text>
      <Link className="bg-blue-200 px-4 py-2 text-lg text-black" href="/(home)">
        Next
      </Link>
    </View>
  );
}
