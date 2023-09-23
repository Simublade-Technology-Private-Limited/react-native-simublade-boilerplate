# Project

## Tech Stack

| Tech                                     | Version  |
| ---------------------------------------- | -------- |
| [React Native](https://reactnative.dev/) | ^0.72.2  |
| [Node](https://nodejs.org/)              | v18.16.0 |
| [yarn](https://yarnpkg.com/)             | 1.22.19  |

## Platform Supported

| Platform | Min Version | Max Version |
| -------- | ----------- | ----------- |
| iOS      | 12.0        | Latest      |
| Android  | API 23(5.0) | API 33(13)  |

## Installation

Install the dependencies and devDependencies.

```sh
cd Project/
yarn install
```

Please create a file named `.env` in root folder of project before executing any further commands.

## Scripts

Few of the commands/scripts that are configured for use in the Project's package.json have been added below. You can execute these commands as follows

```sh
yarn run <command/script>
```

## Project Structure
#### Out main folder here is the src folder

1. container -> Contains the AppContainer component and all other stack screens
2. navigation -> Contains navigation index file, bottom tab bar file, auth, unauth and other stack files
3. actions -> All the actions creators must be defined here
4. assets -> All fonts and images must be added to their respective folders
5. components -> All the reusable and standalone components must be defined here
6. lib -> Contains toast component, app input component etc
7. network -> All the network calls must be defined here
8. hooks -> All the custom hooks must be defined here
9. reducer -> All the reducer files must be defined here
10. store -> This container the main store file
11. utils -> Contains all the app utilities here
