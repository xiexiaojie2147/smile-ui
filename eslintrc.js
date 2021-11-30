module.exports = {
    parser:"@typescript-eslint/parser",
    extends:[
        "plugin:@typescript-eslint/recommended",
        "react-app",
        "plugin:prettier/recommended",
        require.resolve('@umijs/fabric/dist/eslint')
    ],
    plugins:["@typescript-eslint","react"],
    rules:{},
};
