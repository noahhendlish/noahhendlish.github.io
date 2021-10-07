import React from 'react';
const Modal = function(props){
    return(
        <div>
            <button type="button" className="btn btn-primary mr-3" data-toggle="modal" data-target="#exampleModal">{props.title}</button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{props.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {props.body}
                        </div>
                        <div className="modal-footer">
                        </div>
                    </div>
                </div>
            </div>

        </div>
        );

};
export default Modal;