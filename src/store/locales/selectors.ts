import { State } from 'types/state';
import { LOCALES } from 'constants/intl-const';
import { NameSpace } from 'constants/redux-const';

export const getAllLocales = (state: State): typeof LOCALES => state[NameSpace.Locales].locales;
export const getCurrentLocale = (state: State): LOCALES => state[NameSpace.Locales].currentLocale;
