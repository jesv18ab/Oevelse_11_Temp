import * as React from 'react';
import { Text, View, StyleSheet, Button, Image, Platform } from 'react-native';
import Constants from 'expo-constants';
import {AdMobBanner, AdMobInterstitial, PublisherBanner, AdMobRewarded, AdMob
} from 'expo-ads-admob'

const adUnitID ="ca-app-pub-3940256099942544/6300978111";

export default class App extends React.Component {
  render() {
    if (Platform.OS === 'ios' || Platform.OS === 'android' ){
    return (
        <View style={styles.container}>
            <Text style={ {marginLeft: 45, fontSize: 30}}> Let's include som ads</Text>
            <Image source = {{uri:'http://blog.clickdimensions.com/wp-content/uploads/2017/05/BlogFeatureImage-5-Types-of-Online-Advertising-to-Generate-Leads.png'}}
                style = {{ width: 200, height: 200, margin: 95, marginTop: 10 }}/>
        </View>
    );}
    else {
      return (
          <View style={styles.container}>
            <Text style={ {marginLeft: 500, fontSize: 30}}> Let's include som ads</Text>
            <Image source = {{uri:'http://blog.clickdimensions.com/wp-content/uploads/2017/05/BlogFeatureImage-5-Types-of-Online-Advertising-to-Generate-Leads.png'}}
                   style = {{ width: 200, height: 200, marginLeft: 550, marginTop: 10 }}/>
          </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
