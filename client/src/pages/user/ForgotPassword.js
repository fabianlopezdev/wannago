//External dependencies
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

import './authentication.css';

export default function ForgotPassword() {
  //Hooks
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage('Check your inbox for further instructions');
    } catch {
      setError('Failed to reset password');
    }
    setLoading(false);
  };

  return (
    <>
      <main className='form-container'>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <h2 className='card-body-h2'>Password Reset</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            {message && <Alert variant='success'>{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type='email'
                  ref={emailRef}
                  required
                />
              </Form.Group>
              <Button
                type='submit'
                className='signup-button'
                disabled={loading}
              >
                Reset Password
              </Button>
            </Form>
            <div className='line-after-auth-card forgot'>
              <Link to='/user/login'>Log in</Link>
            </div>
          </Card.Body>
        </Card>
        <div className='line-after-auth-card'>
          Need an account? <Link to='/user/signup'>Sign Up</Link>
        </div>
      </main>
    </>
  );
}



