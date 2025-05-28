import { StepType } from "@/types/stepType";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type StepProps = {
    title:string,
    index:number
    steps: StepType[]
}


export default function Step({title, index, steps}: StepProps){
    const [toggleList, setToggleList] = useState<boolean>(false)
    return(
        <>
        <TouchableOpacity
        onPress={() => setToggleList(t => !t)}
        className='flex flex-row items-center p-2 mb-2 border-b-2 border-black/50 pb-4'>
            {/* Drop down menu */}
            <View className="w-9 h-9 border-2 border-black rounded-full items-center justify-center mr-3">
                <Text className="text-base font-semibold">{index + 1}</Text>
            </View>
            <Text className='capitalize text-xl'>{title}</Text>
        </TouchableOpacity>

            {toggleList && (
                <Text>
                    {steps.map(s => (
                        <View className=" bg-[#FBB860]/40 p-2 rounded-md w-full flex flex-row justify-between" key={s.title}>
                            <Text className={`text-lg ${s.completed ? 'line-through' : ''}`}>{s.title}</Text>
                            <BouncyCheckbox
                            isChecked={s.completed}
                            onPress={(isChecked: boolean) => {}}
                            fillColor="#F39E30"
                            />
                        </View>
                    ))}
                </Text>
            )}
        </>
    )
}