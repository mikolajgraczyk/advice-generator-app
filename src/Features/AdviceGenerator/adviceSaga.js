import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getAdvice } from "./getAdvice";
import { fetchAdvice, setAdvice } from "./adviceSlice";

function* fetchAdviceHandler() {
  try {
    const advice = yield call(getAdvice);
    yield put(setAdvice(advice));
  } catch (error) {
    yield call(error, error);
  }
};

export function* adviceSaga() {
  yield takeEvery(fetchAdvice.type, fetchAdviceHandler);
};
