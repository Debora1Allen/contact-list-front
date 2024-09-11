import React, { useState } from 'react';
import { IContact } from '../App';

interface PersonFormProps {
  fetchPersons: () => void;
}

const PersonForm: React.FC<PersonFormProps> = ({ fetchPersons }) => {
  const [name, setName] = useState<string>('');
  const [contacts, setContacts] = useState<IContact[]>([{ type: '', value: '' }]);

  const handleAddContact = () => setContacts([...contacts, { type: '', value: '' }]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('http://localhost:3000/api/persons', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, contacts }),
    });
    fetchPersons();
    setName('');
    setContacts([{ type: '', value: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Person Name" required />
      {contacts.map((contact, index) => (
        <div key={index}>
          <input
            value={contact.type}
            onChange={e => {
              const newContacts = [...contacts];
              newContacts[index].type = e.target.value;
              setContacts(newContacts);
            }}
            placeholder="Contact Type"
            required
          />
          <input
            value={contact.value}
            onChange={e => {
              const newContacts = [...contacts];
              newContacts[index].value = e.target.value;
              setContacts(newContacts);
            }}
            placeholder="Contact Value"
            required
          />
        </div>
      ))}
      <button type="button" onClick={handleAddContact}>Add Contact</button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PersonForm;
