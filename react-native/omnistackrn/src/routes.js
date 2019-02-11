import { createSwitchNavigator, createAppContainer } from 'react';

import Login from './pages/Login';
import TimeLine from './pages/Timeline';

const Routes = createAppContainer(
    createSwitchNavigator({
        Login,
        TimeLine
    })
);

export default Routes;