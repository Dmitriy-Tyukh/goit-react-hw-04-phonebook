import React, { useState, useEffect, useMemo } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './App.styled'
import defaultContacts from 'dataJson/contacts.json';
import ContactsList from 'components/ContactsList';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';

const App = () => {

    const [contacts, setContacts] = useState(()=>{return JSON.parse(localStorage.getItem('contacts')) || defaultContacts});
    const [filter, setFilter] = useState('')

    useEffect(() => {
        localStorage.setItem('contacts', JSON.stringify(contacts));
    }, [contacts]) 

    const handleFiltContacts = event => {
        setFilter(event.currentTarget.value);
  };

    const filteredContacts = useMemo(() => {
      return contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }, [contacts, filter]);

    const handleDeleteContact = dataId => {
        return setContacts(contacts.filter(({ id }) => dataId !== id)) 
    };

    const handleAddContact = ({ name, number }) => {
        const nameContact = name;
        const newContact = {
        id: nanoid(),
        name: name,
        number: number,
        };

        if (contacts.some(({ name }) => name === nameContact)) {
            alert(`${nameContact} is already in contacts.`);
            return;
        }

        setContacts(prevContacts => [...prevContacts, newContact])
    };
  
    return (
      <Box>
        <h1>Phonebook </h1>
        <ContactForm onSubmitForm={handleAddContact} />

        <h2>Contacts</h2>
        <Filter fiter={filter} onFiltContacts={handleFiltContacts} />
        <ContactsList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      </Box>
    )
  }

export default App;
