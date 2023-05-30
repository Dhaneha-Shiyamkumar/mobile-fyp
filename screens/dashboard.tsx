/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Appbar,
  Banner,
  Button,
  Card,
  IconButton,
  Searchbar,
  Text,
  Title,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import {useGetCurrentUser} from '../hooks/auth/get-current-user';
import {Image} from 'react-native';

export const DashboardScreen = ({route, navigation}: any) => {
  const {userId} = route.params as {userId: string};
  const [searchQuery, setSearchQuery] = React.useState('');
  const user = useGetCurrentUser();
  const onChangeSearch = (val: string) => setSearchQuery(val);

  return (
    <>
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Text
            variant="headlineMedium"
            style={{
              fontWeight: 'bold',
            }}>
            {'Welcome Back!'}
          </Text>
        </Appbar.Header>

        <Searchbar
          placeholder="Search"
          style={{
            marginTop: 10,
            backgroundColor: '#FBFBFB',
            borderColor: '#E8F3F1',
            borderWidth: 2,
          }}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <IconButton
            icon="home"
            size={30}
            onPress={() => console.log('Pressed')}
            style={{flex: 1}}
          />
          <IconButton
            icon="medical-bag"
            size={30}
            onPress={() =>
              navigation.navigate('UploadImageComponent', {
                userId: userId,
              })
            }
            style={{flex: 1}}
          />
          <IconButton
            icon="account-child"
            size={30}
            onPress={() =>
              navigation.navigate('Home', {
                userId: userId,
              })
            }
            style={{flex: 1}}
          />
          <IconButton
            icon="account-settings"
            size={30}
            onPress={() =>
              navigation.navigate('Profile', {
                userId: userId,
              })
            }
            style={{flex: 1}}
          />
        </View>

        <Banner
          visible={true}
          elevation={0}
          style={{
            backgroundColor: '#E8F3F1',
            borderRadius: 20,
            marginTop: 30,
            paddingLeft: 10,
            paddingRight: 10,
            paddingBottom: 10,
          }}
          icon={() => (
            <Image
              source={{
                uri: 'https://i.ibb.co/RYg8K2K/doctor.png',
              }}
              style={{
                width: 100,
                height: 140,
              }}
            />
          )}
          actions={[
            {
              label: 'Learn more',
              onPress: () =>
                navigation.navigate('Reminder', {
                  userId: userId,
                }),
              textColor: '#FFFFFF',
              style: {
                borderWidth: 0,
                borderRadius: 30,
                backgroundColor: '#4318FF',
                marginTop: -30,
                paddingLeft: 3,
                paddingRight: 3,
                marginRight: 10,
              },
            },
          ]}>
          <Text
            variant="headlineSmall"
            style={{
              fontWeight: 'bold',
            }}>
            Set reminder for Vaccination
          </Text>
        </Banner>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#E8F3F1',
  },
  content: {
    flex: 1,
    paddingRight: 10,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
});
