import { combineReducers } from 'redux';
import { selectedStudentReducer, studentsReducer } from '../components/student/student.reducer';

export * from '../components/student/student.actions';
export * from '../components/student/student.reducer';
export * from '../components/student/student.saga';

const store = combineReducers({
  students: studentsReducer,
  selectedStudent: selectedStudentReducer,
});

export default store;
