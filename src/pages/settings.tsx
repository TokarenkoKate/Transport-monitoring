import { View, StyleSheet } from 'react-native';
import { LOCALES } from 'constants/intl-const';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getCurrentLocale } from 'store/locales/selectors';
import { TabNavigatorScreenProps } from 'types/navigation';
import { setCurrentLocale } from 'store/locales/locales';
import Text from 'components/ui-components/text/text';
import Button from 'components/ui-components/buttons/button/button';
import { useIntl } from 'react-intl';

function SettingsScreen({ navigation, route }: TabNavigatorScreenProps<'SettingsScreen'>) {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { formatMessage: f } = useIntl();
  const currentLocale = useAppSelector(getCurrentLocale);
  const dispatch = useAppDispatch();

  const handleSelectLocale = (locale: LOCALES) => {
    dispatch(setCurrentLocale(locale));
  };

  return (
    <View style={styles.container}>
      <Text size="2extraLarge" fontWeight="bold" textStyle={styles.title}>
        {f({ id: 'settings_select_language' })}
      </Text>
      <View style={styles.buttonsWrapper}>
        <Button
          title={'English'}
          fontColor={LOCALES.ENGLISH === currentLocale ? 'white' : 'black'}
          onPress={() => handleSelectLocale(LOCALES.ENGLISH)}
          style={[styles.button, LOCALES.ENGLISH === currentLocale && styles.activeButton]}
        />
        <Button
          title={'Русский'}
          fontColor={LOCALES.RUSSIAN === currentLocale ? 'white' : 'black'}
          onPress={() => handleSelectLocale(LOCALES.RUSSIAN)}
          style={[styles.button, LOCALES.RUSSIAN === currentLocale && styles.activeButton]}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  title: {
    marginBottom: 24,
    minHeight: 66,
    width: '80%',
  },
  buttonsWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    backgroundColor: '#F4F4F4',
  },
  activeButton: {
    backgroundColor: '#333232',
  },
});
