import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import authReducer from "./Pages/Auth/auth.reducer";
import menuReducer from "./template/menu/menu.reducer";

const rootReducer = combineReducers({
  form: formReducer,
  toastr: toastrReducer,
  auth: authReducer,
  menu: menuReducer,
});

export default rootReducer;
