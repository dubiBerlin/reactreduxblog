import { FETCH_POSTS } from "../actions";
import _ from "lodash";
// state soll ein Objekt sein
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      /*  mapKeys gibt ein Associatives Array zurück. Es nimmt ein Array von
           Objekten auf. Man übergibt den Paramater den man als key haben möchte (hier: id) */
      return _.mapKeys(action.payload.data, "id");

    default:
      return state;
  }
}
