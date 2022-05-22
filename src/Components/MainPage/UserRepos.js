import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../Spinner/Spinner";
import {createPages} from "../../utils/pagesCreator";
import {setCurrentPage} from "../../store/reposReducer";
import {fetchRepos} from "../../store/asyncActions/fetchData";
import EmptyRepo from "../EmptyRepo/EmptyRepo";

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
            { repos?.length === 0 ?  <EmptyRepo/> :
                <>
                    <h1>Repositories ({totalCount})</h1>
                    {isFetching === false ?
                        <div className='repos-list'>
                            {repos?.map((item) =>
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
                            className={currentPage === page ? "current-page" : "page"}
                            onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
                    </div>
                </>
            }
        </div>

    );
};
//Однажды Уинстон Черчилль собирался на радио для выступления перед народом.
// Заказал такси, уже перед зданием радио спрашивает у таксиста, может ли тот подождать его полчаса, чтобы ехать обратно.
// Таксист не узнав Черчилля, говорит, что не может подождать, так как сегодня выступает Черчилль и он торопится домой, чтобы послушать его речь.
// Такое понравилось Черчиллю и он оплатил за проезд гораздо больше чем было договорено.
// Таксист посмотрел на эти большие деньги, а потом на самого Черчилля и говорит:
// .
// .
// — Да шел бы он нахуй со своей речью, я лучше вас подожду.

export default UserRepos;