import {
  Box,
  Button,
  Center,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from 'native-base';
import { IMAGE_URL } from '../../config/api_config';

const CardView = (props) => {
  const { id, image, title, navigation, release_date, popularity, listType } =
    props;
  return (
    <Box borderRadius="md">
      <HStack borderBottomWidth={'0.5'} padding="3">
        <Box>
          {image ? (
            <Image
              alt={title}
              source={{ uri: IMAGE_URL + image }}
              height={'110'}
              width={'100'}
            />
          ) : (
            <Box height={'110'} width={'100'}></Box>
          )}
        </Box>
        <VStack pl={4}>
          <Heading size="xs" width={200}>
            {title}
          </Heading>
          <Text py={1}>Popularity: {popularity}</Text>
          <Text pb={1}>Release Date: {release_date}</Text>
          <Button
            variant="solid"
            width="100%"
            onPress={() =>
              navigation.navigate('Detail', {
                id,
                title,
                listType,
              })
            }
          >
            More Details
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export default CardView;
