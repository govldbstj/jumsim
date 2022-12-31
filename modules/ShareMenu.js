import React from 'react';
import { Share, View, Button } from 'react-native';

const ShareMenu = ({item}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:`${item.name} ${item.address} ${item.link}`,
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
    <View>
    <Button onPress={onShare} title="Share" />
    </View>
  );
};

export default ShareMenu;