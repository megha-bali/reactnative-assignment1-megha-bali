import { Box, Center, Image, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { IMAGE_URL } from '../../config/api_config';
import { getMovieDetail } from '../../services/api';

const Detail = ({ navigation, route}) => {
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    loadDetails(route.params.id);
  }, []);

  const loadDetails = (type) => {
    getMovieDetail(type,route.params.listType).then(
      (result) => {
        setMovieDetail(result);
      },
      (error) => {
        alert('Error', `Something went wrong! ${error}`);
      }
    );
  };
  return (
    <>
      <Box width="100%">
        <Center py={10}>
          <Text
            fontSize={15}
            color="#333"
            width="80%"
            textAlign="center"
            fontWeight="bold"
          >
            {movieDetail.title}
          </Text>
          {movieDetail.poster_path ? (
            <Box mt={5}>
              <Image
                alt="Poster Img"
                source={{ uri: IMAGE_URL + movieDetail.poster_path }}
                height={'250'}
                width={'250'}
              />
            </Box>
          ) : (
            <Box height={'250'} width={'250'}>
              {'No Image'}
            </Box>
          )}
          <Box mt={5} ml={5} mr={5} padding={5}>
            <Text textAlign="justify">{movieDetail.overview || movieDetail.biography}</Text>
          </Box>
          <Box padding={2} textAlign="center">
            <Text fontSize={12} color="gray.600" fontWeight="bold">
              Popularity: {movieDetail.popularity} | Release Date:{' '}
              {movieDetail.release_date}
            </Text>
          </Box>
        </Center>
      </Box>
    </>
  );
};

export default Detail;
