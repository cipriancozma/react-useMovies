import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import NumResults from "./components/NumResults";
import { tempMovieData, tempWatchedData } from "./data";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Box from "./components/Box";
import MovieList from "./components/MovieList";
import Summary from "./components/Summary";
import WatchedList from "./components/WatchedList";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Navbar>
        <Logo title={"useMovies"} role={"🔝"} />
        <Search />
        <NumResults movies={movies} />
      </Navbar>
      <Main>
        <Box>
          <MovieList movies={movies} />
        </Box>
        <Box>
          <Summary watched={watched} />
          <WatchedList watched={watched} />
        </Box>
      </Main>
    </>
  );
}
