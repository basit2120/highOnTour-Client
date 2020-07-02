import {
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_LOADING,
  REGISTER_LOADING,
  LOGOUT,
} from "../constants";

const initialState = {
  user: [],
  loading: false,
  error: "",
  token: "",
  isAuthenticated: false,
};

// const authReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case LOGIN_SUCCESS:
//       return { ...state, user: action.payload.user };

//     default:
//       return state;
//   }
// };
// export default authReducer;
export default function authReducer(state = initialState, action) {
  console.log(action, "reducer");
  switch (action.type) {
    case LOGIN_LOADING: {
      return { ...state, loading: true, error: "" };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    }
    case LOGIN_FAILURE: {
      return { ...state, data: {}, loading: false, error: action.payload };
    }
    case LOGOUT: {
      return {
        ...state,
        data: {},
        loading: false,
        error: "",
        isAuthenticated: false,
      };
    }
    case REGISTER_LOADING: {
      return { ...state, loading: true, error: "" };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    }
    case REGISTER_FAILURE: {
      return { ...state, data: {}, loading: false, error: action.payload };
    }

    default: {
      return state;
    }
  }
}
