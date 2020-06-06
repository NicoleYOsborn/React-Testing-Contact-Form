import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import ContactForm from './ContactForm';

test('contact form renders', ()=>{
    render (<ContactForm />);

    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i); 
    const emailInput = screen.getByLabelText(/email/i); 
    const messageInput = screen.getByLabelText(/message/i); 

    fireEvent.change(firstNameInput, { target: { value: '' }});

    const nameError = screen.findByText(/Looks like there was an error:/i)
  
    fireEvent.change(firstNameInput, { target: { value: 'Nicole' }});

    fireEvent.change(lastNameInput, { target: { value: '' }});
    const lastNameError = screen.findByText(/Looks like there was an error:/i);

    fireEvent.change(lastNameInput, { target: { value: 'Osborn' }});

    fireEvent.change(emailInput, { target: { value: '' }});
    const emailError = screen.findByText(/Looks like there was an error:/i);

    
    // fireEvent.change(messageInput, { target: { value: '' }});

    


})