import React from "react";
import {UsersType} from "./UsersContainer";
import s from "./users.module.scss"
import axios from "axios"

export class UsersClass extends React.Component<UsersType, any> {
    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render(): React.ReactNode {
        return (
            <div>
                {
                    this.props.items.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={undefined} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollowUser(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.followUser(u.id)
                                }}>follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            {/*<div>{u.location.country}</div>*/}
                            {/*<div>{u.location.city}</div>*/}
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}


