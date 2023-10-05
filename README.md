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

| Folder     | Description                                                                             |
| ---------- | --------------------------------------------------------------------------------------- |
| assets     | All fonts and images must be added to their respective folders                          |
| container  | Contains AppContainer component and all other stack screens                             |
| navigation | Contains navigation index file, bottom tab bar file, auth, unauth and other stack files |
| components | All the reusable and standalone components must be defined here                         |
| actions    | All the action creators must be defined here                                            |
| reducer    | All the reducer files must be defined here                                              |
| store      | This contains the main store file                                                       |
| lib        | Contains toast component, app input component etc                                       |
| network    | All the network calls must be defined here                                              |
| hooks      | All the custom hooks must be defined here                                               |
| utils      | Contains all the app utilities here                                                     |
