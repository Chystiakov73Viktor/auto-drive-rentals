import { Section } from "components/Section/Section";
import { HomePage } from "../components/HomePage/HomePage";
// import { Loader } from 'components/Loader/Loader';

function Home() {
  return (
    <Section className="carsHomeSection" titleClassName="titleCatalog">
      {/* <Loader /> */}
      <HomePage />
    </Section>
  );
}

export default Home;
