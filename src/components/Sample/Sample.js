import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Sample.module.scss';

class Sample extends Component {

  renderAccessibility() {
    const { accessibility } = this.props;

    if (accessibility) {
      let score = 'FAIL';
      score = accessibility.aaLarge  ? 'AA Large' : score;
      score = accessibility.aa  ? 'AA' : score;
      score = accessibility.aaaLarge  ? 'AAA Large' : score;
      score = accessibility.aaa  ? 'AAA' : score;
      return <span>{ score }</span>;
    }

    return null;
  }

  render() {
    const {
      foreground,
      background,
      contrast
    } = this.props;

    const colors = {
      backgroundColor: background,
      color: foreground
    };

    const contrastMarkup = contrast
      ? <span>{ contrast.toFixed(2) }</span>
      : null;

    return (
      <div className={styles.wrapper} style={colors}>
        <div className={styles.header}>
          <span className={styles.typeTitle}>Aa</span>
          <div className={styles.score}>
            { this.renderAccessibility() }
            { contrastMarkup }
          </div>
        </div>
        <p className={styles.typeText}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    );
  }
}

const mapStateToProps = ({ color }) => ({
  foreground: color.foreground,
  background: color.background,
  contrast: color.contrast,
  accessibility: color.accessibility
});

export default connect(mapStateToProps, {})(Sample);
