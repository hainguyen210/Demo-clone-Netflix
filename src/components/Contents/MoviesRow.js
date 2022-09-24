import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { useRef } from "react";
import { SmoothHorizontalScrolling } from '../../../src/utils/index'
import { useViewport } from "../hooks/useViewport";
import { useDispatch } from "react-redux";
import { setMovieDetails } from "../store/actions";


function MoviesRow(props) {
    const { movies, title } = props;
    const moviesRef = useRef();
    const itemRef = useRef();
    const [windowWidth] = useViewport();

    const dispatch = useDispatch();
    const handleSetMovie = (movie) => {
        dispatch(setMovieDetails(movie));
    }

    const handleScrollRight = () => {
        const maxScrollLeft = moviesRef.current.scrollWidth - moviesRef.current.clientWidth;
        if (moviesRef.current.scrollLeft < maxScrollLeft) {
            SmoothHorizontalScrolling(moviesRef.current,
                250,
                itemRef.current.clientWidth * 2,
                moviesRef.current.scrollLeft)
        }
    }

    const handleScrollLeft = () => {
        if (moviesRef.current.scrollLeft > 0) {
            SmoothHorizontalScrolling(moviesRef.current,
                250,
                -itemRef.current.clientWidth * 2,
                moviesRef.current.scrollLeft)
        }
    }

    return (
        <MoviesRowContainer>
            <h1 className="heading">{title}</h1>
            <MoviesSlider
                ref={moviesRef}
                style={movies && movies.length > 0
                    ? {
                        gridTemplateColumns: `repeat(${movies.length}, ${
                          windowWidth.width > 1200
                            ? "360px"
                            : windowWidth.width > 992
                            ? "300px"
                            : windowWidth.width > 768
                            ? "250px"
                            : "200px"
                        })`,
                      }
                    : {}}
            >
                {movies && movies.length > 0 && movies.map((movie, index) => {
                    let imageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    return (
                    <div 
                    key={index} 
                    className="movieItem" 
                    ref={itemRef}
                    onClick={() => handleSetMovie(movie)}>
                        <img src={imageUrl} alt="" />
                        <div className="movieName">{movie.title || movie.name}</div>
                    </div>)
                    })
                }
            </MoviesSlider>
            <div className="btnLeft" onClick={handleScrollLeft}>
                <FiChevronLeft />
            </div>
            <div className="btnRight" onClick={handleScrollRight}>
                <FiChevronRight />
            </div>
        </MoviesRowContainer>
    )
}

export default MoviesRow;

const MoviesRowContainer = styled.div`
    background-color: black;
    color: white;
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;

    .heading {
        font-size: 18px;
        user-select: none;
    }

    .btnLeft {
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
    }

    .btnRight {
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);

        &:hover {
            background-color: rgba(0, 0, 0, 0.8);
        }

        &:hover svg {
            opacity: 1;
            transform: scale(1.2);
        }

        svg {
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
    }
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;

    &:hover .movieItem {
        opacity: 0.5;
    }

    .movieItem {
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s ease-out;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;

        &:hover {
        opacity: 1;
        transform: scale(1.1);
        z-index: 10;
        // -webkit-filter: brightness(1) !important;
        // filter: brightness(1) !important;
        }
        img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }
        .movieName {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 4px;
        background-color: rgba(0, 0, 0, 0.65);
        text-align: center;
        font-size: 14px;
        }
    }
`;