import React from "react";
import { FaArchive, FaRegFileArchive } from 'react-icons/fa';
import PropTypes from 'prop-types'

function ArchiveButton({ id, onArchived, active, onUnarchived }) {
    return (
        <button className="action" onClick={() => (active ? onUnarchived(id) : onArchived(id))}>
        {active ? <FaRegFileArchive /> : <FaArchive />}
      </button>
    );
  }
  
  ArchiveButton.propTypes = {
    id: PropTypes.number.isRequired,
    onArchived: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    onUnarchived: PropTypes.func.isRequired,
  }

export default ArchiveButton;