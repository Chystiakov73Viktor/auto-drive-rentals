import carImg from "../../images/autoCar.jpg";
import { WrapperDiv } from "./HomePage.styled";

export const HomePage = () => {
  return (
    <WrapperDiv>
      <div className="containerFirstColor">
        <div className="containerSecondColor"></div>
      </div>
      <div className="containerImgColor">
        <div className="containerImg">
          <img className="carImg" src={carImg} alt="car" />
        </div>
      </div>
      <h1 className="titleFirst">Looking for a vehicle? You’re at the right place.</h1>
    </WrapperDiv>
  );
};
