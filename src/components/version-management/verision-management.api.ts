import axios from 'axios';
import { parseItem, parseList } from '../../store/action-utils';


export const addTermsAndConditionsApi = async (student: any) => {
  const response = await axios.post(`/trainingApi/students`, student);
  return parseItem(response, 201);
};

export const addPrivatePolicyApi = async (student: any) => {
  const response = await axios.post(`/trainingApi/students`, student);
  return parseItem(response, 201);
};

export const loadSPrivatePolicyApi = async (filter: any) => {
  const response = await axios.get(`/trainingApi/students/search/likeName?name=${filter.payload.searchName}&page=${filter.payload.number}&size=${filter.payload.size}&projection=InlineStudent`);
  return parseList(response);
};

export const loadTermsAndConditionsApi = async () => {
  const response = await axios.get(``);
  return parseList(response);
};

export const loadLicenseApi = async () => {
  const response = await axios.get(``);
  return parseList(response);
};

