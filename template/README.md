# Project: ProjectName

### :file_folder: Environment

- Node v12: 18.6.0 or higher
- Yarn: 1.22.19 or higher
- React Native Cli: 2.0.1 or higher
- Java JDK: 1.8.0_291 or higher
- Open JDK: 11.0.15
- Open JDK Runtime Zulu11.56+19-CA
- Ruby: 2.7.5 or higher
- Cocoapods: 1.11.1 or higher
- XCode: 13.0.1 or higher
- Android Studio: version 2021

### :point_right: Getting Started and run

#### Start server

```
1. cd ProjectName
2. yarn && yarn pod
2. yarn start
```

#### Run debug ios

```
1. cd ProjectName
2. yarn ios
```

#### Run debug android

```
1. cd ProjectName
2. yarn android
```

### :rocket: Build an app bundle
#### From the command line:
1. Android
```
1. cd ProjectName
2. yarn build-android
```
The release bundle for your app is created at ProjectName/build/outputs/android/remotes/
File bundle upload to supper app are ProjectName.container.bundle and src_ProjectName_js.chunk.bundle

2. Ios
```
1. cd ProjectName
2. yarn build-ios
```
The release bundle for your app is created at ProjectName/build/outputs/ios/remotes/
File bundle upload to supper app are ProjectName.container.bundle and src_ProjectName_js.chunk.bundle

### :rocket: Config env upload app bundle to store

Check config in ProjectName/upload.js
Please change appCode before when upload app

### :rocket: Upload app bundle to store
#### From the command line:
1. Android dev
```
1. cd ProjectName
2. yarn upload -platform android -version 1
```
2. Android prod
```
1. cd ProjectName
2. yarn upload -platform android -version 1 --prod
```


3. Ios dev
```
1. cd ProjectName
2. yarn upload -platform ios -version 1
```
3. Ios prod
```
1. cd ProjectName
2. yarn upload -platform ios -version 1 --prod
```

IF upload file is error: /bin/sh: ./upload.js: Permission denied then run commanline: 

```
1. cd ProjectName
2. chmod +x ./upload.js
```
And reupload.