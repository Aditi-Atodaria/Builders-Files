import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import AboutScreen from '../Screens/AboutScreen';
import AccountScreen from '../Screens/AccountScreen';
import AddProjectScreen from '../Screens/AddProject';
import ViewProjectScreen from '../Screens/ViewProject';
import UpdateProjectScreen from '../Screens/UpdateProject';

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  render() {
    return (
      <Drawer.Navigator screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="ADD PROJECT" component={AddProjectScreen} />
        <Drawer.Screen name="VIEW PROJECT" component={ViewProjectScreen} />
        <Drawer.Screen name="UPDATE PROJECT" component={UpdateProjectScreen} />
        <Drawer.Screen name="ABOUT" component={AboutScreen} />
        <Drawer.Screen name="ACCOUNT" component={AccountScreen} />
      </Drawer.Navigator>
    );
  }
}
