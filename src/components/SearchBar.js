import React from "react";
import { FormGroup, Label, Input, Button } from 'reactstrap'
import { FormWrapper } from '../styles';

const SearchBar = props => {
    return(
        <FormWrapper inline>
      <FormGroup>
        <Label for="searchTerm" hidden>Location Search</Label>
        <Input 
        type="test" 
        //name attribute needs to be equal to the state value
        name="searchTerm" 
        id="searchTerm" 
        placeholder="Denver, CO" 
        onChange={props.handleInputChange}
        value={props.searchTerm}
        />
        <Button>Search</Button>
      </FormGroup>
      </FormWrapper>
    )
}


export default SearchBar;