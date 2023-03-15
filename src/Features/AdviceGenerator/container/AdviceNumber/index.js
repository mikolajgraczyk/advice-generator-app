import { StyledAdviceNumber } from "./styled";
import { useSelector } from "react-redux";
import { selectAdviceId } from "../../adviceSlice";

const AdviceNumber = () => {
  const adviceId = useSelector(selectAdviceId);

  return <StyledAdviceNumber>ADVICE #{adviceId}</StyledAdviceNumber>;
};

export default AdviceNumber;
