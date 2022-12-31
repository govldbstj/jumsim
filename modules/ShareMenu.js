import React from 'react';
import { Share, View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';

const ShareMenu = ({item}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:`오늘 메뉴 ${item.name} 어때요? 주소 : ${item.address}, ${item.link}`,
        title:`${item.name} ${item.address} ${item.link}`
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style = {styles.icons}>
    <TouchableOpacity onPress={onShare}>
        <Image style = {{ width: 25, height: 25}}
        source = {require('../icons/share.png')}/>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  icons:{
    alignItems : 'center',
    justifyContent: 'center',
    marginLeft: 10,
  }
})

export default ShareMenu;