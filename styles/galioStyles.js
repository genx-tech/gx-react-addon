import React from 'react';
import { withGalio, GalioProvider } from 'galio-framework';
import { Runtime } from '@genx/react';

Runtime.update({
    galioStyles: (Component, styles) => withGalio(Component, styles),
});

export default function initialize(theme) {
    return (App) =>
        ({ props }) =>
            (
                <GalioProvider theme={theme}>
                    <App {...props} />
                </GalioProvider>
            );
}
