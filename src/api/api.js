import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY": `c233b2ab-c911-4c2a-9ca2-f04cdde337db`
    }
});

const baseURL = `https://social-network.samuraijs.com/api/1.0/`
const baseApiKeyAuthUser = {
    withCredentials: true,
    headers: {
        "API-KEY": `c233b2ab-c911-4c2a-9ca2-f04cdde337db`
    }
}

// for UsersContainer
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(baseURL + `users?page=${currentPage}&count=${pageSize}`,
        {withCredentials: true}
    ).then(response => response.data);
};

// for headerContainer
export const authMe = () => {
    return axios.get(baseURL + `/auth/me`, {withCredentials: true}).then(response => response.data);
};

// for
export const unFollowUser = (id) => {
    return axios.delete(baseURL + `follow/${id}`, baseApiKeyAuthUser).then(response => response.data);
}


export const followUser = (id) => {
    return axios.post(baseURL + `follow/${id}`, null, baseApiKeyAuthUser)
        .then(response => response.data);
}
