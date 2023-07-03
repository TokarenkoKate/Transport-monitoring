import { Platform, NativeModules } from 'react-native';
import { LOCALES } from 'constants/intl-const';

export const getCurrentDeviceLanguage = () => {
  const deviceLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0] //iOS 13
      : NativeModules.I18nManager.localeIdentifier;

  switch (deviceLanguage.split('_')[0]) {
  case 'ru':
    return LOCALES.RUSSIAN;
  default:
    return LOCALES.ENGLISH;
  }
};
