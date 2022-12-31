import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import openURL from '../modules/openrUrl';
import ShareMenu from '../modules/ShareMenu';

const MenuList = ({ item }) => {

  return (
    <View style={styles.top}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => openURL(item.link)}>
          <View style={styles.view}>
            <Text style={styles.in}>{item.name}</Text>
            <Text style={styles.detail}>{item.address}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={share.right}>
        <ShareMenu item={item} />
      </View>
    </View>

  );
};

MenuList.defaultProps = {
  onPressOut: () => { },
};

MenuList.propTypes = {
  item: PropTypes.object.isRequired,
  onPressOut: PropTypes.func,
};
const styles = StyleSheet.create({
  view: {
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: '#FFFFFF',
    padding: 10,
    margin: 3,
    width: Dimensions.get('window').width - 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  in: {
    fontWeight: 'semibold',
    fontSize: 17,
    marginBottom: 5
  },
  detail: {
    fontSize: 13,
    marginBottom: 7
  },
  left: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  top: {
    flexDirection: 'row',
  },
});

const share = StyleSheet.create({
  right: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
})
export default MenuList;