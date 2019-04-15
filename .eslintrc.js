module.exports = {
    "env": {
        "browser": true,
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread":true,
            "modules":true
        },
        "ecmaVersion":6,
        "sourceType":"module",
    },
    "plugins": [
        "react"
    ],
    "globals": {
        "document": true,
        "localStorage": true,
        "window": true,
        "require": true
    },
    "rules": {
        "no-console":0,
        "indent": ["error", 2],
        "no-debugger": 1,
        "linebreak-style": [
            0,
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
            0,
            "error",
            {
                "vars": "all",
                "args": "after-used",
                "ignoreRestSiblings": false
            }
        ]
    }
};