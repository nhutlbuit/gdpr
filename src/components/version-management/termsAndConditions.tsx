import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function TermsAndConditions() {

  const history = useHistory();
  const [student, setStudent] = useState('');

  function addStudent() {
    setStudent('');
    history.push('/student/0');
  }

  function editStudent(student: any) {
    setStudent(student);
    history.push(`/student/${student.id}`);
  }

  return (
    <div className="content-container">
      <div>
        <Card>
          <Card.Header style={{ color: 'white', backgroundColor: '#337ab7' }}>Terms And Conditions</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
          </Card.Text>
            
          </Card.Body>
        </Card>
        <Card>
          <Card.Header style={{ color: 'white', backgroundColor: '#337ab7' }}>Privacy Policy</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
          </Card.Text>
            
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default TermsAndConditions;