import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import { SupperSdk } from 'react-native-super-app-sdk'

import Main from './Screens/Main'

/**
 * Mini app configuration.
 * You can develop mini app in ./Screens/Main.
 */
const ProjectName = forwardRef(({ dataSupper }, ref) => {
  useImperativeHandle(ref, () => ({
    // Do not edit
    getData: () => {
      return 'Mini app data'
    },
  }))
  useEffect(() => {
    SupperSdk.init(dataSupper, data => {
      //handle after link with supper app
    })
    return () => {
      SupperSdk.destroy()
    }
  }, [dataSupper])
  return <Main />
})

export default ProjectName
