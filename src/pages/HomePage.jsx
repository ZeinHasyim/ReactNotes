import React from "react";
import NoteList from "../components/NoteList";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
import { getAllNotes } from "../utils";
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


function HomePageWrapper() {
    const [searchParams , setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}


class HomePage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);

    }

    onKeywordChangeHandler(keyword){
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }

    onArchivedHandler(noteId) {
        const updatedNotes = this.state.notes.map(note => {
          if (note.id === noteId) {
            return {
              ...note,
              archived: !note.archived,
            };
          }
          return note;
        });

        this.setState({
          notes: updatedNotes,
        });
    }



    render() {

        const notes = this.state.notes.filter((note) => {
            return (
              note.title.toLowerCase().includes(this.state.keyword.toLowerCase()) &&
              !note.archived
            );
          });



        return (
          <>
          <section className="homePage">       
       <div className="note-app__body">
        <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
        <h2>Catatan Aktif</h2>
        <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler}/>
        </div>       
        <div className="homepage__action">
        <button className="action" type="button" title="Tambah"> <Link to='/add'><AiOutlinePlus/></Link> </button>
        </div>
        </section>
            </>  
        )
    }
}

HomePage.propTypes = {
  defaultKeyword: PropTypes.string,
  keywordChange: PropTypes.func.isRequired,
}

export default HomePageWrapper;