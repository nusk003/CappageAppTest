import React from 'react';
import Header from '../../../Components/Header'
import { View,ScrollView } from 'react-native';
import DesignSystem from '../../../Components/DesignSystem'
import Drop from '../../../Components/Drop';

export default () => {

    return (
      <ScrollView>
            <Header />
            <DesignSystem/>
            <Drop/>
      </ScrollView>
    );
  }



