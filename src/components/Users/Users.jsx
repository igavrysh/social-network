import React from 'react';
import s from './users.module.css'

let Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: {
          city: 'Minsk',
          country: 'Belorus'
        },
        followed: true,
        photoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/964222183901491853/0877EE7EDB9F086E3442D39EBACAB06B93562566/'
      },
      {
        id: 2,
        fullName: 'Alex',
        status: 'I am a boss too',
        location: {
          city: 'Kyiv',
          country: 'Ukraine'
        },
        followed: false,
        photoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/964222183901491853/0877EE7EDB9F086E3442D39EBACAB06B93562566/'
      },
      {
        id: 3,
        fullName: 'Ievgen',
        status: 'I am SWE',
        location: {
          city: 'San Jose',
          country: 'USA'
        },
        followed: true,
        photoUrl: 'https://steamuserimages-a.akamaihd.net/ugc/964222183901491853/0877EE7EDB9F086E3442D39EBACAB06B93562566/'
      },
    ]
    );
  }

  return <div>
    {
      props.users.map(u => {
        return <div key={u.id}>
          <span>
            <div>
              <div className={s.userPhoto}>
                <img src={u.photoUrl} alt='' />
              </div>
            </div>
            <div>
              {
                u.followed
                  ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                  : <button onClick={() => { props.follow(u.id) }}>Follow</button>
              }

            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      })
    }
  </div>;
}

export default Users;