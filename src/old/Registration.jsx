import React from 'react'
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { Button, Input, Text, Icon, Select, SelectItem } from "@ui-kitten/components";

export default function Registration() {
  return (
    <View style={styles.container} >
      <Select size="medium">
        <SelectItem title={evaProps => <Text {...evaProps}>Участник</Text>} />
        <SelectItem title={evaProps => <Text {...evaProps}>Слушатель</Text>} />
      </Select>

      <Input placeholder='Email'/>
      <Input placeholder='Пароль'/>
      <Input placeholder='Подтверждение пароля'/>

      <Input placeholder='Фамилия'/>
      <Input placeholder='Имя'/>
      <Input placeholder='Отчетсво'/>

      <Input placeholder='Тема доклада'/>
      <Button>
        ЗАГРУЗИТЬ ПРЕЗЕНТАЦИЮ
      </Button>

      <Button>
        Отправить
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05142b',
    flex: 1,
    paddingTop: 64
  },
});
