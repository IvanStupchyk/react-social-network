import React from 'react';
import s from './ProfileInfo.module.scss';

export const ProfileInfo = () => {
    return (
        <div className={s.profile_information_container}>
            <div className={s.ava_container}>
                <img src='https://lapki.pet/uploads/article/55/soderzhanie-mopsa.jpg'></img>
            </div>

            <div>
                <p className={s.user_name}>Ivan Stupchuk</p>
                <p className={s.user_information}>Data of Birth: 7 october</p>
                <p className={s.user_information}>City: Brest</p>
                <p className={s.user_information}>Education: GGTU'15</p>
                <p className={s.user_information}>Web Site: -</p>
            </div>
        </div>
    )
}
