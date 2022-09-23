import { useState } from 'react';
import Box from '@mui/material/Box';
import { Step, Stepper, StepLabel, StepContent } from '@mui/material';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { getWannaGoByParams, postAwannaGo, getWannaGos } from '../utils/apiServices';
import {useNavigate} from 'react-router-dom'

const steps = [
  {
    label: 'What?',
    description: 'Add a title to your plan',
    formField: (
      <input
        text='Hooo'
        type='text'
        name='what'
        autoFocus
        required
      ></input>
    ),
  },
  {
    label: 'Where?',
    description: 'Add an address',
    formField: (
      <input
        type='text'
        name='where'
        autoFocus
        required
      ></input>
    ),
  },
  {
    label: 'When',
    description: `When is it?`,
    formField: (
      <input
        type='datetime-local'
        name='when'
        autoFocus
        required
      ></input>
    ),
  },
];

export default function VerticalStepper({
  newWannaGo,
  setNewWannaGo,
  showCard,
  setShowCard,
}) {
  const [activeStep, setActiveStep] = useState(0);

  let navigate = useNavigate();
  const handleNext = (e) => {
    e.preventDefault();

    const field = e.target[0].name;
    const inputValue = e.target[0].value;
    newWannaGo[field] = inputValue;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const saveWannaGo = async () => {
    await postAwannaGo(newWannaGo);
    const postedWannaGo = await getWannaGoByParams(newWannaGo.what, newWannaGo.when)
    setNewWannaGo(postedWannaGo);
    const { _id } = postedWannaGo;
    setShowCard(!showCard)
    navigate(`/card/id=${_id}`)
    // setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 700 }}>
      <Stepper
        // className={c.root}
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

