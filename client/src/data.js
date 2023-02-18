//External dependency
const dayjs = require('dayjs');

export let initialWannaGo = {
  what: '',
  when: '',
  where: '',
  hostName: '',
  hostId: '',
  _id: '',
};

const now = dayjs(Date.now()).format('YYYY-MM-DDTHH:mm');

export const steps = [
  {
    label: 'Who?',
    description: 'Let people know who sends the plan',
    formField: (
      <input
        text='Who?'
        type='text'
        name='hostName'
        autoFocus
        required
      ></input>
    ),
  },
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
    label: 'When?',
    description: `When is it?`,
    formField: (
      <input
        type='datetime-local'
        min={now}
        name='when'
        autoFocus
        required
      ></input>
    ),
  },
];

export const stepsLoggedIn = [
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
    label: 'When?',
    description: `When is it?`,
    formField: (
      <input
        type='datetime-local'
        min={now}
        name='when'
        autoFocus
        required
      ></input>
    ),
  },
];

