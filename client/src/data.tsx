//External dependency
const dayjs = require('dayjs');

export default interface initialWannaGo {
  what: string,
  when: string,
  where: string,
  ownerName: string,
  _id: string,
};

// export default interface initialWannaGo {
//   what: '',
//   when: '',
//   where: '',
//   ownerName: '',
//   _id: '',
// }

const now = dayjs(Date.now()).format('YYYY-MM-DDTHH:mm');

export const steps = [
  {
    label: 'Who?',
    description: 'Let people know who sends the plan',
    formField: (
      <>
      <label htmlFor='owner-name'></label>
      <input
        data-text='Who?' // check if this works - it was complianing when just 'text was written
        type='text'
        id='owner-name'
        name='ownerName'
        autoFocus
        required
      ></input>
      </>
    ),
  },
  {
    label: 'What?',
    description: 'Add a title to your plan',
    formField: (
      <>
      <label htmlFor='Plan title'></label>
      <input
        data-text='What?'
        type='text'
        id='Plan title'
        name='what'
        autoFocus
        required
      ></input>
      </>
    ),
  },
  {
    label: 'Where?',
    description: 'Add an address',
    formField: (
      <>
      <label htmlFor='Plan location'></label>
      <input
        type='text'
        id='Plan location'
        name='where'
        autoFocus
        required
      ></input>
      </>
    ),
  },
  {
    label: 'When?',
    description: `When is it?`,
    formField: (
      <>
      <label htmlFor='Plan`s date'></label>
      <input
        type='datetime-local'
        min={now}
        id='Plan`s date'
        name='when'
        autoFocus
        required
      ></input>
      </>
    ),
  },
];

// export default initialWannaGo;