import { useState } from 'react';
import Box from '@mui/material/Box';
import { Step, Stepper, StepLabel, StepContent } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { getWannaGoByParams } from '../utils/apis/wannagoApiServices/getWannaGos';
import { postAwannaGo } from '../utils/apis/wannagoApiServices/postWannaGos';
import { useNavigate } from 'react-router-dom';

import { steps } from '../data';
export default function VerticalStepper({ wannaGo, setwannaGo }) {
  const [activeStep, setActiveStep] = useState(0);

  let navigate = useNavigate();
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
    await postAwannaGo(wannaGo);
    const postedWannaGo = await getWannaGoByParams(wannaGo.what, wannaGo.when);
    setwannaGo(postedWannaGo);
    const { _id } = postedWannaGo;
    navigate(`/card/id=${_id}`);
  };

  return (
    <Box sx={{ maxWidth: 700 }}>
      <Stepper
        activeStep={activeStep}
        orientation='vertical'
      >
        {steps.map((step, index) => (
          <Step key={step.label}>
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
                    // onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
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
      {activeStep === steps.length && (
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
  );
}

