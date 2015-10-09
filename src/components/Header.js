import React, {Component, PropTypes} from "react";
import CSSModules from "react-css-modules";

import styles from "./Header.styl";

//@CSSModules(styles)
class Header extends Component {
  render(){
    return (
      <div styleName="header">
        <i styleName="usersIcon"></i>
        <h1 styleName="text">Adress book</h1>
      </div>
    )
  }
}

export default CSSModules(Header, styles)
