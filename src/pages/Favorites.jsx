import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';

function Favorites() {
  return (
    <Section className="carsListSection" titleClassName="titleCatalog">
        <Loader />
    </Section>
  );
}

export default Favorites;