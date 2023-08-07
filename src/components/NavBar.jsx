    import React from "react";
    import { Link } from "react-router-dom";

    function NavBar(){
        return (
            <div className="note-app__header">
                <h1><Link to='/'>Notes</Link></h1>
                <Link to='/archived'>Arsip</Link> 
            </div>
        )
    }

    export default NavBar;