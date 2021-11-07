import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';
// stacks
import InitialStack from './initialMenu';
import ExtendedStack from './extendedMenu';

// drawer navigation options
const RootDrawerNavigator = createDrawerNavigator({
    Initial: {
        screen: InitialStack,
    },
    About: {
        screen: ExtendedStack,
    },
});

export default createAppContainer(RootDrawerNavigator);
