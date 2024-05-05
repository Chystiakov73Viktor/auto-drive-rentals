import { createSelector } from "@reduxjs/toolkit";
import { selectCarsValue } from "../catalog/selects";
import { selectFavorites } from "../favorites/selects";

const filterCards = (cards, brandFilter, priceFilter, mileageFilter) => {
  let filteredCard = new Set();

  if (brandFilter) {
    cards
      .filter((card) =>
        card.make.toLowerCase().includes(brandFilter.toLowerCase())
      )
      .forEach((card) => filteredCard.add(JSON.stringify(card)));
  }

  if (priceFilter) {
    cards
      .filter(
        (card) =>
          parseFloat(card.rentalPrice.replace(/\D/g, "")) ===
          parseFloat(priceFilter)
      )
      .forEach((card) => filteredCard.add(JSON.stringify(card)));
  }

  if (mileageFilter) {
    const [from, to] = mileageFilter.split("-").map(Number);
    cards
      .filter((card) => card.mileage >= from && card.mileage <= to)
      .forEach((card) => filteredCard.add(JSON.stringify(card)));
  }

  if (filteredCard.size === 0) {
    filteredCard = new Set(cards.map((card) => JSON.stringify(card)));
  }

  return Array.from(filteredCard).map((card) => JSON.parse(card));
};

export const selectFilteredBrand = (state) => state.filter.brandFilter;
export const selectFilteredPrice = (state) => state.filter.priceFilter;
export const selectFilteredMileage = (state) => state.filter.mileageFilter;

export const selectFilteredCard = createSelector(
  [
    selectCarsValue,
    selectFilteredBrand,
    selectFilteredPrice,
    selectFilteredMileage,
  ],
  (cars, brandFilter, priceFilter, mileageFilter) =>
    filterCards(cars, brandFilter, priceFilter, mileageFilter)
);

export const selectFilteredFavorites = createSelector(
  [
    selectFavorites,
    selectFilteredBrand,
    selectFilteredPrice,
    selectFilteredMileage,
  ],
  (favorites, brandFilter, priceFilter, mileageFilter) =>
    filterCards(favorites, brandFilter, priceFilter, mileageFilter)
);

// import { createSelector } from "@reduxjs/toolkit";
// import { selectCarsValue } from "../catalog/selects";
// import { selectFavorites } from "../favorites/selects";

// export const selectFilteredBrand = (state) => state.filter.brandFilter;
// export const selectFilteredPrice = (state) => state.filter.priceFilter;
// export const selectFilteredMileage = (state) => state.filter.mileageFilter;

// export const selectFilteredCard = createSelector(
//   [
//     selectCarsValue,
//     selectFilteredBrand,
//     selectFilteredPrice,
//     selectFilteredMileage,
//   ],
//   (cars, brandFilter, priceFilter, mileageFilter) => {
//     let filteredCard = new Set();

//     if (brandFilter) {
//       cars
//         .filter((card) =>
//           card.make.toLowerCase().includes(brandFilter.toLowerCase())
//         )
//         .forEach((card) => filteredCard.add(JSON.stringify(card)));
//     }

//     if (priceFilter) {
//       cars
//         .filter(
//           (card) =>
//             parseFloat(card.rentalPrice.replace(/\D/g, "")) ===
//             parseFloat(priceFilter)
//         )
//         .forEach((card) => filteredCard.add(JSON.stringify(card)));
//     }

//     if (mileageFilter) {
//       const [from, to] = mileageFilter.split("-").map(Number);
//       cars
//         .filter((card) => card.mileage >= from && card.mileage <= to)
//         .forEach((card) => filteredCard.add(JSON.stringify(card)));
//     }

//     if (filteredCard.size === 0) {
//       filteredCard = new Set(cars.map((card) => JSON.stringify(card)));
//     }

//     return Array.from(filteredCard).map((card) => JSON.parse(card));
//   }
// );

// export const selectFilteredFavorites = createSelector(
//   [
//     selectFavorites,
//     selectFilteredBrand,
//     selectFilteredPrice,
//     selectFilteredMileage,
//   ],
//   (favorites, brandFilter, priceFilter, mileageFilter) => {
//     console.log('brandFilter: ', brandFilter);
//     console.log('favorites: ', favorites);
//     let filteredCard = new Set();

//     if (brandFilter) {
//       favorites
//         .filter((card) =>
//           card.make.toLowerCase().includes(brandFilter.toLowerCase())
//         )
//         .forEach((card) => filteredCard.add(JSON.stringify(card)));
//     }

//     if (priceFilter) {
//       favorites
//         .filter(
//           (card) =>
//             parseFloat(card.rentalPrice.replace(/\D/g, "")) ===
//             parseFloat(priceFilter)
//         )
//         .forEach((card) => filteredCard.add(JSON.stringify(card)));
//     }

//     if (mileageFilter) {
//       const [from, to] = mileageFilter.split("-").map(Number);
//       favorites
//         .filter((card) => card.mileage >= from && card.mileage <= to)
//         .forEach((card) => filteredCard.add(JSON.stringify(card)));
//     }

//     if (filteredCard.size === 0) {
//       filteredCard = new Set(favorites.map((card) => JSON.stringify(card)));
//     }

//     return Array.from(filteredCard).map((card) => JSON.parse(card));
//   }
// );
