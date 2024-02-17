import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,
  },
  image: {
    width: 300,
    height: 300,
  },
  textAndTypesContainer: {
    flexDirection: 'row',
    gap: 21,
  },
  number: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8B8B8B',
    textAlign: 'left',
  },
  name: {
    fontSize: 24,
    fontWeight: '700',
    color: '#343434',
  },
  generalDetailsContainer: {
    flexDirection: 'column',
    borderRadius: 4,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '60%'
  },
  generalTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  generalText: {
    color: '#343434',
    fontWeight: '600',
    fontSize: 14,
  },
});
