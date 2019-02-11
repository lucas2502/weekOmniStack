import { createSwitchNavigator, createStacknavigator, createAppContainer } from "react";

import Login from "./pages/Login";
import TimeLine from "./pages/Timeline";
import New from "./pages/New";

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        App: createStacknavigator({
            TimeLine,
            New
        })
    })
);

export default Routes;