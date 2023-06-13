//External dependencies
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';
import { postWannago } from '../../utils/apis/wannagoApiServices/postWannaGos';
import './Authentication.css';

export default function Login({wannago, setWannago}) {
  //Hooks
  const emailRef = useRef();
  const passwordRef = useRef();
  const { logIn } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  console.log('wannago.length', Object.keys(wannago).length)
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      const user = await logIn(emailRef.current.value, passwordRef.current.value);
      if (Object.entries(wannago).length === 3) postWannago(user, wannago, setWannago)
      navigate('/dashboard');
    } catch {
      setError('Failed to sign in');
    }
    setLoading(false);
  };

  return (
    <main className='formContainer'>
      {window.innerWidth < 767 && (
        <>
          <Link
            to={'/'}
            style={{ textDecoration: 'none' }}
            title='Go to Dashboard'
          >
            <p
              className='logo'
              style={{ textAlign: 'center', marginBlock: '1rem' }}
            >
              Wannago?
            </p>
          </Link>
        </>
      )}
      <Card style={{ width: '20rem' }}>
        <Card.Body>
          <h2 className='card-body-h2'>Log in</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
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
            <Button
              type='submit'
              className='signup-button'
              disabled={loading}
            >
              Log In
            </Button>
          </Form>
          <div className='line-after-auth-card forgot'>
            <Link to='/forgot-password'>Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className='line-after-auth-card'>
        Need an account? <Link to='/sign-up'>Sign Up</Link>
      </div>
    </main>
  );
}







