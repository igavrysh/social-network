import { follow } from './users-reducer'
import { usersAPI } from '../api/users-api'
import { APIResponseType, ResultCodesEnum } from "../api/api"

jest.mock('../api/users-api')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>
const dispatchMock = jest.fn();
const getStateMock = jest.fn();

const result: APIResponseType = {
  resultCode: ResultCodesEnum.Success,
  messages: [],
  data: {}
}

beforeEach(() => {
  userAPIMock.follow.mockClear();
})

// @ts-ignore
userAPIMock.follow.mockReturnValue(Promise.resolve(result))

test('success follow thunk', async () => {
  const thunk = follow(1);


  // @ts-ignore
  await thunk(dispatchMock, getStateMock, {})

  expect(dispatchMock).toBeCalledTimes(3)
  
}) 