'use client'

import { useQuery } from 'react-query';
import axiosInstance from '@/api/axiosClient';
import { UserModel } from '@/models/Auth';

const endpoint = async (): Promise<UserModel> => {
  const response = await axiosInstance.get('/api/User');
  return response.data as UserModel;
};  

const useGetUser = () => {
  return useQuery<UserModel, Error>(['get-user-by-cookie'], () => endpoint(), {
    onSuccess: () => {
      console.log('API call successful');
    },
    onError: (error: Error) => {
      console.error('API call failed:', error);
    },
  });
};

export { useGetUser };
