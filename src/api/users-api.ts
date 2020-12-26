import { GetItemsType, instance, APIResponseType } from './api'

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10, term: string = '', friend: null | boolean = null) {
    let url = `users?page=${currentPage}&count=${pageSize}&term=${term}` 
      + (friend === null ? '' : `&friend=${friend}`);
    return instance.get<GetItemsType>(url)
      .then((response) => response.data)
  },

  follow(userId: number) {
    let url = `follow/${userId}`;
    return instance.post<APIResponseType>(url, {})
      .then(res => res.data)
  },

  unfollow(userId: number) {
    let url = `follow/${userId}`;
    return instance.delete(url)
      .then(res => res.data) as Promise<APIResponseType>
  },
};