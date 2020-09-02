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
  instructions: {
    ...Fonts.normal,
    fontStyle: 'italic',
    marginBottom: Metrics.tiny,
    textAlign: 'center',
    marginBottom: 48,
  },
  logoContainer: {
    ...Helpers.fullWidth,
    height: 300,
  },
  resultContainer: {
    ...Fonts.normal,
    textAlign: 'center',
    marginBottom: 24,
  },
  result: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
  },
  text: {
    ...Fonts.normal,
    marginBottom: Metrics.tiny,
    textAlign: 'center',
    marginBottom: 24,
  },
})
