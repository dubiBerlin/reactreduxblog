import { FETCH_POSTS, FETCH_POST } from "../actions";
import _ from "lodash";
// state soll ein Objekt sein
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      /*  mapKeys gibt ein Associatives Array zurück. Es nimmt ein Array von
           Objekten auf. Man übergibt den Paramater den man als key haben möchte (hier: id) */
      return _.mapKeys(action.payload.data, "id");

    case FETCH_POST:
      // ein einzelner Post ist ein Objekt also gibt er ein einzelnes Objekt zurück.
      // {... state} => nimm alle states die wir bis jetzt haben und füge sie in das neue Objekt ein
      const post = action.payload.data;
      const newState = { ...state };
      newState[post.id] = post;
      return newState;
    // es6 => return {...state, [action.payload.data.id]: action.payload.data}
    default:
      return state;
  }
}
