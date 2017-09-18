import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView } from 'react-native'

const KeyboardAvoidingScrollView = ({ children, keyboardDismissMode, keyboardShouldPersistTaps }) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={(Platform.OS === 'ios') ? 'padding' : null}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardDismissMode={keyboardDismissMode}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

KeyboardAvoidingScrollView.defaultprops = {
  keyboardDismissMode: 'none',
  keyboardShouldPersistTaps: 'always'
}

export default KeyboardAvoidingScrollView
