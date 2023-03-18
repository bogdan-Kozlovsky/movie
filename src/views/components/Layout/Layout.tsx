import React, { ReactElement } from 'react';

import { Header } from '../Header';

import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props): ReactElement => (
  <div className={styles.wrapper}>
    <Header />
    <main className={styles.main}>{children}</main>
  </div>
);

export { Layout };
