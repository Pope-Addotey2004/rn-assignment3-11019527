import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView ,ScrollView, TextInput, Button, FlatList, SectionList, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Reuben Nii Addotey Addo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
  },
});
