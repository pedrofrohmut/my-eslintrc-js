{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react"],
  "rules": {
    "space-in-parens": [ 0, "always" ],
    "semi": [0, "never"],
    "quotes":  ["error", "double", { "avoidEscape": true }],
    "indent": ["error", 2],
    "no-multiple-empty-lines": [ 1, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],
    "no-use-before-define": [ "error", { "functions": false } ],
    "class-methods-use-this": [ 1 ],
    "no-param-reassign": [ 1 ],
    "no-shadow": [ 1 ],
    "camelcase": [ 1 ],
    "no-underscore-dangle" : [0, "always"],

    "react/jsx-indent": [ "error", 2 ], 
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-curly-spacing": [1, {"when": "always"}]
  }
}
