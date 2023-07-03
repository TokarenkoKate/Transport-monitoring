import { Alert, Linking, Platform } from 'react-native';

export const makePhoneCall = (telNumber: string, alertMessage: string) => {
  const parsedNumber = telNumber.replace(/[^\d]+/g, '');

  let currentNumber = '';
  if (Platform.OS === 'android') {
    currentNumber = `tel:${parsedNumber}`;
  } else {
    currentNumber = `telprompt:${parsedNumber}`;
  }
  Linking.openURL(currentNumber).catch(() => {
    Alert.alert(alertMessage);
  });
};

export const sendMessageToWhatsApp = (telNumber: string, message: string, alertMessage: string) => {
  const telNumberWithoutCode = telNumber.replace(/[+972 ]/, '');
  const parsedNumber = telNumberWithoutCode.replace(/[^\d]+/g, '');

  const url = `whatsapp://send?text=${message}&phone=${parsedNumber}`;
  Linking.openURL(url)
    .then(() => {
      console.log('WhatsApp Opened');
    })
    .catch(() => {
      Alert.alert(alertMessage);
    });
};
//'Make sure Whatsapp installed on your device'
