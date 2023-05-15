import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { ContactsPage } from 'components/ContactsPage/ContactsPage';
import { Login } from 'components/Login/Login';
import { Register } from 'components/Register/Register';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';
import { RestrictedRoute } from 'components/RestrictedRoute';
import { PrivateRoute } from 'components/PrivateRoute';

export function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/goit-react-hw-08-phonebook" element={<SharedLayout />}>
            <Route
              path="register"
              element={
                <RestrictedRoute
                  component={<Register />}
                  redirectTo="/goit-react-hw-08-phonebook/contacts"
                />
              }
            />
            <Route
              path="login"
              element={
                <RestrictedRoute
                  component={<Login />}
                  redirectTo="/goit-react-hw-08-phonebook/contacts"
                />
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute
                  component={<ContactsPage />}
                  redirectTo="/goit-react-hw-08-phonebook/login"
                />
              }
            />
          </Route>
        </Routes>
      )}
    </>
  );
}
