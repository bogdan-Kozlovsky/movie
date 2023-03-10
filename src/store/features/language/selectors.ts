import { AppRootStateType } from '../../types';

import { RootLanguage } from './types';

export const selectLanguageValue = (state: AppRootStateType): string =>
  state.language.selectedLanguageValue;

export const selectLanguages = (state: AppRootStateType): RootLanguage[] | [] =>
  state.language.selectedLanguages;
