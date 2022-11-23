import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import Text from './Text';
import MapboxGL from '@rnmapbox/maps';


MapboxGL.setAccessToken(process.env.REACT_APP_MAPBOX_TOKEN);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});

const Main = () => {
    // <View style={styles.container}>
    //   <Text>Simple text</Text>
    //   <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
    //   <Text fontWeight="bold" fontSize="subheading">
    //     Bold subheading
    //   </Text>
    //   <Text color="textSecondary">Text with secondary color</Text>
    // </View>

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>


  );
};

export default Main;