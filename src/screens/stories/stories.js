import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StoriesCard} from './components';
import {fetchStories} from '../../utils/store/actions/actions';
import {Container} from '../../common/container';
import {BackArrow} from '../../../assets/svgs';
import {StoriesStyles as styles} from './style';

const Made = ({item}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () =>
    fetch(
      `https://hacker-news.firebaseio.com/v0/item/${item}.json?print=pretty`,
    )
      .then(response => response.json())
      .then(res => setData(res))
      .catch(error => error);

  return <StoriesCard title={data?.title} />;
};

export default function AllStories({navigation}) {
  const [index, setIndex] = useState(1);
  const dispatch = useDispatch();

  const {data, isFetching} = useSelector(state => state.storyReducer);

  useEffect(() => {
    dispatch(fetchStories());
  }, []);

  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            activeOpacity={0.7}>
            <BackArrow />
          </TouchableOpacity>
          <Text style={styles.storiesText}>Top stories</Text>
        </View>
        {isFetching ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={{flex: 1}}
            data={data?.slice(0, index * 10)}
            renderItem={({item}) => <Made item={item} />}
            onEndReached={() => setIndex(prev => prev++)}
            onEndReachedThreshold={0.7}
          />
        )}
      </View>
    </Container>
  );
}
