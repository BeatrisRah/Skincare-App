import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const list: [] = [
//     {name:'Cleanser'}
// ]

export default function Home() {
    return (
        <SafeAreaView className="relative">
            <View className="bg-[#7acfc6] h-40 w-full absolute">
                <Text className="text-2xl text-center pt-16 text-white">Tue 21</Text>
            </View>

            <View style={styles.content}>
                    
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#ffffff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        flex: 1,
        marginTop:40}
    })