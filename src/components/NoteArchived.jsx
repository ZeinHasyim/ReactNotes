import React from "react";
import NoteItem from "./NoteItem";
import PropTypes from 'prop-types';

function NoteArchived ({notes, onDelete, onArchived}){
    return(
        <>
            {notes.length == 0 ? (
                <h3 className="notes-list__empty-message">Tidak ada Catatan</h3>
            ) : (
        <div className="note-list">
               {notes.map((note) => (
                    <NoteItem key={note.id}
                    id={note.id}
                    onDelete={onDelete}
                    onArchived={onArchived}
                    {...note}
                     />    
               ))}
        </div>
    )}
        </>
    );
}

NoteArchived.propType = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchived: PropTypes.func.isRequired
}


export default NoteArchived;