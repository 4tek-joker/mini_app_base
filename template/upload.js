#!/usr/bin/env node

const fs = require('fs')
var axios = require('axios')
var FormData = require('form-data')
var data = new FormData()
const path_build_ios = './build/outputs/ios/remotes/'
const path_build_android = './build/outputs/android/remotes/'
const container_name = 'ProjectName.container.bundle'
const chunk_name = 'src_ProjectName_js.chunk.bundle'

let platform = 'ios'
let env = 'dev'
let version = 0
const appCode = '000'

if (appCode === '000') {
  console.error(
    'Error: Sai app code, Vui lòng đổi app code trong upload.js!)',
  )
  return
}

process.argv.forEach(function (val, index, array) {
  if (val === '-platform') {
    platform = array[index + 1]
  } else if (val === '--prod') {
    env = 'prod'
  } else if (val === '-version') {
    version = array[index + 1]
  }
})

if (version === 0) {
  console.error(
    'Error: Thiếu version code. Vui lòng thử lại!)',
  )
  return
}

const callApi = filePath => {
  const {
    REACT_APP_UPLOAD_URL,
    appName,
    containerName,
    app_module,
  } = {
    "REACT_APP_UPLOAD_URL": env === 'prod' ? "http://super-app-api.mooo.com/" : "http://super-app-api.mooo.com/",
    "appName": "ProjectName",
    "containerName": "ProjectName",
    "app_module": "./App",
}
  data.append('files', fs.createReadStream(`${filePath}${container_name}`))
  data.append('files', fs.createReadStream(`${filePath}${chunk_name}`))
  data.append('appCode', appCode)
  data.append('appName', appName)
  data.append('containerName', containerName)
  data.append('module', app_module)
  data.append('version', version)

  var config = {
    method: 'post',
    url: `${REACT_APP_UPLOAD_URL}api/mini-app/uploadFile`,
    headers: {
      'Content-Type': 'application/json',
      ...data.getHeaders(),
    },
    data: data,
  }

  console.log('Ứng dụng đang được đẩy lên store.......')
  axios(config)
    .then(function (response) {
      console.log('Ứng dụng đã được đẩy lên, vui lòng active app trên store.')
    })
    .catch(function (error) {
      if (error?.response) {
        console.error('Error: ', error?.response?.data)
      } else {
        console.error('Error: Vui lòng kiểm tra lại thông tin')
      }
    })
}

if (platform === 'ios') {
  try {
    if (
      fs.existsSync(`${path_build_ios}${container_name}`) &&
      fs.existsSync(`${path_build_ios}${chunk_name}`)
    ) {
      callApi(path_build_ios)
    } else {
      console.error(
        'Error: Không tìm thấy file ios bundle. Vui lòng build bundle ios( run "yarn build-ios" trước khi upload!)',
      )
    }
  } catch (err) {
    console.error(err)
  }
} else if (platform === 'android') {
  try {
    if (
      fs.existsSync(`${path_build_android}${container_name}`) &&
      fs.existsSync(`${path_build_android}${chunk_name}`)
    ) {
      callApi(path_build_android)
    } else {
      console.error(
        'Error: Không tìm thấy file android bundle. Vui lòng build bundle android( run "yarn build-android" trước khi upload!)',
      )
    }
  } catch (err) {
    console.error(err)
  }
}
