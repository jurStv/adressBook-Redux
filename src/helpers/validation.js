import R from "ramda";
import { Success, Failure } from "data.validation";

function isNameValid(label = "", name){
  return /^[\d\w]+$/.test(name) ?
           Success(name)
  :
           Failure([ [label, "errorField"] ])
}

function isEmailValid(email){
  return /^\S+@\S+\.\S+/.test(email) ?
           Success(email)
  :
           Failure([ ["email", "errorField"] ])
}

function isFormValid( {firstname, lastname, email} ){
  return Success( R.curry( (fname,lname,email) => [fname,lname,email] ) )
            .ap(isNameValid( "firstname", firstname ))
            .ap(isNameValid( "lastname", lastname ))
            .ap(isEmailValid( email ))
}

function isFormValidBool( form ){
  return isFormValid( form ).isSuccess;
}

function isFormWrongBool( form ){
  return isFormValid( form ).isFailure;
}

function makeErrorObject( form ){
  var formChecked = isFormValid( form );
  return formChecked.isFailure ? R.fromPairs( formChecked.merge() ) : {};
}

export default {
  isFormValidBool,
  isFormWrongBool,
  makeErrorObject
}
