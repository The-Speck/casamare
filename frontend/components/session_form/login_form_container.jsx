import { connect } from 'react-redux';
import React from 'react';
import { login, signup } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    loginGuest: (guest) => dispatch(login(guest)),
    bothFormButton: (type, text) => {
      return (
        <button href="#" className={`session-button`} onClick={() => dispatch(openModal(type))}>
          {text}
        </button>
      );
    },
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
