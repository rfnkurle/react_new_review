import styled from "styled-components";
import { Card, Form} from 'reactstrap'

const teal = '#008080';
const gray = "#ccc";
const border = '2px solid ${gray}';
const tealBorder = '2px solid ${teal}';

export const CardWrapper = styled.article`

display: flex;

justify-content: space-evenly;

:hover {
    cursor: pointer;
    .card {
        border-color: ${teal}
    }
};

text-align: center;

img {
    width: 80px
};

.card {
   border: ${border}
};

.card-header {
    background-color: ${props => props.isSelected ? teal : null};
    font-weight:700;
};

.card-body{
    padding: 1.23rem .5rem;
};

`

export const DetailsWrapper = styled(Card)` 
    
    border: ${tealBorder};
    text-align: "center";
    padding: 1rem;
        img {
        width: 150px;
    }
`

export const FormWrapper = styled(Form)`
    input.form-control{
        width: 350px;

    }
    button {
        background: ${teal};
    }
`