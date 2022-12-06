import DoneRequest from './types/state';

export const loadProcessingRequests = async (): Promise<DoneRequest[]> => {
  const res = await fetch('http://localhost:4000/api/requests/processing');
  return res.json();
};

export const loadDoneRequests = async (): Promise<DoneRequest[]> => {
  const res = await fetch('http://localhost:4000/api/requests/done');
  return res.json();
};
