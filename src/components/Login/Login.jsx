import { Form, Input, Button, Label } from 'components/Login/Login.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';

export function Login() {
  const emailId = nanoid();
  const passId = nanoid();
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    dispatch(
      login({
        name: form.elements.name.value,
        email: form.elements.email.value,
      })
    );
    form.reset();
  }

  return (
    <Form>
      <Label htmlFor={emailId}>Email</Label>
      <Input id={emailId} required name="email" type="email" />
      <Label htmlFor={passId}>Password</Label>
      <Input id={passId} required name="password" type="password" />
      <Button type="submit" onClick={handleSubmit}>
        Log In
      </Button>
    </Form>
  );
}
