import { Runtime } from '@genx/react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

Runtime.update({
    'navigation:bottomTab': createBottomTabNavigator,
    'navigation:bottomTabNative': createBottomTabNavigator,
});
