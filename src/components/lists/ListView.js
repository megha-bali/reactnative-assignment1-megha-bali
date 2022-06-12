import { FlatList } from 'native-base';
import CardView from '../listitems/CardView';

const ListView = (props) => {
  const { list, navigation, listType } = props;

  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <CardView
          id={item.id}
          image={item.poster_path}
          title={item.title || item.name}
          navigation={navigation}
          release_date={item.release_date}
          popularity={item.popularity}
          listType={listType}
        />
      )}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};
export default ListView;
