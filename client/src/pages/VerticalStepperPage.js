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

//Internal dependencies
import { useAuth } from '../contexts/AuthContext';
import { getWannaGoByParams } from '../utils/apis/wannagoApiServices/getWannaGos';
import { postAwannaGo } from '../utils/apis/wannagoApiServices/postWannaGos';
import { steps, stepsLoggedIn } from '../data';

export default function VerticalStepper({
  wannaGo,
  setwannaGo,
  justCreatedWG,
  setJustCreatedWG,
}) {
  //Hooks
  const [activeStep, setActiveStep] = useState(0);
  let navigate = useNavigate();
  const { currentUser } = useAuth();
  console.log('this is current user', currentUser);
  let Steps = []
  if (!currentUser) {
    Steps = steps;
  } else Steps = stepsLoggedIn;

  const handleNext = (e) => {
    e.preventDefault();
    const field = e.target[0].name;
    const inputValue = e.target[0].value;
    wannaGo[field] = inputValue;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const saveWannaGo = async () => {
    try {
      await postAwannaGo(wannaGo);
      console.log('here');
      const postedWannaGo = await getWannaGoByParams(
        wannaGo.what,
        wannaGo.when
      );
      console.log(postedWannaGo);
      setwannaGo(postedWannaGo);
      setJustCreatedWG(true);
      const { _id } = postedWannaGo;
      navigate(`/wannago/${_id}`);
    } catch (e) {
      console.log(
        `Error communicating with backend to postAWannago or to retrieve the just posted wannaGo. Error: ${e}`
      );
    }
  };

  return (
    <div className='stepper'>
      <Box sx={{ maxWidth: 700 }}>
        <Stepper
          activeStep={activeStep}
          orientation='vertical'
        >
          {Steps.map((step, index) => (
            <Step
              key={step.label}
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'rgb(241, 138, 203)', // circle color (COMPLETED)
                },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                    color: 'Black', // Just text label (COMPLETED)
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
              <StepLabel>{step.label}</StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <form onSubmit={handleNext}>
                    {step.formField}
                    <br />
                    <Button
                      variant='contained'
                      type='submit'
                      style={{ backgroundColor: 'rgb(241, 138, 203)' }}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === Steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                      style={{ backgroundColor: 'rgb(242,205,211)' }}
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
            <button
              className='button'
              onClick={saveWannaGo}
              sx={{ mt: 1, mr: 1 }}
            >
              Share It!
            </button>
          </Paper>
        )}
      </Box>
    </div>
  );
}


