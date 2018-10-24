import React, { Component } from 'react';
import { DatePicker, List, Icon } from 'antd-mobile-rn';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    return (
    <View style={{ marginTop: 30 }}>
      <List>
        <DatePicker mode="datetime">
          <List.Item arrow="horizontal">
            bibi
            <Icon type="check" size="md" color="red" />
          </List.Item>
        </DatePicker>
      </List>
    </View>
    );
  }
}
