import { Section } from "components/Section/Section";
import { Loader } from "components/Loader/Loader";
import { useSelector } from "react-redux";
import { selectFavoritesIsLoading } from "../redux/favorites/selects";
import { CardMarkupList } from "../components/CardMarkupList/CardMarkupList";
import { FilterForm } from "../components/FilterForm/FilterForm";
import Pagination from "../components/Pagination/Pagination";
import { selectFilteredFavorites } from "../redux/filter/selects";

function Favorites() {
  const favorites = useSelector(selectFilteredFavorites);
  const isLoading = useSelector(selectFavoritesIsLoading);
  const itemsPerPage = 12;

  const renderCardList = (paginatedData) => {
    return <CardMarkupList dataCard={paginatedData} />;
  };

  return (
    <Section className="carsListSection" titleClassName="titleCatalog">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FilterForm />
          <Pagination
            data={favorites}
            itemsPerPage={itemsPerPage}
            renderCardList={renderCardList}
          />
        </>
      )}
    </Section>
  );
}

export default Favorites;
