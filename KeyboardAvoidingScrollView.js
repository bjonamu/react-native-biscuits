import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

export default ({ children }) => {
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={(Platform.OS === 'ios') ? 'padding' : null}
    >
      <ScrollView keyboardShouldPersistTaps='always'>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
