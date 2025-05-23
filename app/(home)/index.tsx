
import TemplateSection from "@/components/sections/TempSection";
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

            <View className="bg-white rounded-t-[30px] px-2 py-5 mt-10">
                <TemplateSection steps={{}} type={"Morning"} />
                <TemplateSection steps={{}} type={"Noon" } />
                <TemplateSection steps={{}} type={"Evening" } />

            </View>

        </SafeAreaView>
    );
}

