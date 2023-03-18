import React, { useEffect } from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import icon from '../../../../../assets/icon/errorImage.svg';
import { PATHS } from '../../../../../enums';
import { useAppSelector, useAppDispatch } from '../../../../../hooks';
import { movieDetails, searchMovies, setPageMovies } from '../../../../../store';
import {
  selectMovies,
  selectMoviesPage,
  selectMoviesTotalPage,
  selectMoviesTotalResult,
} from '../../../../../store/features/search/selectors';
import { Paginator } from '../../../../components';

import styles from './styles.module.scss';

const Movies = (): React.ReactElement => {
  const dispatch = useAppDispatch();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const navigate = useNavigate();

  const movies = useAppSelector(selectMovies);
  const totalResult = useAppSelector(selectMoviesTotalResult);
  const totalPages = useAppSelector(selectMoviesTotalPage);
  const page = useAppSelector(selectMoviesPage);

  const onPageChange = (pageNumber: number): void => {
    dispatch(setPageMovies(pageNumber));
  };

  const getPageMovies = (movieId: number): void => {
    dispatch(movieDetails(movieId));
    navigate(`${PATHS.MOVIE}/${movieId}`);
  };

  useEffect(() => {
    dispatch(searchMovies({ query, page }));
  }, [page, query]);

  return (
    <ul>
      {movies.map(({ title, id, backdrop_path, release_date, overview }) => {
        return (
          <li onClick={() => getPageMovies(id)} key={id} className={styles.movies__item}>
            <img
              src={
                backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path} ` : icon
              }
              alt="backdrop_pat"
            />
            <div className={styles.movies__content}>
              <h3>{title}</h3>
              <span>{release_date}</span>
              <p>{overview}</p>
            </div>
          </li>
        );
      })}

      <Paginator page={page} onPageChange={onPageChange} totalPages={totalPages} />
    </ul>
  );
};

export { Movies };
