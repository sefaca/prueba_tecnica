import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 9,
    marginBottom: 10,
  },
  container: {
    flex: 0,
    maxWidth: '49%',
    backgroundColor: '#5f316f',
    borderRadius: 8,
    paddingBottom: 8,
  },
  image: {
    width: '100%',
    height: 120,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fddd74',
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
    paddingLeft: 10,
    paddingRight: 10,
    color: '#f1f2e6',
  },
  author: {
    fontSize: 15,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#fbf8ff',
  },
});

export default styles;
