import { useEffect, useState } from 'react';
import { getMovies } from '../../services/api';
import SelectForm from '../forms/SelectForm';

import ListView from '../lists/ListView';

const selectOptions = [
  ['Popular', 'popular'],
  ['Now Playing', 'now_playing'],
  ['Top Rated', 'top_rated'],
  ['Upcoming', 'upcoming'],
];
const MovieScreen = ({ navigation }) => {
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    onTypeChange('popular');
  }, []);

  const onTypeChange = (type) => {
    getMovies(type).then(
      (result) => {
        setMovies(result);
      },
      (error) => {
        alert('Error', `Something went wrong! ${error}`);
      }
    );
  };
  return (
    <>
      <SelectForm onTypeChange={onTypeChange} selectOptions={selectOptions} />
      <ListView list={movies} navigation={navigation} />
    </>
  );
};
export default MovieScreen;
