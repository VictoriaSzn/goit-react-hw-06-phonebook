import React from "react";
import styles from "../Form.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/FilterSlise";

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(state => state.filter.filter);

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <label className={styles.label}>Find contact by name
      <input
        className={styles.input}
        type="text"
        value={filter}
        onChange={changeFilter} />
    </label>
  )
};
export default Filter;
