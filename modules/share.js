import {Share} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function share({item}){
console.log("item in share",item)
  Share.share({
    message:`${item.name} \n\n ${item.link}`,
  });


}