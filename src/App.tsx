import React, { useEffect, useState } from 'react';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import './styles/main.scss';

export interface IContact {
  type: string;
  value: string;
}

export interface IPerson {
  _id: string;
  name: string;
  contacts: IContact[];
}

const App: React.FC = () => {
  const [persons, setPersons] = useState<IPerson[]>([]);

  const fetchPersons = async () => {
    const response = await fetch('http://localhost:3000/api/persons');
    const data = await response.json();
    setPersons(data);
  };

  useEffect(() => {
    fetchPersons();
  }, []);

  return (
    <div className="App">
      <PersonForm fetchPersons={fetchPersons} />
      <PersonList persons={persons} fetchPersons={fetchPersons} />
    </div>
  );
};

export default App;
