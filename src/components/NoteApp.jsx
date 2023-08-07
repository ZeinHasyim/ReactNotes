import React from "react";
import { getAllNotes } from "../utils";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AddNote from "../pages/AddNote";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getAllNotes(),    
           
        }
    }

    render() {

        return (
          <>
          <header>  
            <NavBar />
            </header>
            <main>        
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/archived" element={<ArchivePage />} />
        <Route path="/add" element={<AddNote />} />
        <Route path="/notes/:id" element={<DetailPage />} />
        </Routes> 
        </main>   
            </>  
        )
    }
}

export default NoteApp;