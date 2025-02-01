# React Native, Expo Template

## Getting Started
1. replace directory name with your app name
2. replace ``"_YOUR_APP_NAME_`` with your app name
```bash
yarn
npx expo start
```

## state managment
- redux + redux toolkit - https://redux-toolkit.js.org/
- redux persist - https://github.com/rt2zz/redux-persist

## navigation
- react navigation - https://reactnavigation.org/

## translations
- i18next - https://www.i18next.com/
- react i18next - https://react.i18next.com/
```js
const i18n = useTranslation();
...
i18n.t('navigation.mainNavigation.home'); // @/src/translations
```

## light/dark theme
- should be used with custom hook "useThemeColors"
```js
const COLORS = useThemeColors();
```
