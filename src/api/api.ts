import axios from "axios";
import {UsersPageType} from "../redux/users-reducer";
import {ProfileType} from "../redux/profile-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '528fa1c0-cacc-47ff-ae93-32ce73ccde7f'
    }
})

type getAuthUserType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: number
    messages: Array<string>
}
type responseType<D> = {
    resultCode: number
    messages: Array<string>
    data: D
}

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get<UsersPageType>(`users?page=${currentPage}&count=${pageSize}`)
    },

    unFollowUser(userId: number) {
        return instance.delete<responseType<{}>>(`follow/${userId}`,)
    },

    followUser(userId: number) {
        return instance.post<responseType<{id: number, email: string, login: string}>>(`follow/${userId}`)
    }
}

export const authAPI = {
    me() {
        return instance.get<getAuthUserType>('auth/me')
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<responseType<{userId: number}>>('auth/login', {email, password, rememberMe})
    },

    logout() {
        return instance.delete('auth/login')
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
        return instance.put('profile/status', {status})
    }
}

