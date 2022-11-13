import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

import CustomButton from "../components/CustomButton";
import Wrapper from "../components/Wrapper";
import TitleSlam from "../components/TitleSlam";

const image = {
  uri: "https://thumb.tildacdn.com/tild3539-6232-4264-b838-303562646362/-/format/webp/5.png",
};

export default Intro = ({navigation}) => {
  return (
    <Wrapper>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
        <TitleSlam/>

        <View style={styles.buttons}>
          <CustomButton onClick={() => navigation.navigate('Login')}> Вход </CustomButton>
          <CustomButton onClick={() => navigation.navigate('Registration')} secondary> Регистрация </CustomButton>
        </View>
      {/* </ImageBackground> */}
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  image: {
    paddingTop: 32,
    paddingHorizontal: 5,
    marginLeft: 0,
    
    flex: 1,
    width: "100%",
  },

  buttons: {
    marginTop: 'auto',
    marginBottom: 32
  }
});
