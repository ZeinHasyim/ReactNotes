import React from "react";
import { MdDelete } from 'react-icons/md';
import PropTypes from 'prop-types'

function DeleteButton({ id, onDelete}) {
    return(
        <button className="action" onClick={() => onDelete(id)} ><MdDelete /> </button>
    )
}

DeleteButton.propTypes = {
    id:PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
}

export default DeleteButton;