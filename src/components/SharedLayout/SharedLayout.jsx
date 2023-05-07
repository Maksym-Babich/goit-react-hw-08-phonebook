import { Outlet } from 'react-router-dom';
import {
  Header,
  StyledLink,
  Nav,
} from 'components/SharedLayout/SharedLayout.styled';

export function SharedLayout() {
  return (
    <>
      <Header>
        <Nav>
          <StyledLink to="/goit-react-hw-08-phonebook/contacts">
            Contacts
          </StyledLink>
          <StyledLink to="/goit-react-hw-08-phonebook/register">
            Register
          </StyledLink>
          <StyledLink to="/goit-react-hw-08-phonebook/login">Login</StyledLink>
        </Nav>
      </Header>
      <Outlet />
    </>
  );
}
