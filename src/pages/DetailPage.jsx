import React from "react";
import { deleteNote, archiveNote, getNote, unarchiveNote } from "../utils";
import NoteDetail from "../components/NoteDetail";
import { useNavigate, useParams } from "react-router-dom";
import ArchiveButton from "../components/ArchiveButton";
import DeleteButton from "../components/DeleteButton";
import PropTypes from 'prop-types';

function DetailPageWrapper(){
    const navigate = useNavigate();
     const handleNavigation = () => {
        navigate('/');
     }

    const { id } = useParams(); 
    return <DetailPage id={Number(id)} navigate={handleNavigation} />
}

class DetailPage extends React.Component{
    constructor(props) {
    super(props);

    this.state = {
        note: getNote(props.id)
    }

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onUnarchivedHandler = this.onUnarchivedHandler.bind(this);

    }

    onDeleteHandler(id) {
      deleteNote(id);
      this.props.navigate();
    }
        
     onArchivedHandler(id) {
        archiveNote(id);
        this.props.navigate();

    }
    
    onUnarchivedHandler(id)  {
        unarchiveNote(id);
        const updatedNote = getNote(id);
      
        this.setState({
          note: updatedNote,
        });
        this.props.navigate();
      }

    render() {
        const note = this.state.note;

        if (!note) {
          return <p>Note not found</p>;
        }
    
        const { id } = this.props;

        return(
            <>
            <NoteDetail {...this.state.note} />
            <div className="detail-page__action">
            <ArchiveButton id={id} onArchived={this.onArchivedHandler} active={this.state.note.archived}
             onUnarchived={this.onUnarchivedHandler} />
            <DeleteButton id={id} onDelete={this.onDeleteHandler} />
            </div>
            </>
        )
    }
}

DetailPage.propTypes = {
  id: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;