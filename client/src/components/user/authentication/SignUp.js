//External dependencies
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';

//Internal dependencies
import { useAuth } from '../../../contexts/AuthContext';

import '../../../css/Authentication.css';

export default function SignUp() {
  //Hooks
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const { signUp, currentUser, updateName } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      setError('Passwords do not match');
      return;
    }

    const promises = [
      signUp(emailRef.current.value, passwordRef.current.value),
      updateName(nameRef.current.value),
    ];

    try {
      setError('');
      setLoading(true);
      console.log(nameRef.current.value);
      await Promise.all(promises);
      console.log(currentUser.displayName);
      navigate('/dashboard');
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
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
                required
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type='password'
                ref={passwordConfirmRef}
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
        Already have an account? <Link to='/login'>Log In</Link>
      </div>
    </>
  );
}

