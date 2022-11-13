import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";
import { MaterialIcons } from '@expo/vector-icons'; 

import { useState } from "react";
import { useEffect } from "react";


import Wrapper from "../components/Wrapper";
import PageTitle from "../components/PageTitle";
import CustomButton from "../components/CustomButton";
import SpeakerCard from "../components/SpeakerCard";
import BottomNavigation from "../components/BottomNavigation";


export default Voting = ({navigation}) => {
  const [timer, settimer] = useState(100)

  // useEffect(() => {
  //   setInterval(() => {
  //     settimer(timer - 1)
  //   }, 1000)
  
  //   return
  // })
  

  const Counter = ({time}) => {
    return (
      <View style={{
        marginTop: 64
      }}>  
        <MaterialIcons name="schedule" size={128} color="#FFFFFF42" />
        <Text style={{
          
          fontFamily: 'Inter-Bold',
          marginLeft: 12,
          fontSize: 27,
          color: "#FFFFFF42",
        }}>До начала голосования осталось</Text>
        <Text style={{
          fontFamily: 'Inter-Black',
          marginLeft: 12,
          fontSize: 27,
          color: "#FFFFFF",
        }}>{`${Math.floor(time / 60)}:${time % 60}`}</Text>
      </View>
    );
  };

  const VoteForm = () => {
    return (
      <View>
        <View style={{ marginTop: 40 }}>
          <Text style={styles.label}>Как вам выступление?</Text>
          <AirbnbRating
            count={10}
            reviews={[
              "Terrible",
              "Bad",
              "Meh",
              "OK",
              "Good",
              "Hmm...",
              "Very Good",
              "Wow",
              "Amazing",
              "Unbelievable",
            ]}
            defaultRating={10}
            size={30}
            selectedColor={"#8F00FF"}
            reviewColor={"#8F00FF"}
          />
        </View>

        <View style={{ marginTop: "auto" }}>
          <CustomButton>Отправить</CustomButton>
        </View>
      </View>
    );
  };

  return (
    <Wrapper>
      <PageTitle>Голосование</PageTitle>
      <View style={{ height: "100%", flex: 1, flexDirection: "column" }}>
        <View style={{ height: 120 }}>
          <SpeakerCard
            big
            lection={{
              title: "Если забыл, как дышать",
              description: "Алексей Ушаков, врач анестезиолог-реаниматолог",
              link: "https://docs.expo.dev/guides/linking/",
            }}
          />
        </View>
        <Counter time={timer}></Counter>
      </View>


      <BottomNavigation navigation={navigation} />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 21,
    fontFamily: "Inter-SemiBold",
    color: "#fff",
  },

  ratingBox: {
    maringTop: 500,
    height: "100%",
    // backgroundColor: '#fff'
  },
});
