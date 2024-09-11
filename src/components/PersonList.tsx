import React from 'react';
import { IPerson } from '../App';

interface PersonListProps {
  persons: IPerson[];
  fetchPersons: () => void;
}

const PersonList: React.FC<PersonListProps> = ({ persons, fetchPersons }) => {
  const handleDelete = async (id: string) => {
    await fetch(`http://localhost:3000/api/persons/${id}`, { method: 'DELETE' });
    fetchPersons();
  };

  return (
    <div>
      {persons.map((person) => (
        <div key={person._id}>
          <h3>{person.name}</h3>
          {person.contacts.map((contact, index) => (
            <p key={index}>
              {contact.type}: {contact.value}
            </p>
          ))}
          <button onClick={() => handleDelete(person._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default PersonList;

