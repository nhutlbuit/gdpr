import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState, useEffect } from 'react';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Select from 'react-select';

function ViewVersionHistory(props: any) {
  const { closeViewVersionHistory } = props;
  const [options, setOptions] = useState([]);
  const [terms, setTerms] = useState([]);
  const [termsOrigin, setTermsOrigin] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const url = `mockapi/term`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setTerms(responseJson);
        setTermsOrigin(responseJson);
        const listLicense = responseJson.map((e: any) => {
            const license: any = {};
            license['label'] = e.license;
            license['value']  = e.license;
            return license;
        });
        setOptions(listLicense);
      } catch (error) {
        console.log('Failed to fetch data');
      }
    }
    fetchStudents();
  }, []);

  const renderTable = () => {
    return (
      <table style={{marginTop:'20px'}}>
        <thead>
          <tr>
            <th>License</th>
            <th>Version</th>
            <th>Date Changed</th>
            <th>Changed By</th>
            <th>Consent Reset</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {terms.map((st: any) => (
            <tr key={st?.id}>
              <td>{st?.license}</td>
              <td>{st?.version}</td>
              <td> {st?.dateChanged}</td>
              <td> {st?.changedBy}</td>
              <td>{st?.consentReset ? 'Y' : 'N'}</td>
              <td>{st?.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  function onChangeOption(op: any) {
    const filterOptions = termsOrigin.filter((e: any)=> e.license === op.value);
    setTerms(filterOptions);
  }

  const renderSearchAction = () => {
    return (
      <div>
        <Form>
          <Form.Row className="align-items-center">
            <Col sm={3}>License:</Col>
            <Col sm={3}>
              <Select
                style={{ margin: '5px' }}
                options={options}
                onChange={onChangeOption}
                // value={options[0]}
              />
            </Col>
            <Col xs="auto">
              <Button variant="success" onClick={() => searchByLicense()}>
                Search
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  };

  const searchByLicense = () => {};

  const handleClose = () => {
    closeViewVersionHistory(false);
  };

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
          <Modal.Title>View History</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {renderSearchAction()}
          {renderTable()}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewVersionHistory;
