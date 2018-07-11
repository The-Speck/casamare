import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'signup',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    loginGuest: (guest) => dispatch(login(guest)),
    bothFormButton: (type, text) => {
      return (
        <a href="#" className='session-button' onClick={() => dispatch(openModal(type))}>
          {text}
        </a>
      );
    },
    closeModal: () => dispatch(closeModal())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
