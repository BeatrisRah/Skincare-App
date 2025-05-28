import { SectionTypes } from '@/types/sectionTypes';
import { StepType } from '@/types/stepType';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { Text, View } from "react-native";
import Step from '../StepList';



type TemplateSectionProps = {
    "steps": {
        clenser?: StepType[],
        sunscreen?: StepType[],
    },
    "type": SectionTypes
}

export default function TemplateSection({steps, type}: TemplateSectionProps) {
    const bgColor =
        type === "Morning"
            ? "bg-morning"
            : type === "Noon"
            ? "bg-noon"
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
                Object.entries(steps).map(([name, s], i) => <Step key={name} title={name} index={i} steps={s} type={type} />)}
                
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



