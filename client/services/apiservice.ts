// src/apiService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// универсальная обработка ошибок
const handleError = (method: string, endpoint: string, error: unknown) => {
    if (axios.isAxiosError(error)) {
        console.error(
            `Error on ${method.toUpperCase()} ${endpoint}:`,
            error.response?.data || error.message
        );
    } else {
        console.error(`Unexpected error on ${method.toUpperCase()} ${endpoint}:`, error);
    }
    throw error;
};

// GET-запрос
export const fetchData = async <T>(
    endpoint: string,
    params: Record<string, unknown> = {}
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await api.get(endpoint, { params });
        return response.data;
    } catch (error) {
        handleError('get', endpoint, error);
    }
    throw new Error('Unhandled fetchData error');
};

// DELETE-запрос
export const deleteData = async <T>(
    endpoint: string,
    config: AxiosRequestConfig = {}
): Promise<T> => {
    try {
        const response: AxiosResponse<T> = await api.delete(endpoint, config);
        return response.data;
    } catch (error) {
        handleError('delete', endpoint, error);
    }
    throw new Error('Unhandled deleteData error');
};
