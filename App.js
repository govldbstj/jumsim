import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, TextInput } from 'react-native';

export default App = () => {

  const [menu, setMenu] = useState('');
  const [data, setData] = useState([]);

  const handlemenu = menu => {
    setMenu(menu);
  }

  const searchMenu = () => {
    
    console.log("ok")
    const APIKEY = `4112003d49d61c770af01c3a817c8dc3`;
    console.log(data);

    let xcoord = 127.06;
    let ycoord = 37.51;
    let radius = 20000;

    let cafe = 'CE7';

    useEffect(() => {
      fetch(`https://dapi.kakao.com/v2/local/search/category.json?category\_group\_code=${cafe}&y=${ycoord}&x=${xcoord}&radius=${radius}`, {
        headers: {
          Authorization: `KakaoAK ${APIKEY}`
        }})
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);

  }

  return (
    searchMenu(),
    <View style={styles.view}>
      <Text style = {styles.text}>점심 메뉴 추천</Text>
        <TextInput
          style={styles.input}
          placeholder="메뉴 키워드를 입력하세요"
          autoCorrect={false}
          value={menu}
          onChangeText={handlemenu}
          onSubmitEditing={()=>setMenu}
          multiline={false}
          returnKeyType="search"
        />
        <Text>{menu}</Text>
      </View>
    );
  };

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
