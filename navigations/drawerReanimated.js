import { Runtime } from '@genx/react';
import { createDrawerNavigator } from '@react-navigation/drawer';

Runtime.update({
    'navigation:drawer': createDrawerNavigator,
});

Runtime.default({
    'navigation:drawerReanimated': createDrawerNavigator,
});
