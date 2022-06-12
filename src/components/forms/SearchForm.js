import { useState } from 'react';
import {
  Box,
  Button,
  Center,
  FormControl,
  HStack,
  Icon,
  Input,
  Select,
  Text,
  VStack,
} from 'native-base';
import { Ionicons } from '@expo/vector-icons';

const SearchForm = (props) => {
  let [type, setType] = useState('movie');
  let [searchQuery, setSearchQuery] = useState('');
  let [errorStyle, setErrorStyle] = useState([]);
  let [errorMsg, setErrorMsg] = useState('');

  const { onSearchClick, emptyList } = props;

  const onSubmit = () => {
    if ('' === searchQuery) {
      setErrorStyle([{ borderColor: 'red', borderWidth: 1 }]);
      setErrorMsg('Movie/TV show name is required');
      emptyList();
    } else {
      setErrorStyle([]);
      setErrorMsg('');
      onSearchClick(searchQuery, type);
    }
  };

  return (
    <VStack space={2} width="100%" py={5}>
      <FormControl isRequired>
        <Center>
          <VStack>
            <Text pb={2}>Search Movie/TV Show Name*</Text>
            <Box style={errorStyle}>
              <Input
                placeholder="i.e. James Bond, CSI"
                variant="filled"
                bg="gray.200"
                px={3}
                width="100%"
                InputLeftElement={
                  <Icon
                    size={5}
                    ml={2}
                    color="gray.400"
                    as={<Ionicons name="ios-search" />}
                  />
                }
                onChangeText={(value) => {
                  setSearchQuery(value);
                  //setFormData({ ...formData, name: value });
                }}
              />
            </Box>
            <Text pt={2}>Choose Search Type*</Text>
            <HStack width="100%" space={2} pt={2}>
              <Select
                selectedValue={type}
                width={200}
                _selectedItem={{
                  bg: 'teal.600',
                }}
                mt={1}
                onValueChange={(itemValue) => setType(itemValue)}
              >
                <Select.Item label="Movie" value="movie" />
                <Select.Item label="Multi" value="multi" />
                <Select.Item label="TV" value="tv" />
              </Select>
              <Button
                width={'30%'}
                height={10}
                mt={3}
                onPress={onSubmit}
                startIcon={<Icon as={Ionicons} name="ios-search" />}
              >
                Search
              </Button>
            </HStack>
            <Text style={[{ color: 'red' }]}>{errorMsg}</Text>
          </VStack>
        </Center>
      </FormControl>
    </VStack>
  );
};

export default SearchForm;
