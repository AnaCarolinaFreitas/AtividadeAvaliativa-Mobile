import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons";

import Cadu01 from "./pages/Cadu01";
import Cadu02 from "./pages/Cadu02";
import Ana01 from "./pages/Ana01";
import Ana02 from "./pages/Ana02";
import Joao01 from "./pages/Joao01";
import Joao02 from "./pages/Joao02";
import Leo01 from "./pages/Leo01";
import Leo02 from "./pages/Leo02";
import Luiz01 from "./pages/Luiz01";
import Luiz02 from "./pages/Luiz02";


const Tab = createBottomTabNavigator();

export default function TabNavigator () {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Cadu01">
        <Tab.Screen name="Cadu01" component={Cadu01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size{size} />
        )}} />
        <Tab.Screen name="Cadu02" component={Cadu02} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Ana01" component={Ana01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Ana02" component={Ana02} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Joao01" component={Joao01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Joao02" component={Joao02} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Leo01" component={Leo01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Leo02" component={Leo02} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Luiz01" component={Luiz01} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
        <Tab.Screen name="Luiz02" component={Luiz02} options={{ tabBarIcon: ({ color, size}) => ( <Icon name="home" color={color} size={size} />
        )}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
 
