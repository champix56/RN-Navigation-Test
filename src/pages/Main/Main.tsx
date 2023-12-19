import {View, Text} from 'react-native';
import React from 'react';

type Props = {};

const Main = (props: Props) => {
  return (
    <View>
      <Text>{JSON.stringify(props)} Main</Text>
    </View>
  );
};

export default Main;
