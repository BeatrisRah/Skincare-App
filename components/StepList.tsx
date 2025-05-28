import { SectionTypes } from "@/types/sectionTypes";
import { StepType } from "@/types/stepType";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type StepProps = {
    title:string,
    index:number
    steps: StepType[]
    type: SectionTypes
}


export default function Step({title, index, steps, type}: StepProps){
    const [toggleList, setToggleList] = useState<boolean>(false)
    const acentColor = type === "Morning"
        ? "bg-morning-box/40"
        : type === "Noon"
        ? "bg-noon-box/40"
        : "bg-[#3559B4]/40";
        
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
                        <View className={`${acentColor} p-2 rounded-md w-full flex flex-row justify-between`} key={s.title}>
                            <Text className={`text-lg ${s.completed ? 'line-through' : ''}`}>{s.title}</Text>
                            <BouncyCheckbox
                            isChecked={s.completed}
                            onPress={(isChecked: boolean) => {}}
                            fillColor={type === 'Morning' ? '#F39E30' : type === 'Noon'? '#EE7E42' : '#3559B4' }
                            />
                        </View>
                    ))}
                </Text>
            )}
        </>
    )
}