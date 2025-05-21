import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import { View } from "react-native";

type step = {
    title: string,
    completed: boolean
}

type TemplateSectionProps = {
    "steps": {
        'clenser'?: step[],
        'sunscreen'?: step[],
    },
    "type": 'Morning' | 'Noon' | 'Evening'
}

export default function TemplateSection({steps, type}: TemplateSectionProps) {
    let bgColor: string;
    
    switch(type){
        case "Morning":
            bgColor = 'bg-[#F7ECA2]'
            break;
        case "Evening":
            bgColor = 'bg-[#6094D7]'
            break;
        case "Noon":
            bgColor = 'bg-[#F7C7A2]'
            break;
    }
    
    return (
        <View>
            {type === 'Morning' && <Header icon={<Feather name="sunrise" size={24} color="black" />} title='Morning' />}
            {type === 'Noon' && <Header icon={<FontAwesome name="sun-o" size={24} color="black" />} title='Morning' />}
            {type === 'Evening' && <Header icon={<Feather name="moon" size={24} color="black" />} title='Morning' />}
        </View>
    );
}

function Header({icon, title}: {icon:React.ReactNode, title:string}){
    return (
        <View>
            {icon}
            {title}
        </View>
    )
}