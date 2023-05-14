/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useUserChildrens} from '../hooks/users/use-children';
import {
  ActivityIndicator,
  MD2Colors,
  Avatar,
  Divider,
  List,
  Title,
  IconButton,
  Caption,
  Appbar,
} from 'react-native-paper';
import {UserChildren} from '../types/user-children';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';

export function HomeScreen({route, navigation}: any) {
  const {userId} = route.params as {userId: string};

  const {data, isLoading, refetch} = useUserChildrens(userId) as {
    data: UserChildren;
    isLoading: boolean;
    refetch: () => void;
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    const refetchData = async () => {
      refetch();
      setRefreshing(false);
    };

    setRefreshing(true);
    refetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Title style={styles.conversationsTitle}>Children Details</Title>
      </Appbar.Header>

      <ScrollView
        style={{height: '100%'}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {isLoading && (
          <ActivityIndicator animating={true} color={MD2Colors.red800} />
        )}

        <List.Section
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}>
          {data && (
            <>
              {data.map(child => (
                <>
                  <List.Item
                    key={child._id}
                    title={child.firstName + ' ' + child.lastName}
                    description={`Click here to view details about ${child.firstName}`}
                    left={() => (
                      <>
                        <Avatar.Text
                          size={40}
                          key={child._id}
                          label={child.firstName[0] + child.lastName[0]}
                        />
                      </>
                    )}
                    onPress={() =>
                      navigation.navigate('Details', {
                        child: child,
                      })
                    }
                  />
                  <Divider />
                </>
              ))}
            </>
          )}
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  conversations: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    elevation: 3,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    paddingLeft: 20,
  },
  header: {
    backgroundColor: '#fff',
    elevation: 3,
  },
  conversationsTitle: {
    color: '#000',
    fontWeight: 'bold',
  },
});
