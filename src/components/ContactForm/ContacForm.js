import { useState } from "react";
import styles from "../Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/ContactSlice";

export default function ContactForm ({onSubmitForm}){
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        break;
    }
  };

    const handleSubmit = (evt) => {
      evt.preventDefault();
     
      if (contacts.find(contact => contact.name === name)) {
      return window.alert(`${name} is already in contacts.`);
    }

    dispatch(addContact(name, number));
      setName('');
     setNumber('');
     
   }
    
        return (
          <form
           onSubmit={handleSubmit}
            autoComplete="off"
          >
            <label className={styles.label}>Name
            <input className={styles.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange} />
          </label>
          <label className={styles.label}>Number
            <input className={styles.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />
          </label>
          <button type="submit" className={styles.btn}>Add contact</button>
        </form>
         );
    
}

