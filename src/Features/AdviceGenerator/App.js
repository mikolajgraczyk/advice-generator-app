import { useEffect } from "react";
import Container from "./container";
import { fetchAdvice } from "./adviceSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvice());
  }, []);

  return <Container />;
}

export default App;
