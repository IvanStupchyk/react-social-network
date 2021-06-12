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

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1) {
        return instance.get<UsersPageType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    unFollowUser(userId: number) {
        return instance.delete(`follow/${userId}`,)
            .then(response => response.data)
    },

    followUser(userId: number) {
        return instance.post(`follow/${userId}`,)
            .then(response => response.data)
    }
}

type loginType = {
    resultCode: number
    messages: Array<string>
    data: {
        userId: number
    }
}

export const authAPI = {
    me() {
        return instance.get<getAuthUserType>('auth/me')
            .then(response => response.data)
    },

    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post<loginType>('auth/login', {email, password, rememberMe})
    }
    ,

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

