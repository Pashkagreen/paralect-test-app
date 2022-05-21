import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import './SearchForm.scss'
import {fetchRepos, fetchUsers} from "../../store/asyncActions/fetchData";
import {setCurrentPage, setUsername} from "../../store/reposReducer";

const SearchForm = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector(state => state.repos.currentPage)
    const [value, setValue] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(setCurrentPage(1))
        dispatch(fetchRepos(value, 4, currentPage))
        dispatch(fetchUsers(value))
        setValue('')
    }

    return (
        <form className="search-form" onSubmit={submitHandler}>
            <input
                type='text'
                value={value}
                onChange={(e) => {setValue(e.target.value)}}
                required
                autoComplete="off"
                placeholder="Enter a github username"
            />
            <button onKeyPress={(e) => e.key === "Enter" && submitHandler}>
                <i className="fa fa-search" />
            </button>
        </form>
    );
};

export default SearchForm;