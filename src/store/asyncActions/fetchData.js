import {addRepos, addUsers, setInitialStatus, setIsFetching, setTotalCount, setUsername} from "../reposReducer";
import axios from "axios";


export const fetchRepos = (username, perPage, pageOffset) => {
    return async function (dispatch) {
        dispatch(setIsFetching(true))
        const response = await axios.get(`https://api.github.com/users/${username}/repos?${new URLSearchParams({
                per_page: perPage,
                page: pageOffset
            })}`)
        dispatch(addRepos(response.data))
        console.log(response.data)

    }
}
//Заходит в бар скелет.
//- Пиво и швабру, пожалуйста
export const fetchUsers = (username) => {
    return async function (dispatch) {
        dispatch(setIsFetching(true))
            try {
                const response = await axios.get(`https://api.github.com/users/${username}`)
                dispatch(addUsers(response.data))
                dispatch(setTotalCount(response.data.public_repos))
                dispatch(setUsername(response.data.login))
                dispatch(setInitialStatus(2))
            } catch (e) {
                const msg = e;
                if (msg.message = "Request failed with status code 404")
                {
                    console.log('User not found')
                    dispatch(setInitialStatus(3))
                }
            }
    }
}