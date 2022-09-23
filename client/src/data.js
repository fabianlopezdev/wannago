export let initialWannaGo = {
  what: '',
  when: '',
  where: '',
  owner: '',
  _id: ''
};

export const steps = [
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



