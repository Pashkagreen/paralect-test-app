const InitialState = {
    repos: [],
    users: {},
    isFetching: true,
    totalCount: 0,
    username: '',
    currentPage: 1,
    initialStatus: 1,
}

const FETCH_REPOS = 'FETCH_REPOS'
const FETCH_USERS = 'FETCH_USERS'
const IS_FETCHING = 'IS_FETCHING'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const SET_USERNAME = 'SET_USERNAME'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_INITIAL_STATUS = 'SET_INITIAL_STATUS'
const CLEAR_REPOS = 'CLEAR_REPOS'

export const reposReducer = (state = InitialState, action) => {
    switch (action.type) {
        case FETCH_REPOS:
            return {...state, repos: action.payload, isFetching: false}
        case FETCH_USERS:
            return {users: action.payload, isFetching: false}
        case IS_FETCHING:
            return {...state, isFetching: action.payload}
        case SET_TOTAL_COUNT:
            return {...state, totalCount: action.payload}
        case SET_USERNAME:
            return {...state, username: action.payload}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload}
        case SET_INITIAL_STATUS:
            return {...state, initialStatus: action.payload}
        case CLEAR_REPOS:
            return {...state, repos: []}
        default:
            return state
    }
}
// Проходит как-то ирландец мимо паба

export const addRepos = (payload) => ({
    type: FETCH_REPOS,
    payload: payload
})
export const addUsers = (payload) => ({
    type: FETCH_USERS,
    payload: payload
})
export const setIsFetching = (bool) => ({
    type: IS_FETCHING,
    payload: bool
})
export const setUsername = (username) => ({
    type: SET_USERNAME,
    payload: username
})
export const setTotalCount = (totalCount) => ({
    type: SET_TOTAL_COUNT,
    payload: totalCount
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
})
export const setInitialStatus = (code) => ({
    type: SET_INITIAL_STATUS,
    payload: code
})
export const clearRepos = () => ({
    type: CLEAR_REPOS
})