import { Tabs } from "expo-router";

export default function RootLayout(){
    return <Tabs
    screenOptions={{headerShown:false}}>
    <Tabs.Screen
    name="index"
    options={{
        title:'Daily'
    }}
    />
    <Tabs.Screen
    name="weekly"
    options={{
        title:'Weekly'
    }}
    />
    </Tabs>
}