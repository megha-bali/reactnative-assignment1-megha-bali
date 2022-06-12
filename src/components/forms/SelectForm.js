import { useState } from 'react';
import { Center, FormControl, Select, VStack } from 'native-base';

const SelectForm = (props) => {
  let [type, setType] = useState('popular');
  const { onTypeChange, selectOptions } = props;
  const changeType = (type) => {
    setType(type);
    onTypeChange(type);
  };

  return (
    <VStack space={2} width="100%" py={5}>
      <FormControl isRequired>
        <Center>
          <Select
            selectedValue={type}
            width="50%"
            _selectedItem={{
              bg: 'teal.600',
            }}
            mt={1}
            onValueChange={(itemValue) => changeType(itemValue)}
          >
            {selectOptions.map((a) => {
              return <Select.Item label={a[0]} value={a[1]} key={a[1]} />;
            })}
          </Select>
        </Center>
      </FormControl>
    </VStack>
  );
};

export default SelectForm;
