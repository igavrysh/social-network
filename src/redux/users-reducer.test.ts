import { UserType } from "../types/types";
import usersReducer, { InitialState, actions } from "./users-reducer"

let state: InitialState;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: 'Dimych',
        followed: false,
        photos: {
          small: null,
          large: null
        },
        status: 'status 0'
      },
      {
        id: 1,
        name: 'Dimych 1',
        followed: false,
        photos: {
          small: null,
          large: null
        },
        status: 'status 1'
      },
      {
        id: 2,
        name: 'Dimyc 0h',
        followed: true,
        photos: {
          small: null,
          large: null
        },
        status: 'status 2'
      },
      {
        id: 3,
        name: 'Dimych',
        followed: true,
        photos: {
          small: null,
          large: null
        },
        status: 'status 3'
      }
    ] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>  // array of users ids
  }
})

test('follow success', () => {
  const newState = usersReducer(state, actions.followSuccess(1))
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
})

test('unfollow success', () => {
  const newState = usersReducer(state, actions.unfollowSuccess(3))
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
})