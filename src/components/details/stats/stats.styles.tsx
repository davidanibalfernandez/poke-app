import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 32,
    gap: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#343434',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#343434',
    textAlign: 'right',
  },
  labelContainer: {
    width: '20%',
    paddingRight: 8
  },
  valueContainer: {width: '80%'},
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    borderRadius: 4,
    textAlign: 'center',
  },
});
