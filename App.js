import React from 'react';
import { StyleSheet } from 'react-native';

// 3rd party libraries
import {
  Actions,
  Router,
  Scene,
  // Reducer,
  Tabs,
  Stack,
  
} from 'react-native-router-flux';
import { Icon } from 'antd-mobile-rn';


// Views
import {
  FabiView,
  BiBiView, 
  OrderView, 
  SettingsView,
} from './src/pages';

// components
import {
  TabIcon
} from './src/components';




// @todo remove when RN upstream is fixed
console.ignoredYellowBox = [
  'Warning: In next release empty section headers will be rendered.',
  'Warning: setState(...): Can only update a mounted or mounting component.',
];
const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
    height: 49,
  },
});

const scenes = Actions.create(
  <Stack
    hideNavBar
    headerMode="screen"
    key="root"
  >
    <Tabs
      key='tabbar'
      tabBarStyle={styles.tabBarStyle}
      wrap={true}
      showLabel={false}
      swipeEnabled={false}
      // headerMode='screen'
      icon={TabIcon}
      lazy={true}
      tabBarPosition={'bottom'} 
      activeBackgroundColor='white'
      inactiveBackgroundColor='white'
      activeTintColor='#4ECBFC'
      inactiveTintColor='#aaa'
    >
      <Stack
        key='bibi'
        title='币币交易'

      >
        <Scene
          key='bibi_key'
          component={BiBiView}
          icon={() => <Icon type="check" size="md" color="red" />}
        />
      </Stack>
      <Stack
        key='fabi'
        title='法币交易'
      >
        <Scene
          key='fabi_key'
          component={FabiView}
        />
      </Stack>
      <Stack
        key='order'
        title='订单'
      >
        <Scene
          key='order_key'
          component={OrderView}
        />
      </Stack>
      <Stack
        key='settings'
        title='个人'
      >
        <Scene
          key='settings_key'
          component={SettingsView}
        />
      </Stack>
    </Tabs>
  </Stack>
);

export default class Periods extends React.Component {
  render() {
    return <Router scenes={scenes} />;
  }
}

