export {
  slicesPerson,
  setTotalResultsPerson,
  setTotalPagesPerson,
  setPagePerson,
  setPerson,
} from './slices/slicesPerson';

export {
  slicesMovies,
  setPageMovies,
  setTotalPagesMovies,
  setTotalResultsMovies,
  setMovies,
} from './slices/slicesMovies';

export {
  setTv,
  slicesTv,
  setPageTv,
  setTotalPagesTv,
  setTotalResultsTv,
} from './slices/slicesTv';

export { searchMovies } from './asyncThunk/searchMovies';
export { searchPerson } from './asyncThunk/searchPerson';
export { searchTv } from './asyncThunk/searchTv';