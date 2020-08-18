import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import authReducer from './Pages/Auth/auth.reducer'

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  auth: authReducer
});

export default rootReducer;
