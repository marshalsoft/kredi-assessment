const initialState = {
  appName:"Kredi",
  firstname:"Micheal"
}
const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "update":
    return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}
export default AppReducer;