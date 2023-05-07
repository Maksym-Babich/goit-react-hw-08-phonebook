import { Form, Input, Button, Label } from 'components/Login/Login.styled';
import { nanoid } from 'nanoid';

export function Login() {
  const emailId = nanoid();
  const passId = nanoid();
  return (
    <Form>
      <Label htmlFor={emailId}>Email</Label>
      <Input id={emailId} required name="email" type="email" />
      <Label htmlFor={passId}>Password</Label>
      <Input id={passId} required name="password" type="password" />
      <Button type="submit">Log In</Button>
    </Form>
  );
}
