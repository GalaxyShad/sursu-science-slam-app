import React from "react";
import { StyleSheet, View } from "react-native";

import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

export default BottomNavigation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="schedule" size={40} color="#FFFFFF42" onPress={() => navigation.navigate('Schedule')}/>
      <MaterialCommunityIcons name="account-star" size={40} color="#FFFFFF42" onPress={() => navigation.navigate('Voting')}/>
      <Feather name="more-horizontal" size={40} color="#FFFFFF42" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D91C',
    borderRadius: 32,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    height: 58,
    marginTop: 'auto',

  },
});