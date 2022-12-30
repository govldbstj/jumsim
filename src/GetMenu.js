import React,{useEffect,useState} from "react";
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';
import SearchMenu from "./SearchMenu";
const GetMenu=()=>{
  const [menu, setMenu] = useState('');
  const handlemenu = item => {
    setMenu(item);
  }
  return (
    <View style={styles.view}>
      <Text style = {styles.text}>점심 메뉴 추천</Text>
        <TextInput
          style={styles.input}
          placeholder="메뉴 키워드를 입력하세요"
          autoCorrect={false}
          value={menu}
          onChangeText={handlemenu}
          onSubmitEditing={()=><SearchMenu menu={menu}/>}
          multiline={false}
          returnKeyType="search"
        />  
        <Text>{menu}</Text>
        
      </View>
    );
}
const styles = StyleSheet.create({
  input: {
    height: 42,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
    padding: 10,
  },
  view: {
      alignItems: 'center'
  },
  text: {
      fontSize: 30,
      marginTop: 60,
      margintBottom: 30
  }
});
export default GetMenu;