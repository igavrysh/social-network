import * as Axios from 'axios';

const instance = Axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '3d1ff9da-8bc0-4533-ba31-4c93b3db5b95'
  }
});

export const usersAPI = {

  getUsers(currentPage = 1, pageSize = 10) {
    let url = `users?page=${currentPage}&count=${pageSize}`;
    return instance.get(url)
      .then(response => response.data);
  },

  follow(userId) {
    let url = `follow/${userId}`;
    return instance.post(url, {});
  },

  unfollow(userId) {
    let url = `follow/${userId}`;
    return instance.delete(url);
  }

}

export const profileAPI = {

  getProfile(userId) {
    console.log('start getting profile');
    let url = `profile/${userId}`;
    return instance.get(url)
      .then(response => {
        console.log('finished getting profile');
        return response.data;
      });
  },

  getStatus(userId) {
    console.log('start getting status');
    let url = `profile/status/${userId}`;
    return instance.get(url).then(status => {
      console.log('finised getting status');
      return status;
    });
  },

  updateStatus(status) {
    console.log('start putting status');
    let url = `profile/status`;
    return instance.put(url, {status: status})
      .then(status => {
        console.log('finish putting status');
        return status;
      });
  }
}

export const authAPI = {
  me() {
    let url = `auth/me`;
    return instance.get(url)
  }
}