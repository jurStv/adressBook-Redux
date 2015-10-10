import React, {Component, PropTypes} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import Header from "../components/Header";
import AdressForm from "../components/AdressForm";
import AdressTable from "../components/AdressTable";
import Filter from "../components/Filter";
import findAnyMatching from "../helpers/findAnyMatching";
import actionTypes from "../actions/actionTypes"

import styles from "./App.styl";

@CSSModules(styles)
class App extends Component {
  render() {
    let { visibleAdresses,
      editingAdress,
      filterWord,
      wrongAdress,
      dispatch } = this.props;
    let Actions = bindActionCreators( actionTypes, dispatch );
    return (
      <div styleName='container'>
        <a href="https://github.com/jurStv/adressBook-Redux" styleName="ghLogo">
          <i styleName="githubIcon"></i>
        </a>
        <section styleName='leftSection'>
          <Filter FilterAction={Actions.Filter} filterWord={filterWord}/>
          <AdressForm
            provided={editingAdress}
            error={wrongAdress}
            modify={Actions.Modify}
            add={Actions.Add}
            makeError={Actions.Errorify}/>
        </section>
        <section styleName='rightSection'>
          <Header />
          <AdressTable
            items={visibleAdresses}
            EditItems ={Actions.StartEditing}
            DeleteItems ={Actions.Remove} />
        </section>
      </div>
    )
  }
}

App.propTypes = {
  visibleAdresses: PropTypes.array.isRequired,
  editingAdress: PropTypes.array.isRequired,
  wrongAdress: PropTypes.array.isRequired,
  filterWord: PropTypes.string.isRequired
};

const select = state => {
  let wrongAdress = state.error;
  let filterWord = state.filter;
  let visibleAdresses = state.list.filter( findAnyMatching(filterWord) );
  let editingAdress = state.editing;
  return {
    visibleAdresses,
    editingAdress,
    filterWord,
    wrongAdress
  }
}

export default connect(select)(App);
