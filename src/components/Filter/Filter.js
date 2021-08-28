import { useDispatch, useSelector } from "react-redux";
// import actions from "components/redux/contact/contact-operations";
import actions from '../redux/contact/contact-action';
// import { getFilter } from "components/redux/contact/contact-selector";
import { getFilter } from '../redux/contact/contact-selector';

import styles from './Filter.module.css';
import { Input } from '@material-ui/core';


function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={styles.itemFilter}>
      <p className={styles.itemTextFilter}>Пошук контактів</p>
      <Input
        className={styles.itemElement}
        type="text"
        value={value}
        onChange={event => dispatch(actions.changeFilter(event.target.value))}
      />
    </label>
  );
}

export default Filter;