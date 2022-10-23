module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["plugin:prettier/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": "error",
    },
    'prettier/prettier': [
        'error',
        {
            'endOfLine': 'auto',
        }
    ]
};
