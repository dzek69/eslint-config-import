# eslint-config-import

These are my preferred Import Plugin code style linting rules. You'll probably hate them.

If you plan to use TypeScript make sure to install `@dzek69/eslint-config-import-typescript` as well. It takes care
of disabling some base eslint rules.

## Idea behind these

No tricks, no magic, no useless code, no complicated code. Very opinionated. Rules that duplicates features of IDEs are
disabled.

## Installation

Installation steps assumes you've already configured base eslint config, ie: installed
[my base rules](https://github.com/dzek69/eslint-config-base).

```
npm i eslint-plugin-import @dzek69/eslint-config-import --save-dev
```

In your `.eslintrc` file add the rules in `extends` array:
```json
{
  "extends": [
    "@dzek69/eslint-config-import"
  ]
}
```

It will automatically define proper plugin.

Then to lint `src` and `test` directories with subdirectories run:
```
npx eslint src test --ext .ts,.tsx,.js,.jsx,.mjs
```

## Full config example

```json
{
    "extends": [
        "@dzek69/eslint-config-base",
        "@dzek69/eslint-config-import"
    ],
    "env": {
        "node": true
    },
    "parserOptions": {
        "sourceType": "module"
    }
}
```

## License

MIT
