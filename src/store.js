import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import adviceReducer from "./Features/AdviceGenerator/adviceSlice";
import { adviceSaga } from "./Features/AdviceGenerator/adviceSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        advice: adviceReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(adviceSaga)

export default store;