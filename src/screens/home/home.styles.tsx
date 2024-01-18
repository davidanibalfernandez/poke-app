import {StyleSheet} from 'react-native';

const gap = 8;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    gap: 16,
  },
  flatListColumnWrapperStyle: {gap},
  flatListContentContainerStyle: {
    gap,
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  }, // affect most of the styles in a vertical way
  loaderSpinner: {
    marginTop: 20,
    marginBottom: 60,
  },
});
