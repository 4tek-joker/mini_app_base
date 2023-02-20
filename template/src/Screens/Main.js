import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native'
import { AppText } from 'react-native-super-app-sdk'

function Main() {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar />
      <View style={styles.container}>
        <AppText style={styles.wellcomeTxt}>Wellcome mini app</AppText>
      </View>
    </SafeAreaView>
  )
}

export default React.memo(Main)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  wellcomeTxt: {
    fontSize: 24,
    color: 'black',
  },
})
