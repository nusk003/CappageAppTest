import React from 'react';
import { View } from 'react-native'
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react-native';
import Welcome from '.';

storiesOf('Welcome', module).add('to Storybook', () => <View><Welcome showApp={linkTo('Button')} /></View>);
