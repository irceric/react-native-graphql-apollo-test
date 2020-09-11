import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
  },
  paginationContainer: {
    marginBottom: 20,
  },
  error: {
    ...Fonts.normal,
    color: Colors.error,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
    marginBottom: 24,
  },
})
