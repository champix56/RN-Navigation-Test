import {View, Text} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';

type Props = {title: string};

const StartRent: React.FC<RouteProp & type> = () => {
  return (
    <View>
      <Text>StartRent {JSON.stringify({})}</Text>
    </View>
  );
};

export default StartRent;
