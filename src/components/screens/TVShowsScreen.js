import { useEffect, useState } from 'react';
import { getTVShows } from '../../services/api';
import SelectForm from '../forms/SelectForm';
import ListView from '../lists/ListView';

const TVShowsScreen = ({ navigation }) => {
  let [tvShows, setTVShows] = useState([]);
  const selectOptions = [
    ['Airing Today', 'airing_today'],
    ['On The Air', 'on_the_air'],
    ['Popular', 'popular'],
    ['Top Rated', 'top_rated'],
  ];
  const listType = 'tv';

  useEffect(() => {
    onTypeChange('popular');
  }, []);

  const onTypeChange = (type) => {
    getTVShows(type).then(
      (result) => {
        setTVShows(result);
      },
      (error) => {
        alert('Error', `Something went wrong! ${error}`);
      }
    );
  };
  return (
    <>
      <SelectForm onTypeChange={onTypeChange} selectOptions={selectOptions} />
      <ListView list={tvShows} navigation={navigation} listType={listType} />
    </>
  );
};
export default TVShowsScreen;
