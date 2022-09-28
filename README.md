# pc-utelio

## Publishing by lerna guide
1. Init lerna by  `npx lerna@latest init`
2. Define your workspace by
```js
  "workspaces": [
    "packages/*"
  ]
```
3. Add you modules in `packages` dir
4. Shouldn't be public
``` js
  "publishConfig": {
    "access": "public"
  }
  "private": false,
  ```
  5. Add this field too
  ```js
    "repository": {
        "type": "git",
        "url": "git://github.com/papun-bharatpe/pc-utelio",
        "directory": "packages/CommonUtils"
  },
  ```
  6. Having a license ie good
  7. If pkg name is like this `@pcutils/something` then you should've a organization named `pcutils`
  8. Don't ignore `pkg-lock` file
  9. We can't publish a single module with `learna` [link](https://github.com/lerna/lerna/issues/1055),  for that have to use `npm publish`


