import { IoCloseOutline } from "react-icons/io5";
import { LiWrapper } from "./CardModalMarkup.styled";

export const CardModalMarkup = ({ cardData, onClose }) => {
  const {
    id,
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    accessories,
    type,
    mileage,
    fuelConsumption,
    functionalities,
    engineSize,
    rentalConditions,
  } = cardData;

  const parts = address.split(",");

  const city = parts[1].trim();
  const country = parts[2].trim();

  const thirdRow = accessories[1];
  const words = thirdRow.split(" ");
  const lastTwoWords = words.slice(-2);
  const firstWord =
    lastTwoWords[0].charAt(0).toUpperCase() + lastTwoWords[0].slice(1);
  const result = `${firstWord} ${lastTwoWords[1]}`;

  const getSentence = functionalities[2];
  const splitWords = getSentence.split(" ");
  const lastSentence = splitWords.slice(-2);
  const mainWord =
    lastSentence[0].charAt(0).toUpperCase() + lastTwoWords[0].slice(1);
  const resultSentence = `${mainWord} ${lastSentence[1]}`;

  const regex = /\d+/;
  const match = rentalConditions.match(regex);
  const firstNumber = match ? parseInt(match[0]) : null;

  const formattedMileage = mileage.toLocaleString("en");

  return (
    <LiWrapper key={id}>
      <button type="button" className="buttonIcon" onClick={onClose}>
        <IoCloseOutline size="24" />
      </button>
      <div className="containerImg">
        <img className="img" src={img} alt={make} />
      </div>
      <ul className="listInfo">
        <li className="info">{make}&nbsp;</li>
        <li className="info model">
          {model}
          <span className="comma">,</span>&nbsp;
        </li>
        <li className="info">{year}</li>
      </ul>
      <ul className="listContainer address">
        <li className="itemAddressType">
          {city} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          {country} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          Id: {mileage} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          Year: {year} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">Type: {type}</li>
      </ul>
      <ul className="listContainer type">
        <li className="itemAddressType">
          Fuel Consumption: {fuelConsumption} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">Engine Size: {engineSize}</li>
      </ul>
      <p className="text">
        The Buick Enclave is a stylish and spacious SUV known for its
        comfortable ride and luxurious features.
      </p>
      <p className="textFirst">Accessories and functionalities:</p>
      <ul className="listContainer">
        <li className="itemAddressType">
          {accessories[0]} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          {accessories[1]} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">{result}</li>
      </ul>
      <ul className="listContainer functionally">
        <li className="itemAddressType">
          {accessories[2]} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          {functionalities[1]} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">{resultSentence}</li>
      </ul>
      <p className="textFirst">Rental Conditions: </p>
      <ul className="listButton">
        <li className="itemButton">
          Minimum age : <span className="firstNumber">{firstNumber}</span>
        </li>
        <li className="itemButton">Valid driver’s license</li>
        <li className="itemButton">Security deposite required </li>
        <li className="itemButton">
          Mileage: <span className="firstNumber">{formattedMileage}</span>
        </li>
        <li className="itemButton">
          Price: <span className="firstNumber">{rentalPrice}</span>
        </li>
      </ul>
      <button className="buttonRental" type="button">Rental car</button>
    </LiWrapper>
  );
};
