import { Dispatch } from "redux"
import { APIResponseType } from "../api/api"
import { usersAPI } from "../api/users-api"
import { UserType } from "../types/types"
import { updateObjectInArray } from "../utils/object-helpers"
import { BaseThunkType, InferActionsTypes } from "./redux-store"

const FOLLOW = 'SN/USERS/FOLLOW'
const UNFOLLOW = 'SN/USERS/UNFOLLOW'
const SET_USERS = 'SN/USERS/SET_USERS'
const SET_CURRENT_PAGE = 'SN/USERS/SET_CURRENT_PAGE'
const SET_FILTER = 'SN/USERS/SET_FILTER'
const SET_TOTAL_USERS_COUNT = 'SN/USERS/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'SN/USERS/TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [] as Array<number>,  // array of users ids
  filter: {
    term: ''
  }
}

const usersReducer = (state = initialState, action: ActionsTypes): InitialState => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      }
    }

    case UNFOLLOW: {
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
      }
    }

    case SET_USERS: {
      return {
        ...state,
        users: [...action.users]
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching
      }
    }

    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }

    case SET_FILTER: {
      return {
        ...state,
        filter: action.payload
      }
    }

    default:
      return state;
  }
}

export const actions = {
  followSuccess: (userId: number) => {
    return {
      type: FOLLOW,
      userId
    } as const
  },
  
  unfollowSuccess: (userId: number) => (
    {
      type: UNFOLLOW,
      userId
    } as const
  ),
  
  setUsers: (users: Array<UserType>) => (
    {
      type: SET_USERS,
      users
    } as const
  ),
  
  setCurrentPage: (currentPage: number) => (
    {
      type: SET_CURRENT_PAGE,
      currentPage
    } as const
  ),

  setFilter: (term: string) => (
    {
      type: SET_FILTER,
      payload: { term }
    } as const
  ),
  
  setTotalUsersCount: (totalUsersCount: number) => (
    {
      type: SET_TOTAL_USERS_COUNT,
      totalUsersCount
    } as const
  ),
  
  toggleIsFetching: (isFetching: boolean) => (
    {
      type: TOGGLE_IS_FETCHING,
      isFetching
    } as const
  ),
  
  toggleFollowingProgress: (isFetching: boolean, userId: number) => (
    {
      type: TOGGLE_IS_FOLLOWING_PROGRESS,
      isFetching,
      userId
    } as const
  )
}

export const requestUsers = (
  page: number, 
  pageSize: number,
  term: string
): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))
    dispatch(actions.setFilter(term))
    let data = await usersAPI.getUsers(page, pageSize)
    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(data.items))
    dispatch(actions.setTotalUsersCount(data.totalCount))
  }
}

const _followUnfollowFlow = async (
  dispatch: DispatchType, 
  userId: number, 
  apiMethod: (userId: number) => Promise<APIResponseType>, 
  actionCreator: (userId: number) => ActionsTypes
) => {
  dispatch(actions.toggleFollowingProgress(true, userId))
  let response = await apiMethod(userId)
  if (response.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(actions.toggleFollowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(
      dispatch, 
      userId, 
      usersAPI.follow.bind(usersAPI), 
      actions.followSuccess
    )
  }
}

export const unfollow = (userId: number): ThunkType => {
  return async (dispatch) => {
    await _followUnfollowFlow(
      dispatch, 
      userId, 
      usersAPI.unfollow.bind(usersAPI), 
      actions.unfollowSuccess
    )
  }
}

export default usersReducer;

export type InitialState = typeof initialState
export type FilterType = typeof initialState.filter
type ActionsTypes = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes>