
const React = require('react-native');

const { StyleSheet } = React;

export default{
  container: {
    backgroundColor: '#FBFAFA',
  },
  row: {
    borderColor: '#f1f1f1',
    borderBottomWidth: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 20,
    paddingBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    //backgroundColor: '#feb401',
    borderColor: '#feaf12',
    borderRadius: 25,
    borderWidth: 1,
    justifyContent: 'center',
    height: 100,
    width: 100,
  },
  info: {
    flex: 1,
    paddingLeft: 25,
    paddingRight: 25,
  },
  items: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  address: {
    color: '#ccc',
    fontSize: 14,
  },
  total: {
    width: 80,
  },
  date: {
    fontSize: 12,
    marginBottom: 5,
  },
  price: {
    color: '#1cad61',
    fontSize: 12,
    fontWeight: 'bold',
  },
};
