import React, {useState} from "react";
import Navbar from "./Navbar";
import CategoryBar from './CategoryBar';
import MoviesSection from './MoviesSection';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('movie');

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <CategoryBar setCategory={setCategory} />
      <MoviesSection category={category} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
