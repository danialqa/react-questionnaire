import { ReactNode } from 'react';

import Header from '../header/header';
import styles from './layout.module.scss';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />

      <div className={styles.Contents}>{children}</div>
    </div>
  );
};

export default Layout;
