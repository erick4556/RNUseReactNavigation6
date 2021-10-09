import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Home = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView style={{padding: 20}}>
        <View style={styles.viewHeading}>
          <Text style={styles.title}>Hello Test</Text>
          <ImageBackground
            source={require('../../assets/images/user-profile.jpeg')}
            style={{width: 35, height: 35}}
            imageStyle={{borderRadius: 25}}
          />
        </View>

        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={20}
            color="#c6c6c6"
            style={{marginRight: 5}}
          />
          <TextInput placeholder="Search" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  viewHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  searchBar: {
    flexDirection: 'row',
    borderColor: '#c6c6c6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
});
