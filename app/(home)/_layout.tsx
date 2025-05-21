import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout(){
    return <Tabs
    screenOptions={{
        headerShown:false,
        tabBarShowLabel:false
        }}>
    <Tabs.Screen
    name="index"
    options={{
        title:'Daily',
        tabBarIcon: ({ focused}) => (
        <TabIcon 
        title='Daily' 
        focus={focused} 
        icon={<AntDesign name="home" size={24} color="black" />}  /> )
    }}
    />
    <Tabs.Screen
    name="weekly"
    options={{
        title:'Weekly',
        tabBarIcon: ({focused}) => (
            <TabIcon
            title='Weekly'
            focus={focused}
            icon={<MaterialCommunityIcons name="calendar-month" size={24} color="black" />}
            />
        )
    }}
    />
    </Tabs>
}

function TabIcon({focus, icon , title}: {focus: boolean, icon:React.ReactNode, title:string}){
    return (
        <View className={`w-20 flex items-center border-b-4 ${focus ? 'border-blue-300': 'border-gray-200'}`}>
            {icon}
            <Text>{title}</Text>
        </View>
    )
}