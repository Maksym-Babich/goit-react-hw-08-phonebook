import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { ContactsPage } from 'components/ContactsPage/ContactsPage';
import { Login } from 'components/Login/Login';
import { Register } from 'components/Register/Register';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<SharedLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </>
  );
}
