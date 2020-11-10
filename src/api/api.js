import * as Axios from 'axios';

const instance = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3d1ff9da-8bc0-4533-ba31-4c93b3db5b95'
  }
});

export const usersAPI = {
  getUsers = (currentPage = 1, pageSize = 10) => {
    let url = `users?page=${currentPage}&count=${pageSize}`;
    return instance.get(url, { withCredentials: true })
      .then(response => response.data);
  }
}
