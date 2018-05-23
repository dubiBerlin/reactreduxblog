import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const CREATE_POSTS = "create_posts";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=irgendwas111";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

/* callback ist die Funktion die aufgerufen wird in der then Methode.
    Der Inhalt der callback() wird in der Komponente definiert, die die Methode
    createPost() aufruft. */
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values).then(() => {
    callback();
  });

  return {
    type: CREATE_POSTS,
    payload: request
  };
}
