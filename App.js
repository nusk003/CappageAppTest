// export default from './storybook'
import React from 'react'
import Header from './Components/Header'
import { View } from 'react-native';
import DesignSystem from './Components/DesignSystem';
import Drop from './Components/Drop';

export default () => {
    return(
        <View>
        <Header />
        <DesignSystem/>
        <Drop/>
        </View>
    )
}
