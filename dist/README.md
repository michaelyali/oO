<div align="center">
  <strong>Async/await</strong> wrapper with error handling, retry and error override
</div>

<div align="center">
  <a href="https://travis-ci.org/zMotivat0r/oO.svg?branch=master">
    <img src="https://img.shields.io/travis/zMotivat0r/oO/master.svg?style=flat-square"
      alt="Build Status" />
  </a>
  <a href="https://codecov.io/github/zMotivat0r/oO">
    <img src="https://img.shields.io/coveralls/github/zMotivat0r/oO.svg?style=flat-square"
      alt="Test Coverage" />
  </a>
</div>
<div align="center">
  <sub>Heavily inspired by <a href="https://github.com/scopsy/await-to-js">await-to-js</a></sub>
</div>
<div align="center">
  <img src="https://github.com/zMotivat0r/oO/raw/master/img/example4.png" alt="Example" />
</div>

## :rocket: Install

```shell
npm i @zmotivat0r/o0
```

## :eyeglasses: Usage

```typescript
import { oO } from '@zmotivat0r/o0';

async function do() {
  const [err, user] = await oO(findUser(1));

  const [, projects] = await oO(findProjects(1), {
    retry: 5,
  });

  const [customError] = await oO(doStuff(), {
    err: new SomeCustomError('(>_<)'),
  });
}
```

## :hammer: Test

```shell
npm test
```
