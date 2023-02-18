//External dependencies
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { postUser } from '../../utils/apis/userApiServices/userApi';
import { postWannago } from '../../utils/apis/wannagoApiServices/postWannaGos';

//Internal dependencies
import { useAuth } from '../../contexts/AuthContext';

import './Authentication.css';

export default function SignUp({wannago, setWannago}) {
  //Hooks
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const { signUp } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Passwords do not match');
      return;
    }

    try {
      setError('');
      setLoading(true);
      const user = await signUp(
        emailRef.current.value,
        passwordRef.current.value,
        nameRef.current.value
      );
      if (Object.entries(wannago).length === 3) postWannago(user, wannago, setWannago);
      // const user = {
      //   name: nameRef.current.value,
      //   email: newUser.user.email,
      //   _id: newUser.user.uid,
      // };
      // console.log('this is user', user);
      // await postUser(user);
      navigate('/dashboard');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <main className='formContainer'>
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <h2 className='card-body-h2'>Sign Up</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                ref={nameRef}
                required
              />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                ref={emailRef}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                ref={passwordRef}
                minLength={6}
                required
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type='password'
                ref={passwordConfirmRef}
                minLength={6}
                required
              />
            </Form.Group>
            <Button
              type='submit'
              className='signup-button'
              disabled={loading}
            >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='line-after-auth-card'>
        Already have an account? <Link to='/log-in'>Log In</Link>
      </div>
    </main>
  );
}






