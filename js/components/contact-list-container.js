import React from 'react';
import CONTACTS from '../contacts';
import ContactList from './contact-list';

// this is a simple container component that injects the constant CONTACTS object as a prop into the ContactList

export default function ContactListContainer() {
    return (
      <ContactList contacts={CONTACTS} />
    )
};
