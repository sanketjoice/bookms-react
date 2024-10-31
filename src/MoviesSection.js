import React, { useState, useEffect } from 'react';

function MoviesSection({ category, searchQuery }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const API_KEY = '8afbb6a3';

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        let query = searchQuery || 'popular';

        if (!searchQuery) {
            if (category === 'movie') {
              query = 'avengers';
            } else if (category === 'series') {
              query = 'breaking bad';
            } else if (category === 'event') {
              query = 'concert';
            }
          }

        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
        const data = await response.json();
        if (data.Response === 'True') {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [category, searchQuery]);

  return (
    <section className="p-4">
      <h2 className="text-2xl font-semibold mb-4">{category === 'movie' ? 'Movies' : category === 'series' ? 'Streaming' : 'Events'}</h2>
      {searchQuery ? `Search Results for "${searchQuery}"` : category === 'movie' ? 'Movies' : category === 'series' ? 'Streaming' : 'Events'}
      {loading && <p>Loading...</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID} className="p-2 border rounded-lg shadow-md">
              <img src={movie.Poster} alt={movie.Title} className="w-full h-40 object-cover rounded-md" />
              <h3 className="mt-2 font-medium">{movie.Title}</h3>
              <p className="text-sm text-gray-500">{movie.Year}</p>
            </div>
          ))
        ) : (
          !loading && <p>No movies found</p>
        )}
      </div>
    </section>
  );
}

export default MoviesSection;
