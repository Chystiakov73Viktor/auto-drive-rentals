import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';

function Home() {
  return (
    <Section className="carsListSection" titleClassName="titleCatalog">
        <Loader />
    </Section>
  );
}

export default Home;