# [Expo] Getting started with Expo

# Install Expo

```
npm install -g expo-cli
```

# Create the project

```
expo init AwesomeProject
```

# Run project

`cd AwesomeProject`
`npm start`

# setting up Prettier + ESLint = ❤️

**Getting started with Eslint and prettierrc.js**

**_Install Eslint_**

```
yarn add eslint @react-native-community/eslint-config --dev

```

**configuration file create .eslintrc.js**

```
// .eslintrc.js

module.exports = {
  root: true,
  extends: '@react-native-community',
};
```

**create .prettierrc.js**

```
// .prettierrc.js

module.exports = {
  bracketSpacing: true,
  singleQuote: true,
  trailingComma: 'all',
};
```

**Open the package.json in your project and add the following under the scripts section**

```
"lint": "eslint ."
```

_Now you can run npm run lint or yarn lint in your terminal and the linter will report both eslint and prettier issues._

**axios library for data fetch**

```
yarn add axios
```
