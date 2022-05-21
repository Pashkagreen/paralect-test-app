import {addRepos, addUsers, setIsFetching, setTotalCount, setUsername} from "../reposReducer";
import axios from "axios";


export const fetchRepos = (username, perPage, pageOffset) => {
    return async function (dispatch) {
        dispatch(setIsFetching(true))
        const response = await axios.get( `https://api.github.com/users/${username}/repos?${new URLSearchParams({
            per_page: perPage,
            page: pageOffset
        })}`)
        dispatch(addRepos(response.data))
        console.log(response.data)
    }
}
export const fetchUsers = (username) => {
    return async function (dispatch) {
        const response = await axios.get(`https://api.github.com/users/${username}`)
        dispatch(addUsers(response.data))
        dispatch(setTotalCount(response.data.public_repos))
        dispatch(setUsername(response.data.login))
    }
}