
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import Carlos01 from "./pages/Carlos01";
import Ana01 from "./pages/Ana01";
import Joao01 from "./pages/Joao01";
import Leo01 from "./pages/Leo01";
import Luiz01 from "./pages/Luiz01";


const Tab = createBottomTabNavigator();

export default function TabNavigator () {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Carlos01">
        <Tab.Screen name="Carlos01" component={Carlos01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Ana01" component={Ana01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Joao01" component={Joao01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Leo01" component={Leo01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Luiz01" component={Luiz01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
