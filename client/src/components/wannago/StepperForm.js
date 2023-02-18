import { useState } from 'react';
import { steps, stepsLoggedIn } from '../../data';

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

export default function StepperForm({currentUser, wannago, setIsCreated}) {
  const [activeStep, setActiveStep] = useState(0);
  let Steps = [];

  !currentUser ? (Steps = steps) : (Steps = stepsLoggedIn);
  
  const handleNext = (e) => {
    e.preventDefault();
    if (activeStep === 0 && currentUser) wannago.host = currentUser.displayName
    const field = e.target[0].name;
    const inputValue = e.target[0].value;
    wannago[field] = inputValue;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className='stepper'>
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
    </div>
  );
}






