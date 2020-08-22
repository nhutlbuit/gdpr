import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';

function AddVersionHistory(props: any) {
  const { closeAddVersionHistory } = props;
  const [options, setOptions] = useState([]);
  const [termsOrigin, setTermsOrigin] = useState([]);

  const handleClose = () => {
    closeAddVersionHistory(false);
  };

  useEffect(() => {
    async function fetchStudents() {
      try {
        const url = `mockapi/term`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setTermsOrigin(responseJson);
        const listLicense = responseJson.map((e: any) => {
          const license: any = {};
          license['label'] = e.license;
          license['value'] = e.license;
          return license;
        });
        setOptions(listLicense);
      } catch (error) {
        console.log('Failed to fetch data');
      }
    }
    fetchStudents();
  }, []);

  function onChangeOption(op: any) {
    const filterOptions = termsOrigin.filter(
      (e: any) => e.license === op.value
    );
  }

  const renderForm = () => {
    return (
      <div>
        <Form>
          <Form.Row className="align-items-center">
            <Col sm={3} style={{ textAlign: 'right', fontWeight: 'bold' }}>
              License
            </Col>
            <Col sm={9}>
              <Select
                style={{ margin: '5px' }}
                options={options}
                onChange={onChangeOption}
              />
            </Col>
          </Form.Row>

          <Form.Row
            className="align-items-center"
            style={{ marginTop: '20px' }}
          >
            <Col sm={3}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                Current Version
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Current Version"
                disabled
              />
            </Col>
            <Col sm={3}>
              <Form.Label style={{ fontWeight: 'bold' }}>
                New Version
              </Form.Label>
              <Form.Control type="text" placeholder="New version" />
            </Col>
          </Form.Row>

          <Form.Row className="align-items-center" style={{ marginTop: '20px' }}>
            <Col sm={3} style={{ textAlign: 'right', fontWeight: 'bold' }}>
              ResetConsent?
            </Col>
            <Col sm={3}>
              <Form.Check label="Yes" type="radio" id="yes" />
              <Form.Check label="No" type="radio" id="no" />
            </Col>
          </Form.Row>

          <Form.Row className="align-items-center" style={{ marginTop: '20px' }}>
            <Col sm={3} style={{ textAlign: 'right', fontWeight: 'bold' }}>
              Comment
            </Col>
            <Col sm={9}>
              <Form.Control as="textarea" rows={3} />
            </Col>
          </Form.Row>

          <Form.Row className="align-items-center" style={{ marginTop: '20px' }}>
            <Col sm={3} style={{ textAlign: 'right', fontWeight: 'bold' }}>
              File
            </Col>
            <Col sm={9}>
            <Form.File id="file" />
            </Col>
          </Form.Row>

        </Form>
      </div>
    );
  };

  const searchByLicense = () => {};
  const handleSave = () => {};

  return (
    <div>
      <Modal
        show={true}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-dialog modal-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderForm()}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddVersionHistory;
