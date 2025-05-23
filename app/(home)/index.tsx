import MorningSection from "@/components/sections/MorningSection";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const list: [] = [
//     {name:'Cleanser'}
// ]

export default function Home() {
    return (
        <SafeAreaView className="relative flex-1">
            <View className="bg-[#7acfc6] h-40 w-full absolute">
                <Text className="text-2xl text-center pt-16 text-white">Tue 21</Text>
            </View>

            <View className="bg-white rounded-t-[30px] p-5 mt-10">
                <MorningSection />
            </View>

        </SafeAreaView>
    );
}

