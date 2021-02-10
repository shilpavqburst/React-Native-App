import React, {useState} from 'react';
import {Switch, TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import ImagePicker from 'react-native-image-crop-picker';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Image,
  ImageBackground,
} from 'react-native';

const App = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const [imageSRC, setImageSRC] = useState([]);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);

  const takePhotoFromGallery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      let temp = imageSRC;
      temp.push(image.path);
      setImageSRC([...temp]);
      console.warn(image.path);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.container}></View>
      <ImageBackground
        style={styles.bg}
        source={require('./src/assets/images/bg.png')}>
        <Text
          style={{
            color: '#98817b',
            fontSize: 18,
            top: 90,
            marginLeft: 30,
            fontFamily: 'bariol_regular-webfont',
          }}>
          add photographs
        </Text>
        {/*<TouchableOpacity onPress={takePhotoFromGallery}>
          <View>
            <Image
              style={styles.logo}
              source={require('./src/assets/images/addimage_icn.png')}
            />
          </View>
        </TouchableOpacity>*/}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 100,
            alignItems: 'center',
            marginLeft: 10,
          }}>
          {imageSRC.length != 4 && (
            <TouchableOpacity onPress={takePhotoFromGallery}>
              <Image
                style={[styles.logo]}
                source={require('./src/assets/images/addimage_icn.png')}
              />
            </TouchableOpacity>
          )}
          {imageSRC.length != 0 &&
            imageSRC?.map((itm, indx) => (
              <Image key={indx} style={[styles.images]} source={{uri: itm}} />
            ))}
        </View>
      </ImageBackground>
      <ScrollView style={styles.maincontainer}>
        <TextInput
          placeholder="product title"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="select category"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="description"
          style={styles.TextInputStyleClass}
        />
        <TextInput placeholder="price" style={styles.TextInputStyleClass} />
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextStyleClass}>negotiable</Text>

          <Switch
            trackColor={{false: '#e8e8e8', true: '#31ea92'}}
            thumbColor={isEnabled1 ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch1}
            value={isEnabled1}
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.TextStyleClass}>feature the product</Text>
          <Switch
            trackColor={{false: '#e8e8e8', true: '#31ea92'}}
            thumbColor={isEnabled2 ? '#FFFFFF' : '#FFFFFF'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch2}
            value={isEnabled2}
          />
        </View>
        <TextInput
          placeholder="select location"
          style={styles.TextInputStyleClass}
        />
        <TextInput
          placeholder="contact person"
          style={styles.TextInputStyleClass}
        />
        <TextInput placeholder="email id" style={styles.TextInputStyleClass} />
        <TextInput
          placeholder="contact number"
          style={styles.TextInputStyleClass}
        />
        <TouchableOpacity>
          <Text style={styles.button}>PREVIEW</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    // flex: 1,
  },
  container: {
    marginLeft: 40,
    height: 150,
  },
  bg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  logo: {
    width: 50,
    height: 45,
    marginLeft: 20,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  panelButton: {
    alignItems: 'center',
    width: 50,
    marginLeft: 30,
  },
  maincontainer: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%',
    marginTop: 50,
  },

  TextInputStyleClass: {
    textAlign: 'left',
    marginBottom: 20,
    fontSize: 22,
    marginLeft: 30,
    height: 40,
    width: 300,
    borderWidth: 0.1,
    borderColor: '#000000',
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    fontFamily: 'bariol_light-webfont',
    top: 20,
  },
  button: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    fontSize: 22,
    marginLeft: 30,
    height: 40,
    width: 300,
    borderWidth: 0.1,
    top: 20,
    borderColor: '#000000',
    borderRadius: 20,
    backgroundColor: '#FF7F50',
  },
  TextStyleClass: {
    textAlign: 'left',
    marginBottom: 20,
    fontSize: 22,
    marginLeft: 30,
    height: 40,
    width: 260,

    backgroundColor: '#FFFFFF',
    fontFamily: 'bariol_light-webfont',
    top: 20,
    color: '#98817b',
  },
  images: {
    // flexDirection: 'row',
    height: 50,
    width: 50,
    marginLeft: 20,
  },
});

export default App;
