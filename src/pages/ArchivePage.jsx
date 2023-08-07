import React from "react";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils";

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes()
        }
    }

    render() {
        const archivedNote = this.state.notes.filter((note) => {
            return note.archived === true;
        });

     return(
        <>
        <div className="note-app__body">
               <h2>Arsip</h2>
               <NoteList notes={archivedNote} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler} />
        </div>      
        </>
     )   
    }
}

export default ArchivePage;