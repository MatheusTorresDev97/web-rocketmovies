import React from 'react'
import { Container } from "./styles";

import { FiX, FiPlus } from "react-icons/fi";

const NoteItem = ({ isNew, value, onClick, ...rest }) => {
    return (
        <Container isNew={isNew}>
            <input type="text" readOnly={!isNew} value={value} {...rest} />
            <button type="button" onClick={onClick}>
                {isNew ? <FiPlus /> : <FiX />}
            </button>
        </Container>
    )
}

export default NoteItem