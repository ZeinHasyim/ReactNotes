import React from "react";
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:'',

        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onCreatedAtChangeEventHandler = this.onCreatedAtChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event){
        const inputTitle = event.target.value;
        if (inputTitle.length <= 50){
            this.setState({title: inputTitle})
        }
    }

    onBodyChangeEventHandler(event){
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onCreatedAtChangeEventHandler(event){
        this.setState(() => {
            return {
                createdAt: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNote(this.state);
    }



    render() {
        const { title } = this.state;
        const charTitleRemain = 50 - title.length;
        return (
           <div className="note-input"> 
            <h2>Buat Catatan</h2>
            <form  onSubmit={this.onSubmitEventHandler}>
            <p className="note-input__title__char-limit">Sisa Karakter: {charTitleRemain} </p>
                <input type="text" placeholder="Masukkan Judul" className="note-input__title" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                <textarea type="text" placeholder="Tuliskan Catatanmu disini" className="note-input__body" value={this.state.body} onChange={this.onBodyChangeEventHandler} />
                <button type="submit">Buat</button>
            </form>
           </div> 
        )
    }
}

NoteInput.propType = {
   addNote: PropTypes.func.isRequired,
}


export default NoteInput;