import { PATH } from '@/constants/path';
import axios, { Axios, AxiosError, AxiosResponse } from 'axios';

const instance: Axios = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}/api`,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('accessToken') || undefined}`,
  },
});