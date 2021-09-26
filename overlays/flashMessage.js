import React from 'react';
import FlashMessage, {
    showMessage,
    hideMessage,
} from 'react-native-flash-message';
import { Runtime, composeScreen } from '@genx/react';

Runtime.register('react-native-flash-message', { showMessage, hideMessage });

export default function initialize({ position = 'top' } = {}) {
    composeScreen((elScreen) => (
        <>
            {elScreen}
            <FlashMessage position={position} />
        </>
    ));
}
