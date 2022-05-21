import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner/Spinner";
import {createPages} from "../../utils/pagesCreator";
import {setCurrentPage} from "../../store/reposReducer";
import {fetchRepos} from "../../store/asyncActions/fetchData";

const UserRepos = () => {
    const dispatch = useDispatch();
    const perPage = 4;
    const isFetching = useSelector(state => state.repos.isFetching)
    const totalCount = useSelector(state => state.repos.totalCount)
    const username = useSelector(state => state.repos.username)
    const currentPage = useSelector(state => state.repos.currentPage)
    const repos = useSelector(state => state.repos.repos)
    const pagesCount = Math.ceil(totalCount/perPage)
    const pages = []
    createPages(pages, pagesCount, currentPage)

    useEffect(() => {
        dispatch(fetchRepos(username, perPage, currentPage))
    }, [currentPage])


    return (
        <div className='user-repos'>
            <h1>Repositories ({totalCount})</h1>
            {   isFetching === false ?
                <div className='repos-list'>
                    {repos.map((item) =>
                        <div className="repo-list-item" key={item.id}>
                            <a href={item.html_url} target='_blank' className="repo-name">{item.name}</a>
                            <p className='repo-descr'>{item.description}</p>
                        </div>
                    )}
                </div> : <Spinner/>
            }

            <div className="pages">
                {pages.map((page, index) => <span
                    key={index}
                    className={currentPage == page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
            </div>
        </div>
    );
};

export default UserRepos;