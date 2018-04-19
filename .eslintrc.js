module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            2,
            4,
            {
                'SwitchCase': 1
            }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": "off",
        "comma-spacing": [
            2,
            {
                "before": false,
                "after": true
            }
        ],
        "no-unused-vars": 0,
        "no-fallthrough": 0,
        "arrow-body-style": 2
    }
};