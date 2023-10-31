import { StyleSheet } from 'react-native';
import StackNavigator from './src/components/StackNavigator';
import { ModalPortal } from 'react-native-modals';
export default function App() {
  return (
    <>
      <StackNavigator />
      <ModalPortal />
    </>
  );
}

const styles = StyleSheet.create({

});
