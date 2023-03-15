import { createSlice } from "@reduxjs/toolkit";

const adviceSlice = createSlice({
  name: "advice",
  initialState: {
    advice: {
      content: "waiting for advice",
      id: "21",
    },
  },
  reducers: {
    setAdvice: (state, { payload }) => {
      state.advice.id = payload.slip.id;
      state.advice.content = payload.slip.advice;
    },
    fetchAdvice: () => {},
  },
});

export const { fetchAdvice, setAdvice } = adviceSlice.actions;

export const selectAdviceState = (state) => state.advice;
export const selectAdvice = (state) => selectAdviceState(state).advice;
export const selectAdviceContent = (state) => selectAdvice(state).content;
export const selectAdviceId = (state) => selectAdvice(state).id;

export default adviceSlice.reducer;
