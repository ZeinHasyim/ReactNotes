import React from "react";
import { addNote } from "../utils";
import NoteInput from "../components/NoteInput";
import { useNavigate } from "react-router-dom";


function AddNote() {
    const navigate = useNavigate();

    function onAddNotesHandler(note) {
        addNote(note);
        navigate('/')

    }

    return (
        <section>
            <NoteInput addNote={onAddNotesHandler} />
        </section>
    )
}


export default AddNote;