import styled from "styled-components";

const teal = '#008080'

export const CardWrapper = styled.article`

:hover {
    cursor: pointer
    .card {
        border-color: ${teal}
    }
}

text-align: center;

img {
    width: 80px
}

.card {
   border-width:2px;
}

.card-header {
    font-weight:700;
}

.card-body{
    padding: 1.23rem .5rem;
}

`