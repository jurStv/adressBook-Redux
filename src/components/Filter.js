import React, {Component, PropTypes} from "react";
import CSSModules from 'react-css-modules';

import styles from "./Filter.styl";

//@CSSModules(styles)
class Filter extends Component {
  handleInput(str){
    var curWord = str.length > 2 ? str : "" ;
    var prevWord = this.props.filterWord;
    prevWord !== curWord ? this.props.FilterAction(curWord) : void(0) ;
  }
  render(){
    return (
      <div styleName="container" >
        <div styleName="filterField">
          <label styleName="filterLable">Filter:</label>
          <input styleName="filterInput" type="text" onInput={ e => this.handleInput(e.target.value) }/>
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  filterWord: PropTypes.string.isRequired,
  FilterAction: PropTypes.func.isRequired
}

export default CSSModules(Filter, styles)
