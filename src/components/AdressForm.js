import React, {Component, PropTypes} from "react";
import CSSModules from "react-css-modules";
import {isFormWrongBool, makeErrorObject} from "../helpers/validation";
import cuid from "cuid";
import R from "ramda";

import styles from "./AdressForm.styl";

@CSSModules(styles)
class AdressForm extends Component {
  handleSubmit(e){
    let rawData = grabTheData(e);
    let toEditId = this.props.provided.length > 0 ? this.props.provided[0] : null;
    if (isFormWrongBool(rawData)) {
      this.props.makeError([rawData, makeErrorObject(rawData)])
    } else if (toEditId) {
     this.props.modify(toEditId, rawData)
   } else {
     this.props.add( giveId(rawData) )
   }
  }

  render(){
    let {styleNames, values} = constructData( this.props.provided, this.props.error )
    return (
      <form onSubmit={ e => (e.preventDefault(), this.handleSubmit(e)) } id="adressForm">
        <div styleName={styleNames.firstname}>
          <label styleName="formLable">First name:</label>
          <input styleName="formInput"
            id="firstname"
            type="text"
            form="adressForm"
            ref={ el => (el ? el.getDOMNode().value = values.firstname : void 0) }/>
        </div>
        <div styleName={styleNames.lastname}>
          <label styleName="formLable">Second name:</label>
          <input styleName="formInput"
            id="lastname"
            type="text"
            form="adressForm"
            ref={ el => (el ? el.getDOMNode().value = values.lastname:void 0)}/>
        </div>
        <div styleName={styleNames.email}>
          <label styleName="formLable">Email:</label>
          <input styleName="formInput"
            type="text"
            id="email"
            form="adressForm"
            ref={ el => (el ? el.getDOMNode().value = values.email: void 0)}/>
        </div>
        <button styleName="submitButton" type="submit">Submit</button>
      </form>
    )
  }
}

AdressForm.propTypes = {
  provided: PropTypes.array.isRequired,
  modify: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
  error: PropTypes.array.isRequired,
  makeError: PropTypes.func.isRequired
}

function grabTheData(e){
  let {email, firstname, lastname} = e.target.elements;
  let data = { email: email.value,
      firstname: firstname.value,
      lastname: lastname.value };
  return data;
}

const giveId = (el) => (el._id = cuid(), el)


function constructData(edit, error){
  let defaultStyleNames = {
    firstname: "formField",
    lastname: "formField",
    email: "formField"
  };
  let defaultValuesNames = {
    firstname: "",
    lastname: "",
    email: ""
  };
  let styleNames = error.length > 0 ? R.merge(defaultStyleNames, error[1]) : defaultStyleNames;
  let values = error.length > 0 ? error[0] : edit.length > 0 ? edit[1] : defaultValuesNames;
  return {  styleNames, values };
}

export default AdressForm
