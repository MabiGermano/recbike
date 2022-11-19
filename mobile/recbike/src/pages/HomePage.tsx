import {StyleSheet, View } from 'react-native';
import BottomMenu from '../components/BottomMenu';
import Topbar from '../components/Topbar';
import {MenuItem} from '../types/menu'


export default function HomePage() {
  return (
    <>
      <Topbar/>
      <View style={styles.container}>
        <BottomMenu active={MenuItem.Home}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
