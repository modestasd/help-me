import axiosInstance from "./utils/httpService";

export const getPosts = () => axiosInstance.get(`/posts`);