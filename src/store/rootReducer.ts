import { combineReducers } from '@reduxjs/toolkit';

import {
  slicesCollection,
  slicesMovies,
  slicesPerson,
  slicesTv,
  slicesCompanies,
  slicesKeywords,
} from './features';
import { slicesAuthentication } from './features/authentication/slices';
import { global } from './features/global/slices';
import { language } from './features/language/slices';
import { movie } from './features/movie/slices';
import { trending } from './features/trending/slices';

export const rootReducer = combineReducers({
  trending,
  slicesAuthentication,
  language,
  global,
  movie,
  slicesMovies,
  slicesPerson,
  slicesTv,
  slicesCollection,
  slicesCompanies,
  slicesKeywords,
});
