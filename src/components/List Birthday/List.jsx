import React from 'react';
import Person from './Person';

const List = ({ people, onRemove }) => {
  return (
    <section>
      {people.map((person) => {
        return <Person key={person.id} {...person}  onRemove={onRemove}/>;
      })}
    </section>
  );
};

export default List;
