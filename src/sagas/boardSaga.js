import { put } from "redux-saga/effects";
import Axios from "axios";
import { boardActions } from "../slice/boardSlice";
import { commentActions } from "../slice/commentSlice";

export function* getBoardAsync() {
  try {
    const responseForBoard = yield Axios.get(`http://localhost:4000/board/`);
    const responseForComment = yield Axios.get(
      `http://localhost:4000/comment/`
    );

    const boardData = responseForBoard.data;

    yield put(boardActions.getBoardSuccessAsync(boardData));
    yield put(commentActions.getCommentsAsync(responseForComment.data));
  } catch (e) {
    yield put(boardActions.getBoardFailedAsync(e.message));
  }
}
