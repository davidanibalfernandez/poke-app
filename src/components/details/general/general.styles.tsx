import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  badgeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8,
  },
  image: {
    width: 200,
    height: 200,
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
  flavorText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#8B8B8B',
  },
  generalDetailsContainer: {
    flexDirection: 'column',
    borderRadius: 4,
    backgroundColor: '#F3F3F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '60%',
    marginTop: 16,
    marginBottom: 40,
  },
  generalTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  generalText: {
    color: '#343434',
    fontWeight: '600',
    fontSize: 14,
  },
});
