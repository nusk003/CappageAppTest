import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import MenuItem from '../../../Components/MenuItem'
import { AntDesign } from '@expo/vector-icons';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import CenterView from '../CenterView';

const activeMenuItem = {
    title : "Calender",
    icon : <AntDesign name="calendar" color = "white" size = {widthPercentageToDP(5)} />,
    active : true
}

const menuItem = {
    title : "Calender",
    icon : <AntDesign name="calendar" color = "black" size = {widthPercentageToDP(5)} />,
    active : false
}

storiesOf('MenuItem', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('without active', () => (
    <MenuItem {...menuItem} />
  ))
  .add('on active', () => (
    <MenuItem {...activeMenuItem} />
  ))
