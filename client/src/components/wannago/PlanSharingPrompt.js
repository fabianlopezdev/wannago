import { Link } from 'react-router-dom';

const PlanSharingPrompt = () => {
  return (
    <div style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
      <h2>Get your plans engaged!</h2>
      <p>
        Share the wannaGo with friends and family and see who can go:
        <Link to='/log-in'> Log in </Link> or
        <Link to='/sign-up'> sign up </Link>
      </p>
    </div>
  );
};

export default PlanSharingPrompt;

