import React from "react";
import {UsersType} from "./UsersContainer";
import s from "./users.module.scss"

export const Users = (props: UsersType) => {

    if (!props.users.length) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://stuki-druki.com/biofoto2/ivan-ivanovich-ipatko-01.jpg',
                    followed: false,
                    fullName: 'Ivan',
                    status: 'I\'m a boss',
                    location: {city: 'Brest', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://stuki-druki.com/biofoto2/ivan-ivanovich-ipatko-01.jpg',
                    followed: true,
                    fullName: 'Dima',
                    status: 'I\'m a boss too',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 3,
                    photoUrl: 'https://stuki-druki.com/biofoto2/ivan-ivanovich-ipatko-01.jpg',
                    followed: false,
                    fullName: 'Ira',
                    status: 'I\'m a boss too',
                    location: {city: 'Kiev', country: 'Ukraine'}
                }
            ]
        )
    }
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollowUser(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    props.followUser(u.id)
                                }}>follow</button>}
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
                </div>)
            }
        </div>
    )
}

