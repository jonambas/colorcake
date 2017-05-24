import React, { Component } from 'react';
import styles from './Layout.module.scss';

class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className={styles.wrapper}>
        <div className={styles.card}>
          { children }
        </div>
      </div>
    );
  }
}

export default Layout;
