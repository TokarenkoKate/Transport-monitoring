import { useEffect } from 'react';
import { getCurrentDeviceLanguage } from 'utils/intl-utils';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { getCurrentLocale } from 'store/locales/selectors';
import { setCurrentLocale } from 'store/locales/locales';
import { IntlProvider } from 'react-intl';
import { LOCALES } from 'constants/intl-const';
import { messages } from '../../../intl/messages';
import TabNavigator from '../../../navigation/tab-navigator';

function AppEntry() {
  const dispatch = useAppDispatch();
  const currentLocale = useAppSelector(getCurrentLocale);

  useEffect(() => {
    const currentLanguage = getCurrentDeviceLanguage();
    dispatch(setCurrentLocale(currentLanguage));
  }, []);

  return (
    <IntlProvider
      messages={messages[currentLocale]}
      locale={currentLocale}
      defaultLocale={LOCALES.RUSSIAN}
    >
      <TabNavigator />
    </IntlProvider>
  );
}

export default AppEntry;
