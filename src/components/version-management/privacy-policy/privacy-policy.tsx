import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './privacy-policy.scss';

function PrivacyPolicy() {

  const [terms, setTerms] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const url = `mockapi/policy`;
        const response = await fetch(url);
        const responseJson = await response.json();
        setTerms(responseJson);
      } catch (error) {
        console.log('Failed to fetch data');
      }
    }
    fetchStudents();
  }, []);

  const renderTable = () => {
    return (
      <table>
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

  const renderAction = () => {
    return (
      <div>
        <Button variant="success" onClick={() => addVersion()}>
          Add New Version
        </Button>
        <Button variant='success' className='view-history-btn' onClick={() => viewHistory()}>
          View History Version
        </Button>
      </div>
    );
  };

  const addVersion = () => {};

  function viewHistory() {}

  return (
    <div className="content-container">
      <div>
        <Card className='card-container'>
          <Card.Header className='header'>
          Privacy Policy
          </Card.Header>
          <Card.Body>
              <div className="row">
                <div className="col-9">{renderTable()}</div>
                <div className="col-3">{renderAction()}</div>
              </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default PrivacyPolicy;