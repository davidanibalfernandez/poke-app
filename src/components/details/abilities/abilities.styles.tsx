import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: '#343434',
    textAlign: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});
