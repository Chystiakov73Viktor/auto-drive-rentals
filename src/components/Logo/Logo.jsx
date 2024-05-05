import { WrapperDiv } from "./Logo.styled";
import { FaCar } from "react-icons/fa";

export const Logo = () => {
  return (
    <WrapperDiv>
      <FaCar size="24" />
      <h2 className="titleLogo">Car rentals</h2>
    </WrapperDiv>
  );
};
