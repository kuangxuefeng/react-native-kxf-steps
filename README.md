步骤条
# react-native-kxf-steps

## Getting started

`$ npm install react-native-kxf-steps --save`

### Mostly automatic installation

`$ react-native link react-native-kxf-steps`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-kxf-steps` and add `RNKxfSteps.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNKxfSteps.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.kxf.steps.RNKxfStepsPackage;` to the imports at the top of the file
  - Add `new RNKxfStepsPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-kxf-steps'
  	project(':react-native-kxf-steps').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-kxf-steps/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-kxf-steps')
  	```

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNKxfSteps.sln` in `node_modules/react-native-kxf-steps/windows/RNKxfSteps.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Kxf.Steps.RNKxfSteps;` to the usings at the top of the file
  - Add `new RNKxfStepsPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNKxfSteps from 'react-native-kxf-steps';

// TODO: What to do with the module?
RNKxfSteps;
```
  