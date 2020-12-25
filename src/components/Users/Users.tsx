import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { UserType } from '../../types/types';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

type PropsType = {
  totalUsersCount: number
  pageSize: number 
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  users: Array<UserType>
  portionSize?: number
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}

let Users: React.FC<PropsType> = (
  {
    currentPage,
    totalUsersCount,
    pageSize,
    onPageChanged,
    users,
    ...props
  }) => {
  return (
    <div>
      <UsersSearchForm />
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize} />
      <div>
        {
          users.map(u => {
            return (
              <User
                user={u}
                key={u.id}
                followingInProgress={props.followingInProgress}
                follow={props.follow}
                unfollow={props.unfollow} />
            );
          })
        }
      </div>
    </div>
  );
}

const usersSearchFormValidate = (values: any) => {
  const errors = {}
  return errors
}

type UsersSearcFormObjectType = {
  term: string
}

const UsersSearchForm: React.FC = () => {
  const submit = (
    values: UsersSearcFormObjectType, 
    {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}
  ) => {
  }

  return <div>
    <Formik
      initialValues={{ term: '' }}
      validate={usersSearchFormValidate}
      onSubmit={submit}
    >
      {({isSubmitting}) => (
        <Form>
          <Field type='text' name='term' />
          <button type='submit'  disabled={isSubmitting}>
            Find
          </button>
        </Form>
      )
      }
    </Formik>

  </div>
}

export default Users;