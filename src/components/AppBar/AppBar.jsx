import { DivWrapper } from './AppBar.styled';
import { Container } from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';


export const AppBar = () => {
  return (
    <Container>
      <DivWrapper>
        <Logo />
        <Navigation />
      </DivWrapper>
    </Container>
  );
};