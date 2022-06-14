module.exports = {
	overrides: [
		{
			files: ['src/**/*.ts'],
			env: {
				es2021: true,
				node: true,
			},
			parser: '@typescript-eslint/parser',
			parserOptions: {
				ecmaVersion: 12,
				sourceType: 'module',
			},
			plugins: ['@typescript-eslint', 'sonarjs', 'node'],
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:sonarjs/recommended',
				'plugin:node/recommended',
				'prettier',
				'prettier/@typescript-eslint',
			],
			settings: {
				node: {
					resolvePaths: [__dirname],
					tryExtensions: ['.js', '.json', '.node', '.ts'],
				},
			},
			rules: {
				'sonarjs/no-small-switch': 'off',
				'@typescript-eslint/no-non-null-assertion': 'off',
				'node/no-missing-import': 'off',
				'node/no-extraneous-import': 'off',
				'node/no-unsupported-features/es-syntax': [
					'error',
					{ ignores: ['modules'] },
				],
			},
		},
	],
};
