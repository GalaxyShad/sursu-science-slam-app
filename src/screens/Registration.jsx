import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Wrapper from "../components/Wrapper";
import TitleSlam from "../components/TitleSlam";
import PageTitle from "../components/PageTitle";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import UserTypeSwitch from "../components/UserTypeSwitch";

import { useState } from "react";

export default Registration = () => {
  const SpeakerSection = () => {
    return (
      <>
        <CustomInput label='Тема доклада'>Введите тему доклада</CustomInput>
        <CustomInput label='Коротко о себе'>Расскажите кратко о себе</CustomInput>

        <CustomInput label='Ссылка на материалы'>Скопируйте сюда ссылку на материалы</CustomInput>
      </>
    )
  }

  const [userType, setUserType] = useState('CЛУШАТЕЛЬ')
  
  return (
    <Wrapper>
      <PageTitle>Регистрация</PageTitle>
      <ScrollView>
        <UserTypeSwitch onChange={(type) => setUserType(type)}></UserTypeSwitch>
        <CustomInput label='Фамилия'>Введите вашу фамилию</CustomInput>
        <CustomInput label='Имя'>Введите ваше имя</CustomInput>

        {(userType === 'СПИКЕР') && (<SpeakerSection/>)}

        <CustomInput label='Электронная почта'>Введите ваш Email</CustomInput>
        <CustomInput label='Пароль'>Введите ваш пароль</CustomInput>
        <CustomInput label='Подтверждение пароля'>Введите пароль еще раз</CustomInput>
      </ScrollView>

      <View style={{marginTop: 'auto'}}>
        <CustomButton>Зарегистрироваться</CustomButton>
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