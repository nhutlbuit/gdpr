import axios from 'axios';
import { parseItem, parseList } from '../../store/action-utils';

export const deleteStudentApi = async (student: any) => {
  const response = await axios.delete(`/trainingApi/students/${student.id}`);
  return parseItem(response, 200);
};

export const updateStudentApi = async (student: any) => {
  const response = await axios.put(`/trainingApi/students/${student.id}`, student);
  return parseItem(response, 200);
};

export const addStudentApi = async (student: any) => {
  const response = await axios.post(`/trainingApi/students`, student);
  return parseItem(response, 201);
};

export const loadStudentsApi = async (filter: any) => {
  const response = await axios.get(`/trainingApi/students/search/likeName?name=${filter.payload.searchName}&page=${filter.payload.number}&size=${filter.payload.size}&projection=InlineStudent`);
  return parseList(response);
};

export const loadClassesApi = async () => {
  const response = await axios.get(`/trainingApi/trainingClasses/search/fetchClassCodes?projection=InlineTrainingClassGetIdOnly`);
  return parseList(response);
};
