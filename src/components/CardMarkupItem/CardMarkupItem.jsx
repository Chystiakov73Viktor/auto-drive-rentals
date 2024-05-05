// import { Notify } from 'notiflix';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";
import { LiWrapper } from "./CardMarkupItem.styled";
import { useEffect, useState } from "react";
import { Modal } from "components/Modal/Modal";
import { CardModalList } from 'components/CardModalList/CardModalList';
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selects";
import { addFavorite, removeFavorite } from "../../redux/favorites/operations";
import defaultImg from "../../images/autoCar.jpg";

export const CardMarkupItem = ({ cardData }) => {
  const {
    id,
    img,
    model,
    make,
    year,
    rentalPrice,
    address,
    rentalCompany,
    accessories,
    type,
    mileage,
    
  } = cardData;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [iconColorEmpty, setIconColorEmpty] = useState("#fff");
  const [iconColorFilled, setIconColorFilled] = useState("red");

  const isValidImgUrl = img && img.startsWith("http");
  const imgUrl = isValidImgUrl ? img : defaultImg;

  const parts = address.split(",");

  const city = parts[1].trim();
  const country = parts[2].trim();
  const premiumItem = accessories.find((item) => item.includes("Premium"));
  const premiumWord = premiumItem ? "Premium" : null;

  const thirdRow = accessories[1];
  const words = thirdRow.split(" ");
  const lastTwoWords = words.slice(-2);
  const firstWord =
    lastTwoWords[0].charAt(0).toUpperCase() + lastTwoWords[0].slice(1);
  const result = `${firstWord} ${lastTwoWords[1]}`;

  const shorterString = make.length < model.length ? make : model;

  const resultType = make === "Lamborghini" ? type : result;

  useEffect(() => {
    setIsFavorite(favorites.some((favorite) => favorite.id === id));
  }, [favorites, id]);

  useEffect(() => {
    if (isFavorite) {
      setIconColorFilled("red");
    } else {
      setIconColorEmpty("#fff");
      setIconColorFilled("red");
    }
  }, [isFavorite]);

  const handleButtonIcon = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
      setIsFavorite(false);
    } else {
      dispatch(addFavorite(cardData));
      setIsFavorite(true);
    }
  };

  const openButtonModal = () => {
    setIsModalOpen(true);
  };

  const closeButtonModal = () => {
    setIsModalOpen(false);
  };

  return (
    <LiWrapper key={id}>
      <div className="containerImgIcon">
        <button type="button" className="buttonIcon" onClick={handleButtonIcon}>
          {isFavorite ? (
            <IoMdHeart color={iconColorFilled} size="18" />
          ) : (
            <IoMdHeartEmpty color={iconColorEmpty} size="18" />
          )}
        </button>
        <div className="containerImg">
          <img className="img" src={imgUrl} alt={make} />
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeButtonModal}>
          <CardModalList cardData={cardData} onClose={closeButtonModal} />
        </Modal>
      )}
      <ul className="listInfo">
        <li className="info">{make}&nbsp;</li>
        <li className="info model">
          {model}
          <span className="comma">,</span>&nbsp;
        </li>
        <li className="info">{year}</li>
        <li className="info">{rentalPrice}</li>
      </ul>
      <ul className="listContainer address">
        <li className="itemAddressType">
          {city} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          {country} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          {rentalCompany} {premiumWord ? "| " : null}&nbsp;
        </li>
        {premiumWord && <li className="itemAddressType">{premiumWord}</li>}
      </ul>
      <ul className="listContainer type">
        <li className="itemAddressType">
          {type} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          {shorterString} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">
          {mileage} {"|"}&nbsp;
        </li>
        <li className="itemAddressType">{resultType}</li>
      </ul>
      <button
        type="button"
        className="buttonLearn"
        onClick={openButtonModal}
      >
        Learn more
      </button>
    </LiWrapper>
  );
};
