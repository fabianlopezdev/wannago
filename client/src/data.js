//External dependency
const dayjs = require('dayjs');

const now = dayjs(Date.now()).format('YYYY-MM-DDTHH:mm');

export const steps = [
  {
    label: 'What?',
    description: 'Add a title to your plan',
    formField: (
      <input
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
      // <AddressAutoCompleter/>
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

