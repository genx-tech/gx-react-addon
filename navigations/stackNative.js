import { Runtime } from '@genx/react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

Runtime.update({
    'navigation:stack': createNativeStackNavigator,
    'navigation:stackNative': createNativeStackNavigator,
});
