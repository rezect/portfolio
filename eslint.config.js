import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: ['dist'], // Игнорируем папку с собранными файлами
  },
  {
    extends: [js.configs.recommended], // Рекомендованные правила для JavaScript
    files: ['**/*.{js,jsx}'], // Проверяем JS и JSX файлы
    languageOptions: {
      ecmaVersion: 2020, // Используем возможности ECMAScript 2020
      globals: globals.browser, // Добавляем глобальные переменные браузера
    },
    plugins: {
      'react-hooks': reactHooks, // Подключаем плагин для React-хуков
      'react-refresh': reactRefresh, // Подключаем плагин для React Refresh
    },
    rules: {
      ...reactHooks.configs.recommended.rules, // Рекомендованные правила для хуков
      'react-refresh/only-export-components': [
        'warn', // Предупреждаем, если экспортируется что-то кроме компонентов
        { allowConstantExport: true },
      ],
    },
  },
];
