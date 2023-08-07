import React from "react";
import NoteItemBody from "./NoteItemBody";
import PropTypes from 'prop-types';

function NoteItem({ title, body, createdAt, id  }){
    return (
       <div className="note-item"> 
        <NoteItemBody id={id} title={title} body={body} createdAt={createdAt} />
        </div>
    )
}

NoteItem.propTypes = {
    id: PropTypes.number.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteItem;