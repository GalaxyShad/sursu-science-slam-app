import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import Wrapper from "../components/Wrapper";
import TitleSlam from "../components/TitleSlam";
import PageTitle from "../components/PageTitle";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import BottomNavigation from "../components/BottomNavigation";

import ScheduleItem from "../components/ScheduleItem";

export default Schedule = ({navigation}) => {
  return (
    <Wrapper>
      <PageTitle>Расписание</PageTitle>
      <ScrollView>
        <ScheduleItem time={"8:00"} content={"Сбор и регистрация участников"}/>
        <ScheduleItem time={"8:20"} content={"Приветственные слова от организаторов"}/>
        <ScheduleItem 
          time={"8:40"}
          content={{
            title: "Если забыл, как дышать",
            description: "Алексей Ушаков, врач анестезиолог-реаниматолог",
            link: "https://docs.expo.dev/guides/linking/"
          }}
        />
        <ScheduleItem 
          time={"8:50"}
          content={{
            title: "Если забыл, как дышать",
            description: "Алексей Ушаков, врач анестезиолог-реаниматолог",
            link: "https://docs.expo.dev/guides/linking/"
          }}
        />
        <ScheduleItem time={"9:00"} content={"Cofee break (Перерыв)"}/>
        <ScheduleItem 
          time={"9:30"}
          content={{
            title: "Если забыл, как дышать",
            description: "Алексей Ушаков, врач анестезиолог-реаниматолог",
            link: "https://docs.expo.dev/guides/linking/"
          }}
        />
        <ScheduleItem 
          time={"9:40"}
          content={{
            title: "Если забыл, как дышать",
            description: "Алексей Ушаков, врач анестезиолог-реаниматолог",
            link: "https://docs.expo.dev/guides/linking/"
          }}
        />
        <ScheduleItem time={"9:50"} content={"Перерыв"}/>
        <ScheduleItem time={"10:00"} content={"Пицца!!!"}/>
        <ScheduleItem 
          time={"10:30"}
          content={{
            title: "Если забыл, как дышать",
            description: "Алексей Ушаков, врач анестезиолог-реаниматолог",
            link: "https://docs.expo.dev/guides/linking/"
          }}
        />
        <ScheduleItem 
          time={"10:40"}
          content={{
            title: "Если забыл, как дышать",
            description: "Алексей Ушаков, врач анестезиолог-реаниматолог",
            link: "https://docs.expo.dev/guides/linking/"
          }}
        />

      </ScrollView>
      <BottomNavigation navigation={navigation}/>
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