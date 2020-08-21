import { Component } from 'react';
import { createPortal } from 'react-dom';



class Modal extends Component {

  el: any;
  modalRoot: any;

  constructor(props: any) {
    super(props);
    this.el = document.createElement('div');
    this.modalRoot = document.getElementById('modal');
  }

  componentDidMount() {
    this.modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    this.modalRoot.removeChild(this.el);
  }

  render() {
    return createPortal(this.props.children, this.el);
  }
}

export default Modal;
