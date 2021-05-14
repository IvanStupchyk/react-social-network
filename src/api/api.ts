import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '009c5b05-7a99-4352-85bf-34bf098f4eaf'
    }
})

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 1)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
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

export const authAPI = {
    getAuthUser() {
        return instance.get('auth/me')
            .then(response => response.data)
    }
}

export const profileAPI = {
    getProfileUser(userId: string) {
        return instance.get(`profile/${userId}`)
    }
}
