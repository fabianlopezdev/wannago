import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Authentication.css';
import DeleteUser from './DeleteUser';

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const nameRef = useRef();
  const { updateEmail, updatePassword, updateName, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const promises = [];

    if (nameRef.current.value !== currentUser.email) {
      promises.push(updateName(nameRef.current.value));
    }

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    }

    try {
      await Promise.all(promises);
      navigate('/dashboard');
      setLoading(false);
    } catch (e) {
      setError('Failed to update acount');
      setLoading(false);
    }
  };

  const handleDeleteLink = () => {

  }
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className='card-body-h2'>Update Profile</h2>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                ref={nameRef}
                defaultValue={currentUser.displayName}
                required
              />
            </Form.Group>
            <Form.Group id='email'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type='email'
                ref={emailRef}
                defaultValue={currentUser.email}
                required
              />
            </Form.Group>
            <Form.Group id='password'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                ref={passwordRef}
                placeholder='Leave blank to keep the same password'
              />
            </Form.Group>
            <Form.Group id='password-confirm'>
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type='password'
                ref={passwordConfirmRef}
                placeholder='Leave blank to keep the same password'
              />
            </Form.Group>
            <Button
              type='submit'
              className='signup-button'
              disabled={loading}
            >
              Update
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className='line-after-auth-card'>
        <Link to='/dashboard'>Cancel</Link> &nbsp;
        <Link to='/delete-user'>Delete Account</Link>
      </div>
    </>
  );
}

