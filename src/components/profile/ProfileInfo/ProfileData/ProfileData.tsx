import React from "react";
import {ProfileContactsType, ProfileType} from "../../../../redux/profile-reducer";
import s from "./ProfileData.module.scss";
import aboutMe from '../../../../images/icons/aboutMe.svg'
import skills from '../../../../images/icons/skills.svg'
import website from '../../../../images/icons/website.svg'
import facebook from '../../../../images/icons/facebook.svg'
import instagram from '../../../../images/icons/instagram.svg'
import youtube from '../../../../images/icons/youtube.svg'
import twitter from '../../../../images/icons/twitter.svg'
import gitHub from '../../../../images/icons/gitHub.svg'
import vk from '../../../../images/icons/vk.svg'
import mail from '../../../../images/icons/mail.svg'

type ProfileDataType = {
    profile: ProfileType,
}

export const ProfileData = ({profile}: ProfileDataType) => {
    const svgIcons = {
        'facebook': facebook,
        'website': website,
        'vk': vk,
        'twitter': twitter,
        'instagram': instagram,
        'youtube': youtube,
        'github': gitHub,
        'mainLink': mail
    }

    return (
        <div>
            <div className={s.topicUserInformation}>
                <p><b>Full name: </b>{profile.fullName}</p>
                <p><b>Looking for a job: </b>{profile.lookingForAJob ? 'yes' : 'no'}</p>
            </div>
            <div className={s.aboutMeContainer}>
                <div>
                    <img src={aboutMe} alt={'about me icon'}/>
                </div>
                <p>{profile.aboutMe}</p>
            </div>

            <div className={s.skillsContainer}>
                <div>
                    <img src={skills} alt={'skills icon'}/>
                </div>
                <p>{profile.lookingForAJobDescription}</p>
            </div>

            <div>
                {Object
                    .keys(profile.contacts)
                    .map(key => {
                        return <div key={key} className={s.socialLink}>
                            <div>
                                <img alt={'logo social network'} src={svgIcons[key as keyof ProfileContactsType]}/>
                            </div>
                            <a target={'_blank'} href={profile.contacts[key as keyof ProfileContactsType]}>
                                {profile.contacts[key as keyof ProfileContactsType]}
                            </a>
                        </div>
                    })}
            </div>
        </div>
    )
}