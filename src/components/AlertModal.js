import React from 'react';

import { Modal, Button } from 'react-bootstrap';

class AlertModal extends React.Component {
  state = { show: false };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    const { titleText, bodyText, bodyColor } = this.props;
    return (
      <>
      <Modal
        className={"alert-modal "+ bodyColor}
        size="sm"
        show={this.state.show}
        onHide={() => this.handleClose()}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            { titleText }
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{ bodyText }</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}

export default AlertModal;