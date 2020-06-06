import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('contact form renders', ()=>{
    render (<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i); 
    const emailInput = screen.getByLabelText(/email/i); 
    const messageInput = screen.getByLabelText(/message/i); 

    fireEvent.change(firstNameInput, { target: { value: 'Nicole' }});
    fireEvent.change(lastNameInput, { target: { value: 'Osborn' }});
    fireEvent.change(emailInput, { target: { value: 'email@email.com' }});
    fireEvent.change(messageInput, { target: { value: '' }});


})