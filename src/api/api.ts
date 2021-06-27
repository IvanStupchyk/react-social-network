import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '528fa1c0-cacc-47ff-ae93-32ce73ccde7f'
    }
})

type genericDataType = {
    id: number
    email: string
    login: string
}
type responseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get<responseType<genericDataType>>(`users?page=${currentPage}&count=${pageSize}`)
    },
    unFollowUser(userId: number) {
        return instance.delete<responseType<{}>>(`follow/${userId}`,)
    },
    followUser(userId: number) {
        return instance.post<responseType<genericDataType>>(`follow/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get<responseType<genericDataType>>('auth/me')
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<responseType<{userId: number}>>('auth/login', {email, password, rememberMe, captcha})
    },
    logout() {
        return instance.delete<responseType<{}>>('auth/login')
    }
}

export const profileAPI = {
    getProfileUser(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getUserStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateUserStatus(status: string) {
        return instance.put<responseType<{}>>('profile/status', {status})
    },
    savePhoto(image: File) {
        const formData = new FormData()
        formData.append('image', image)

        return instance.put<responseType<{photos: {small: string, large: string}}>>('/profile/photo', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile: ProfileType) {
        return instance.put<responseType<{}>>('profile', profile)
    }
}

export const securityAPI = {
    getCaptchaUrl() {
        return instance.get<{url: string}>('security/get-captcha-url')
    }
}

