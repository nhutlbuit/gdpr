export const LOAD_STUDENT = '[Students] LOAD_STUDENT';
export const LOAD_STUDENT_PAGING = '[Students] LOAD_STUDENT_PAGING';
export const LOAD_STUDENT_SUCCESS = '[Students] LOAD_STUDENT_SUCCESS';
export const LOAD_STUDENT_ERROR = '[Students] LOAD_STUDENT_ERROR';

export const UPDATE_STUDENT = '[Students] UPDATE_STUDENT';
export const UPDATE_STUDENT_SUCCESS = '[Students] UPDATE_STUDENT_SUCCESS';
export const UPDATE_STUDENT_ERROR = '[Students] UPDATE_STUDENT_ERROR';

export const DELETE_STUDENT = '[Students] DELETE_STUDENT';
export const DELETE_STUDENT_SUCCESS = '[Students] DELETE_STUDENT_SUCCESS';
export const DELETE_STUDENT_ERROR = '[Students] DELETE_STUDENT_ERROR';

export const ADD_STUDENT = '[Students] ADD_STUDENT';
export const ADD_STUDENT_SUCCESS = '[Students] ADD_STUDENT_SUCCESS';
export const ADD_STUDENT_ERROR = '[Students] ADD_STUDENT_ERROR';

export const SELECT_STUDENT = '[STUDENT] SELECT_STUDENT';

export const selectStudentsAction = (student: any) => ({ type: SELECT_STUDENT, payload: student });
export const loadStudentsAction = (filter: any) => ({ type: LOAD_STUDENT, payload: filter });

export function updateStudentAction(student: any) {
   return { 
       type: UPDATE_STUDENT,
       payload: student 
    };
}

export const deleteStudentAction = (student: any) => ({ type: DELETE_STUDENT, payload: student });
export const addStudentAction = (student: any) => ({ type: ADD_STUDENT, payload: student });
