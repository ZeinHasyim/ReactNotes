import React from "react";
import PropTypes from 'prop-types';


function NoteDetail({ title, createdAt , body}) {
    return (
        <>
        <section className="detail-page">
        <h1 className="detail-page__title">{title}</h1>
        <p className="detail-page__createdAt">Tanggal :{createdAt}</p>
        <h2 className="detail-page__body">{body}</h2>
        
        </section>
        </>
    )
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}

export default NoteDetail;