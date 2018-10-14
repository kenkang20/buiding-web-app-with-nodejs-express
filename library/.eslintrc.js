module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "es6": true
    },
    "extends": [
        "plugin:import/errors",
        "plugin:import/warnings",
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "impliedStrict": true
        },
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
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
        "comma-dangle": 0
    }
};