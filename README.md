<img src="App/Assets/Images/jenzy-logo-color.png" alt="Logo" width="300">

# Jenzy Frontend Coding Test

This exercise is designed to test your understanding of the major concepts of
real world JavaScript and GraphQL, and the patterns of React, React Native,
Redux, Redux-Sagas, and Apollo Client (GraphQL client).

This will test your ability to write components, map the redux store and
dispatch to the props of a component, use redux sagas, maintain immutability,
write and comprehend ES6, and implement a graphql client solution.

This exercise should take anywhere from 3 - 6 hours to complete the [requested tasks](#tasks).

## Architecture

The driving goal of the architecture of the boilerplate is separation of concerns. Namely:

- **Presentational components are separated from containers** (aka "screens").

    Presentational components are small components that are concerned with *how things look*. Containers usually define whole application screens and are concerned with *how things work*: they include presentational components and wire everything together.

    If you are interested you can [read more about it here](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

- **State is managed using global [Redux](https://redux.js.org/) stores**.

    When applications grow, sharing state and its changes can become very hard. Questions like "How can I access this data?" or "When did this change?" are common, just like passing data around components just to be able to use it in nested components.

    With Redux, state is shared using global *stores*, and changes are predictable: *actions* are applied by *reducers* to the state. While the pattern can be a bit much for small projects, the clear separation of responsibilities and predictability helps with bigger applications.

    If you are interested you can [read more about it here](https://redux.js.org/introduction/motivation).

- **Application side-effects (API calls, etc.) are separated from UI and state manipulation using [Redux Saga](https://redux-saga.js.org/)**.

    Using Redux Saga has two benefits: keeping application side-effects and related business logic out of UI components, as well as executing that logic in an asynchronous way without ending in callback hell.

    Sagas are triggered by Redux actions and can also trigger Redux actions to alter state. By using JavaScript generators (`yield`), sagas are written in a synchronous-like manner while still executing asynchronously.

## Content

The boilerplate contains:

- a [React Native](https://facebook.github.io/react-native/) (v**0.61.5**) application (in "[ejected](https://github.com/react-community/create-react-native-app/blob/master/EJECTING.md)" mode to allow using dependencies that rely on native code)
- a [clear directory layout](#directory-layout) to provide a base architecture for your application
- [Redux](https://redux.js.org/) (v4.0.1) to help manage state
- [Redux Persist](https://github.com/rt2zz/redux-persist) (v5.10.0) to persist the Redux state
- [Redux Sagas](https://redux-saga.js.org) (v1.0.2) to separate side-effects and logic from state and UI logic
- [React Navigation](https://reactnavigation.org/) (v3.11.2) with a [`NavigationService`](App/Services/NavigationService.js) to handle routing and navigation in the app, with a splash screen setup by default
- [reduxsauce](https://github.com/infinitered/reduxsauce) (v1.0.1) to facilitate using Redux
- [axios](https://github.com/axios/axios) to make API calls (v0.19.0)
- [prettier](https://prettier.io/) and [eslint](https://eslint.org/) preconfigured for React Native

The boilerplate includes an example (displaying fake user data) from UI components to the saga. The example is easy to remove so that it doesn't get in the way.

## Directory layout

- [`App/Components`](App/Components): presentational components
- [`App/Config`](App/Config): configuration of the application
- [`App/Containers`](App/Containers): container components, i.e. the application's screens
- [`App/Assets`](App/Assets): assets (image, audio files, ...) used by the application
- [`App/Navigators`](App/Navigators): react navigation navigators 
- [`App/Sagas`](App/Sagas): redux sagas
- [`App/Services`](App/Services): application services, e.g. API clients
- [`App/Stores`](App/Stores): redux [actions, reducers and stores](https://redux.js.org/basics)
- [`App/Theme`](App/Theme): base styles for the application

For more information on each directory, click the link and read the directory's README.

## Requirements

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies-3)
- for [iOS development](https://facebook.github.io/react-native/docs/getting-started.html#installing-dependencies)

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- create your [configuration file `App/Config/index.js`](App/Config) from `index.dev.js` (if you are in dev environment) and fill the missing values
- run the following steps for your platform

### Android

- only the first time you run the project, you need to generate a debug key with:
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Tasks

As an agile team, we're continously making changes to support a better user
experience for our customers. Let's imagine that the project manager was asked
to organize the team and deliver some must-have features within (1) business
day... and they've asked you to deliver them!

Make sure each task is completed in isolation (branch) and you will need to
submit a PR with a proper description and test cases for any QA reviewers.

The following tasks have been requested:

1. **Refactor and reorganize as needed to implement more modern react patterns, such as React Hooks.**
2. **Implement Apollo client** (use https://graphqlzero.almansi.me/ as the primary api source)
3. **Implement the following feature requests:**

    ***NOTE**: Designs are not available, so you’ll need to improvise. Feel free to
    use your favorite ui library and/or tools to aid with design elements if you
    should need*.

   1. User List: A screen with a list of users:
      - Create a toggle for the users list to be displayed as a table view or card view
      - Important info which needs to be visible for each user item/row:
        - Full Name
        - Email
        - Total amount of TODOs
   2. User Details: A screen to view a specific user:
      - Important info which needs to be visible:
        - Full Name
        - Email
        - Phone
        - Address (Street, City, Zip)
        - Company name
        - Total amount of TODOs, and then show the first 3 TODOs (Titles Only)
   3. A button on the main screen which navigates to the new Users list
4. **Fix the following known bugs:**
    1. The splash screen does not appear upon starting the app. Use whatever means necessary to force the splash screen to display for at least 3 seconds. The splash screen should be the Jenzy logo centered on the screen with a white background.
    2. Clicking the “Refresh” button causes the screen to flash each time it is clicked.
5. **PR Review**
   - Provide your full review for any outstanding pull requests (if there are
     none, skip this step)
6. **BONUS:**

    The project manager expects this to take you all day, but if you find yourself completing the above earlier than expected, there are a few outstanding tech debt items that would greatly improve the app:
    - Update all node packages to be the latest versions and fix any issues caused by the updates
    - Paginate the Users list (default to 5 users per page)
    - Make a “dark mode” (including the splash screen) which can be toggled and
      persisted upon app relaunch (some users have complained about bleeding
      eyes during late hours, and our insurance refuses to cover it!)
    - Write at least 1 unit test and 1 integration test

## Additional Credits

This project was originally created as a "React Native boilerplate" repository
from "TheCodingMachine" on github: [TheCodingMachine React Native
boilerplate](https://github.com/thecodingmachine/react-native-boilerplate).
We've modified it to fit our needs for the purpose of this test.
