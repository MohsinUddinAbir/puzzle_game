module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'eslint:recommended'
    ],
    rules: {
        // 'no-console': 'off',
        // 'no-debugger': 'off',
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-unused-vars": 'off',
        "vue/no-unused-components": "off"
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}