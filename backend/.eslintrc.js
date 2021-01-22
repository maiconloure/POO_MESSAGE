module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  rules: {
    'space-before-function-paren': ['error', 'never'],
    '@ typescript-eslint / explicit-module-boundary-types': 'off'
  },
  overrides: [
    {
      // habilite a regra especificamente para arquivos TypeScript
      ' arquivos ': [' * .ts ', ' * .tsx '],
      ' rules ': {
        ' @ typescript-eslint / explicit-module-boundary-types ': [' error ']
      }
    }
  ]
}
