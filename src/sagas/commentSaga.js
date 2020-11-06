import Axios from "axios";
import history from "../utils/history";
import { commentActions } from "../slice/commentSlice";
import { put } from "redux-saga/effects";

export function* registerCommentAsync(action) {
  const data = action.payload;

  const response = yield Axios.post(`http://localhost:4000/comment/`, data);

  // history.go(0);
  yield put(commentActions.getCommentsAsync(response.data)); // 리팩토링
}

export function* getCommentsAsync(action) {
  const articleId = action.payload;

  const response = yield Axios.get(
    `http://localhost:4000/comment?articleId=${articleId}`
  );

  yield put(commentActions.getCommentsAsync(response.data));
}

export function* deleteCommentAsync(action) {
  const commentId = action.payload;

  const response = yield Axios.delete(
    `http://localhost:4000/comment/${commentId}`
  );

  history.go(0);
}
