import React from "react";
import styles from "../Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { delContact } from "redux/ContactSlice";

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const handleDelContact = id => {
    dispatch(delContact(id));
  };

  const normalizeFilter = filter.toLocaleLowerCase();

  const filterContacts = contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(normalizeFilter);
  });
  return(
    <ul className={styles.contactList}>
      {filterContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          {name + ": " + number}
          {
            <button
              className={styles.btn}
              type="button"
              name="delte"
              onClick={() => handleDelContact(id)}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  )
};

export default ContactList;