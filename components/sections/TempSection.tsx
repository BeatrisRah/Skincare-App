import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Text, View } from "react-native";

type step = {
    title: string,
    completed: boolean
}

type TemplateSectionProps = {
    "steps": {
        clenser?: step[],
        sunscreen?: step[],
    },
    "type": 'Morning' | 'Noon' | 'Evening'
}

export default function TemplateSection({steps, type}: TemplateSectionProps) {
    const bgColor =
        type === "Morning"
            ? "bg-[#F7ECA2]"
            : type === "Noon"
            ? "bg-[#F7C7A2]"
            : "bg-[#6094D7]";
        
        const stepsCont = Object.keys(steps).length;
    
    return (
        <View className='w-11/12 mx-auto mb-5'>
            {type === 'Morning' && <Header icon={<Feather name="sunrise" size={24} color="black" />} title='Morning' />}
            {type === 'Noon' && <Header icon={<FontAwesome name="sun-o" size={24} color="black" />} title='Noon' />}
            {type === 'Evening' && <Header icon={<Feather name="moon" size={24} color="black" />} title='Evening' />}
            {/* TODO: Button for edit */}

            {/* List? View? We will see */}
            <View className={`${bgColor} min-h-10 rounded p-2`}>
                {stepsCont === 0 ? <Text className='p-2'>No routine added...</Text>:
                Object.entries(steps).map(([name, steps], i) => <Step key={name} title={name} index={i} />)}
                
            </View>
        </View>
    );
}

function Header({icon, title}: {icon:React.ReactNode, title:string}){
    return (
        <View className='flex flex-row gap-2 items-center justify-center mb-2'>
            {icon}
            <Text className='text-2xl'>{title}</Text>
        </View>
    )
}

function Step({title, index}: {title:string, index:number}){
    return(
        <View className='flex flex-row items-center p-2 mb-2 border-b-2 border-black/50 pb-4'>
            {/* Drop down menu */}
            <View className="w-9 h-9 border-2 border-black rounded-full items-center justify-center mr-3">
                <Text className="text-base ">{index + 1}</Text>
            </View>
            <Text className='capitalize text-xl'>{title}</Text>
        </View>
    )
}

