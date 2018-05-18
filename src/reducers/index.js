import { combineReducers } from "redux";
import PostsReducer from "./reducer_posts";

const rootReducer = combineReducers({
  PostsReducer: PostsReducer
});

export default rootReducer;
