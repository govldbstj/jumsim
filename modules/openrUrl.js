import { Linking } from "react-native";

export default function openURL(url){
  console.log("url",url);
  Linking.openURL(url);
}