import { useState } from 'react';
import data from './data';
import List from './List';

function ListBirthday() {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    const updatePeople = people.filter((person) => person.id !== id);
    setPeople(updatePeople);
  }

  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <List people={people} onRemove={removePerson} /> 
        <button
          type='button'
          className='btn btn-block'
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default ListBirthday;