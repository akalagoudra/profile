import React, { Component, useState } from 'react';
import shuffleArray from '../utils/random';
import ReactModal from "react-modal";

function Entry(props){
    let [isModalOpen, setModalState] = useState(false)

    let handleOpenModal = () => setModalState(true);

    let handleCloseModal = () => setModalState(false);

    let style = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
        }
    };

    return (
        <div className='columns portfolio-item'>
            <div className='item-wrap' onClick={ handleOpenModal }>
                <img
                    src={ props.entry.image.thumb }
                    alt={ props.entry.name }/>
                <div className='overlay'>
                    <div className='portfolio-item-meta'>
                        <h5>{ props.entry.name }</h5>
                        <p>{ props.entry.category }</p>
                    </div>
                </div>
                <div className='link-icon'>
                    <i className='icon-down-open'/>
                </div>
            </div>

            <ReactModal className='popup-modal mfp-hide' isOpen={isModalOpen}
            onRequestClose={() => handleCloseModal()} style={style}>
                <img
                    className='scale-with-grid'
                    src={props.entry.image.modal}
                    alt={props.entry.name}/>
                <div className='description-box'>
                    <h5>{props.entry.name}</h5>
                    <p>{props.entry.summary}</p>
                    <span className='categories'>
                        <i className='fa fa-tag'/>
                        {props.entry.keywords.join(', ')}
                    </span>
                </div>
                <div className='link-box'>
                    <a
                        href={ props.entry.website }
                        target='_blank'
                        rel='noopener noreferrer'>
                        Details
                    </a>
                    <a href="#portfolio" className='popup-modal-dismiss'
                     onClick={ () => handleCloseModal()}> Close</a>
                </div>
            </ReactModal>

            {/* <Modal
                entry={ props.entry }
                isOpen={ isModalOpen }
                onRequestClose={ handleCloseModal }/> */}
        </div>
    );

}

class Portfolio extends Component{

    render () {
        const portfolio = shuffleArray(this.props.content).slice(0, 8);
        return (
            <section id='portfolio'>
                <div className='row'>
                    <div className='twelve columns collapsed'>
                        <h1>Portfolio</h1>
                        <div id='portfolio-wrapper' className='bgrid-quarters s-bgrid-thirds cf'>
                            {
                            portfolio.map( (entry, index) => {
                                return (
                                    <Entry key={index} index={index} entry={entry}/>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
