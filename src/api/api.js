import * as axios from "axios";

const BASE_URL = `https://social-network.samuraijs.com/api/1.0/`

const instance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "API-KEY": `c233b2ab-c911-4c2a-9ca2-f04cdde337db`
    }
});

//
// const baseApiKeyAuthUser = {
//     withCredentials: true,
//     headers: {
//         "API-KEY": `c233b2ab-c911-4c2a-9ca2-f04cdde337db`
//     }
// }

// for UsersContainer
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true}
    ).then(response => response.data);
};

// for headerContainer
export const authMe = () => {
    return instance.get(`/auth/me`, {withCredentials: true}).then(response => response.data);
};

// for
export const unFollowUser = (id) => {
    return instance.delete(`follow/${id}`).then(response => response.data);
}


export const followUser = (id) => {
    return instance.post(`follow/${id}`, null)
        .then(response => response.data);
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
            {withCredentials: true}
        ).then(response => response.data);
    },

    authMe() {
        return instance.get(`/auth/me`, {withCredentials: true}).then(response => response.data);
    },

    unFollowUser(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },

    followUser(id) {
        return instance.post(`follow/${id}`, null)
            .then(response => response.data);
    },
}

