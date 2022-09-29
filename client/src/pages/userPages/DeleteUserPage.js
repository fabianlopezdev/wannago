//External dependencies
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext';

const DeleteUser = () => {
  const [error, setError] = useState('');
  const { deleteUser } = useAuth();

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      setError('');
      await deleteUser();
      navigate('/');
    } catch (e) {
      setError('Failed to delete');
    }
  };

  return (
    <Card>
      <Card.Body>
        <h2 className='card-body-h2'>Delete Account</h2>
        {error && <Alert variant='danger'>{error}</Alert>}
        <p className='card-body-h2'>You are about to delete your account.</p>
        <div className='btns-container'>
          <button
            className='button'
            onClick={handleDelete}
          >
            Delete
          </button>
          <button
            className='button cancel'
            onClick={() => navigate('/user/dashboard')}
          >
            Cancel
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeleteUser;

