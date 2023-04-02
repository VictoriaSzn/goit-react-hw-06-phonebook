import ContactForm from './ContactForm/ContacForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export function App() {
  return (
      <div
        style={{
          height: '100vh',
          marginLeft: 20,
          marginRight: 20,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm  /> 
        
        <h2>Contacts</h2>
        <Filter />
        <ContactList/>
       
      </div>
    );
}
