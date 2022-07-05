module.exports = {
    env: {
        node: true,
    },
    extends: [
        'eslint:recommended',
        "plugin:vue/vue3-essential",
        "prettier",
		"@vue/prettier",
		"@vue/prettier/@typescript-eslint",
    ],
    rules: {
        // override/add rules settings here, such as:
        //"vue/no-unused-vars": "error",
    },
}
