import {StyleSheet} from 'react-native';

const gap = 8;

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    gap: 16
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
  inputGroupContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    gap: 9,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputFilterContainer: {
    flex: 1,
  },
  input: {
    width: '100%',
    padding: 8,
    fontSize: 12,
    fontWeight: '500',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 4,
    shadowColor: '#ECEEFF',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  filterInputButtonContainer: {
    padding: 8,
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: '#ECEEFF',
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 5,
  },
});
