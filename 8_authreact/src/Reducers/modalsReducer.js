const initialState = {
  showAnmelden: false,
  showEinlogen: false,
};

export default function modalsReducer(state = initialState, action) {
  switch (action.type) {
    case "TOGGLEEIN":
      if (state.showEinlogen) {
        return { ...state, showEinlogen: false, showAnmelden: false }; //...state = showAnmelden: false,  showEinlogen: false,
      } else {
        return { ...state, showEinlogen: true, showAnmelden: false };
      }

    case "TOGGLEAN":
      if (state.showAnmelden) {
        return { ...state, showEinlogen: false, showAnmelden: false }; //...state = showAnmelden: false,  showEinlogen: false,
      } else {
        return { ...state, showEinlogen: false, showAnmelden: true };
      }

    case "CLOSEMODAL":
      return { ...state, showEinlogen: false, showAnmelden: false }; //...state = showAnmelden: false,  showEinlogen: false,
    default:
      return state;
  }
}
