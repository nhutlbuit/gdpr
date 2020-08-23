import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ViewVersionHistory from './view-version-history';
import AddVersionHistory from './add-version-history';
import './terms-conditions.scss';

function TermsAndConditions() {
  const [terms, setTerms] = useState([]);
  const [viewHistory, setViewHistory] = useState<boolean>(false);
  const [isAddVersionHistory, setIsAddVersionHistory] = useState<boolean>(false);

  useEffect(() => {
    async function fetchStudents() {
      try {
        const url = `mockapi/term`;
        const response = await fetch(url);
        const responseJson = await response.json();
      //  responseJson.map ((e: any) => e.dateChanged = moment(e.dateChanged, 'DD-MM-YYYY'));
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
        &nbsp;
        &nbsp;
        <Button variant="success" className='view-history-btn' onClick={() => viewHistoryAction()}>
          View History Version
        </Button>
      </div>
    );
  };

  const addVersion = () => {
    setIsAddVersionHistory(true);
  };

  const viewHistoryAction = () => {
    setViewHistory(true);
  }

  const closeViewVersionHistory = (isClose: boolean) => {
    setViewHistory(isClose);
  }

  const closeAddVersionHistory = (isClose: boolean) => {
    setIsAddVersionHistory(isClose);
  }

  return (
    <div className="term-content-container">
      <div>
        <Card className='card-container'>
          <Card.Header className='header'>
            Terms And Conditions
          </Card.Header>
          <Card.Body>
              <div className="row">
                <div className="col-9">{renderTable()}</div>
                <div className="col-3">{renderAction()}</div>
              </div>
              {viewHistory && <ViewVersionHistory closeViewVersionHistory={closeViewVersionHistory}/>}
              {isAddVersionHistory && <AddVersionHistory closeAddVersionHistory={closeAddVersionHistory}/>}
              
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TermsAndConditions;
