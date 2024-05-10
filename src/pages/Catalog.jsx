import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Section } from "components/Section/Section";
import { CardMarkupList } from "../components/CardMarkupList/CardMarkupList";
import { getCars } from "../redux/catalog/operations";
import { selectCarsIsLoading } from "../redux/catalog/selects";
import { Loader } from "components/Loader/Loader";
import { FilterForm } from "../components/FilterForm/FilterForm";
import { selectFilteredCard } from "../redux/filter/selects";
import Pagination from "../components/Pagination/Pagination";

function Catalog() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectCarsIsLoading);
  const filteredCard = useSelector(selectFilteredCard);

  const itemsPerPage = 12;

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

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
            data={filteredCard}
            itemsPerPage={itemsPerPage}
            renderCardList={renderCardList}
          />
        </>
      )}
    </Section>
  );
}

export default Catalog;
