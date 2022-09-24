import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Content from "../Contents/Content";
import MoviesDetail from "../MoviesDetail/MoviesDetail";
import { useSelector } from 'react-redux'

function Home(props) {
  const { MovieDetail } = useSelector((state) => state.infoMovies);
  const [isShowMovieDetail, setIsShowMovieDetail] = useState(false);

  useEffect(() => {
    setIsShowMovieDetail(MovieDetail ? true : false);
  }, [MovieDetail]);

  return (
    <div>
      <Navbar />
      <Intro />
      <Content />
      <MoviesDetail movie={MovieDetail} showModal={isShowMovieDetail} />
    </div>
  )
}

export default Home;
