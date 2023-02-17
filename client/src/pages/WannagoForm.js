//External dependencies
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  StepContent,
  Typography,
} from '@mui/material';
import { Alert } from 'bootstrap';

//Internal dependencies
import { useAuth } from '../contexts/AuthContext';
import { getWannaGoByParams } from '../utils/apis/wannagoApiServices/getWannaGos';
import { postAwannaGo } from '../utils/apis/wannagoApiServices/postWannaGos';
import { steps, stepsLoggedIn } from '../data';
import { getUserById } from '../utils/apis/userApiServices/userApi';
import './wannagoForm.css';
import { Logo } from '../components/navbar/NavBarButtons';
import NewWannago from './NewWannago2';

export default function WannagoForm({
  wannago,
  setWannago,
  setIsNewWannago,
}) {
  //Hooks
  const [activeStep, setActiveStep] = useState(0);
  const [error, setError] = useState();
  const [isCreated, setIsCreated] = useState(false)

  let navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log('this is current user', currentUser);
  let Steps = [];

  !currentUser ? Steps = steps : Steps = stepsLoggedIn;
  

  const handleNext = (e) => {
    e.preventDefault();
    const field = e.target[0].name;
    const inputValue = e.target[0].value;
    wannago[field] = inputValue;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const saveWannaGo = async () => {
    try {
      //If user creates a wannago while logged in.
      if (!wannago.ownerName) {
        const user = await getUserById(currentUser.uid);
        wannago.ownerName = user.name;
      }
      await postAwannaGo(wannago);
      const postedWannaGo = await getWannaGoByParams(
        wannago.what,
        wannago.when
      );
      // console.log('this is posted wannago', postedWannaGo);
      setWannago(postedWannaGo);
      setIsNewWannago(true);
      const { _id } = postedWannaGo;
      navigate(`/${_id}`);
    } catch (e) {
      setError('Sorry we could not create the wannago. Please try in a while.');
      console.log(
        `Error communicating with backend to postAWannago or to retrieve the just posted wannago. Error: ${e}`
      );
    }
  };

  return (
    <>
      {(!currentUser && window.innerWidth < 767) && <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
       
        <Logo />
        </div>
        </>
        }
      {isCreated || <div className='stepper'>
        <Box sx={{ maxWidth: 1000 }}>
          <Stepper
            activeStep={activeStep}
            orientation='vertical'
          >
            {Steps.map((step, index) => (
              <Step
                key={step.label}
                style={{ fontSize: 'larger' }}
                sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: 'rgb(241, 138, 203)', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                    {
                      color: 'Black',
                      fontSize: 'larger', // Just text label (COMPLETED)
                    },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: 'rgb(242,205,211)', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                    {
                      color: 'Black', // Just text label (ACTIVE)
                    },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: 'white', // circle's number (ACTIVE)
                  },
                }}
              >
                <StepLabel style={{ fontSize: 'larger' }}>
                  <div style={{ fontSize: '2rem' }}>{step.label}</div>
                </StepLabel>
                <StepContent>
                  <Typography style={{ fontSize: 'larger' }}>
                    {step.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <form onSubmit={handleNext}>
                      {step.formField}
                      <br />
                      <Button
                        variant='contained'
                        type='submit'
                        style={{
                          backgroundColor: 'rgb(241, 138, 203)',
                          fontSize: 'larger',
                        }}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === Steps.length - 1 ? 'Finish' : 'Continue'}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                        style={{
                          backgroundColor: 'rgb(242,205,211)',
                          fontSize: 'larger',
                        }}
                      >
                        Back
                      </Button>
                    </form>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === Steps.length && (
            <Paper
              square
              elevation={0}
              sx={{ p: 3 }}
            >
              {error && <Alert variant='danger'>{error}</Alert>}
              <button
                className='button'
                onClick={() => setIsCreated(true)}
                sx={{ mt: 1, mr: 1 }}
              >
                Share It!
              </button>
            </Paper>
          )}
        </Box>
      </div>}
      {isCreated && <NewWannago wannago={wannago}/>}
    </>
  );
}

