import apiClient from "./axiosInstance";

export function getIncome(){
    return apiClient.get('/incomes');
}