import React, { Component } from 'react';
import styles from './Control.module.scss';
import { connect } from 'react-redux';

import { setForeground, setBackground, reverse } from '../../actions/color';

const HEX = /#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})/;

class Layout extends Component {



  onBackgroundChange(event) {
    const value = event.target.value;
    if (HEX.test(value) && value.length === 7) {
      this.props.setBackground(value);
    }
  }

  onForegroundChange(event) {
    const value = event.target.value;
    if (HEX.test(value) && value.length === 7) {
      this.props.setForeground(value);
    }
  }

  onReverse() {
    this.props.reverse();
  }

  componentWillReceiveProps(nextProps) {
    this.background.value = nextProps.background;
    this.foreground.value = nextProps.foreground;
  }

  render() {
    const {
      foreground,
      background
    } = this.props;

    return (
      <div className={styles.wrapper}>

        <p>
          bg
          <input
            type='text'
            defaultValue={background}
            onChange={ (e) => this.onBackgroundChange(e) }
            ref={(input) => this.background = input}
          />
        </p>

        <p>
          fg
          <input
            type='text'
            defaultValue={foreground}
            onChange={ (e) => this.onForegroundChange(e) }
            ref={(input) => this.foreground = input}
          />
        </p>

        <button onClick={ () => this.onReverse() }>Reverse</button>
      </div>
    );
  }
}

const mapStateToProps = ({ color }) => ({
  foreground: color.foreground,
  background: color.background
});

export default connect(mapStateToProps, {
  setForeground, setBackground, reverse
})(Layout);
