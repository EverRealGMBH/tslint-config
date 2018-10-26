# TSLint EverReal Config

#### Example configs

```json
{
  "extends": ["tslint:latest", "tslint-react", "@everreal/tslint-config"],
  "rules": {}
}
```

#### With prettier:

```json
{
  "extends": [
    "tslint:latest",
    "tslint-react",
    "@everreal/tslint-config/index",
    "tslint-config-prettier",
    "tslint-plugin-prettier"
  ],
  "rules": {
    "prettier": true
  },
  "rulesDirectory": ["tslint-plugin-prettier"]
}
```
