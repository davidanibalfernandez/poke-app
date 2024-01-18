import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalBody: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  modalFooter: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalColumns: {
    flexDirection: 'column',
    width: '50%',
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
