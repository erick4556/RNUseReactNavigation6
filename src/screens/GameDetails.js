import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

const GameDetails = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Game Details Screen</Text>
        <Text>{route.params?.title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default GameDetails;
