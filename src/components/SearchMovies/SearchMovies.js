import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useViewport } from "../hooks/useViewport";
import { useLocation } from 'react-router-dom'
import { getSeachMovies, setMovieDetails } from "../store/actions"

const useQuery = () => new URLSearchParams(useLocation().search)

function SearchMovies(props) {
    const [windowWidth] = useViewport();
    const dispatch = useDispatch();
    const { SearchMovies } = useSelector(state => state.infoMovies);
    const keyword = useQuery().get('keywords');

    useEffect(() => {
        if (keyword) {
            dispatch(getSeachMovies(keyword));
        }
    }, [keyword, dispatch])


    return (
        <SearchPane>
            {
                SearchMovies && SearchMovies.length > 0 ? (
                    <div
                        className="searchContent"
                        style={{
                            gridTemplateColumns: `repeat(${windowWidth.width > 1200
                                ? 5 :
                                windowWidth.width > 992
                                    ? 4
                                    : windowWidth.width > 768
                                        ? 3
                                        : windowWidth.width > 600 ? 2 : 1
                                }, auto)`,
                        }}
                    >
                        {
                            SearchMovies.map((movie, index) => {
                                if (movie.backdrop_path !== null && movie.media_type !== 'person ') {
                                    const imageUrl = `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                                    return (
                                        <div
                                            className="movieItem"
                                            key={index}
                                            onClick={() => dispatch(setMovieDetails(movie))}
                                        >
                                            <img src={imageUrl} alt=""></img>
                                            <span>{movie.title || movie.name}</span>
                                        </div>
                                    )
                                }
                            })
                        }

                    </div>
                ) : (
                    <NotFound>
                        <h1>khong tim thay</h1>
                    </NotFound>
                )
            }
        </SearchPane >
    );
}

export default SearchMovies;

const SearchPane = styled.div`
    padding-top: 80px;

    width: 100%
    min-height: 9xvh;

    background: black;
    transition: all 0.3 linear;

    .searchContent {
        padding: 40px 60px;

        display: grid;
        gap: 8px;

        &:hover .movieItem {
            opacity: 0.7;
        }

        .movieItem {
            position: relative;
            margin: 20px 0;

            max-width: 400px;
            width: 100%;
            heigh: 200px;
            
            border-radius: 12px;
            overflow: hiden;
            transform: scale(1);
            transition: all 0.3s linear;

            &:hover {
                transform: scale(1.2);
                z-index: 10;
                opacity: 1;
            }

            img {
                width: 100%;
                heigh: 100%;

                object-fit: cover;
            }

            span {
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                padding: 4px;
                text-align: center;

                color: white;
                background: rgba(0, 0, 0, 0.5);

                font-weight: bold;
            }

        }
    }
`

const NotFound = styled.div`
    padding: 5rem 8rem;
    color: white;
`