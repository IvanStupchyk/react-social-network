import React from "react";
import {UsersType} from "./UsersContainer";
import s from "./users.module.scss"
import axios from "axios"

// export const Users = (props: UsersType) => {
//     if (!props.items.length) {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//             props.setUsers(response.data.items)
//         })
//     }

    // return (
    //     <div>
    //         {
    //             props.users.map(u => <div key={u.id}>
    //                 <span>
    //                     <div>
    //                         <img src={u.photoUrl} className={s.userPhoto}/>
    //                     </div>
    //                     <div>
    //                         {u.followed
    //                             ? <button onClick={() => {
    //                                 props.unFollowUser(u.id)
    //                             }}>unfollow</button>
    //                             : <button onClick={() => {
    //                                 props.followUser(u.id)
    //                             }}>follow</button>}
    //                     </div>
    //                 </span>
    //                 <span>
    //                     <span>
    //                         <div>{u.fullName}</div>
    //                         <div>{u.status}</div>
    //                     </span>
    //                     <span>
    //                         <div>{u.location.country}</div>
    //                         <div>{u.location.city}</div>
    //                     </span>
    //                 </span>
    //             </div>)
    //         }
    //     </div>
    // )

//     return (
//         <div>
//             {
//                 props.items.map(u => <div key={u.id}>
//                     <span>
//                         <div>
//                             <img src={undefined} className={s.userPhoto}/>
//                         </div>
//                         <div>
//                             {u.followed
//                                 ? <button onClick={() => {
//                                     props.unFollowUser(u.id)
//                                 }}>unfollow</button>
//                                 : <button onClick={() => {
//                                     props.followUser(u.id)
//                                 }}>follow</button>}
//                         </div>
//                     </span>
//                     <span>
//                         <span>
//                             <div>{u.name}</div>
//                             <div>{u.status}</div>
//                         </span>
//                         <span>
//                             {/*<div>{u.location.country}</div>*/}
//                             {/*<div>{u.location.city}</div>*/}
//                         </span>
//                     </span>
//                 </div>)
//             }
//         </div>
//     )
// }

