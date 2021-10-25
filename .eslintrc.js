module.exports = {
    root: true,
    env: {
        node: false
    },
    'extends': [
        'eslint:recommended'
    ],
    rules: {
        'no-console': 'off',
        'no-debugger': 'off',
        "no-unused-vars": 'off',
        "no-mixed-spaces-and-tabs": 0,
        "vue/no-unused-components": "off"
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}