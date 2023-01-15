import React from "react";
import PropTypes from 'prop-types';
import { Input, Label } from "./Filter.styled";

function Filter({ filter, onFiltContacts }) {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={onFiltContacts}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.func,
  onFiltContacts: PropTypes.func.isRequired,
};