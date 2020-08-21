import React, { useState } from 'react';
import StudentDashBoard from './StudentDashBoard';
import { Switch, Route, useHistory } from 'react-router-dom';
import StudentDetail from './StudentDetail';

function Student() {

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
        <div >
          <Switch>
            <Route
              exact
              path="/student"
              component={() => (
                <StudentDashBoard addNewStudent={addStudent} editStudent={editStudent}/>
              )}
            />
            <Route
              exact
              path="/student/:id"
              component={() => {
                return (
                <StudentDetail student={student}/>
                );
              }}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default Student;