import React from "react";
import { StyleSheet, View } from "react-native";

import Wrapper from "../components/Wrapper";
import TitleSlam from "../components/TitleSlam";
import PageTitle from "../components/PageTitle";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";

export default Login = ({navigation}) => {
  return (
    <Wrapper>
      <PageTitle>Вход</PageTitle>

      <View style={styles.container}>
        <TitleSlam/>
        <View style={styles.inputs} >
          <CustomInput label='Email'>Введите email</CustomInput>
          <CustomInput label='Пароль'>Введите Пароль</CustomInput>
        </View>

        <CustomButton onClick={() => navigation.navigate('Schedule')}>Войти</CustomButton>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 'auto'
  },

  inputs: {
    marginTop: 32,
    marginBottom: 48,
  } 
});