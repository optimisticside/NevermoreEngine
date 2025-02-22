# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.2.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@4.1.0...@quenty/servicebag@4.2.0) (2022-03-27)

**Note:** Version bump only for package @quenty/servicebag





# [4.1.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@4.0.0...@quenty/servicebag@4.1.0) (2022-03-10)

**Note:** Version bump only for package @quenty/servicebag





# [4.0.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.5.0...@quenty/servicebag@4.0.0) (2022-03-06)


### Bug Fixes

* ServiceBag:HasService allows for serviceType definitions that are instances ([cf772a9](https://github.com/Quenty/NevermoreEngine/commit/cf772a9dfc17178dc90fb26c9e5a091f84d00a90))





# [3.5.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.4.0...@quenty/servicebag@3.5.0) (2022-01-17)


### Features

* Ensure services do not yield while initializing or starting ([f46f34e](https://github.com/Quenty/NevermoreEngine/commit/f46f34e56deecfa22b64eafeb7a3e965da2e6e8a))





# [3.4.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.3.0...@quenty/servicebag@3.4.0) (2022-01-07)

**Note:** Version bump only for package @quenty/servicebag





# [3.3.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.2.3...@quenty/servicebag@3.3.0) (2022-01-03)

**Note:** Version bump only for package @quenty/servicebag





## [3.2.3](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.2.2...@quenty/servicebag@3.2.3) (2021-12-30)

**Note:** Version bump only for package @quenty/servicebag





## [3.2.2](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.2.1...@quenty/servicebag@3.2.2) (2021-12-30)

**Note:** Version bump only for package @quenty/servicebag





## [3.2.1](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.2.0...@quenty/servicebag@3.2.1) (2021-12-04)


### Bug Fixes

* Better error messages ([80581dc](https://github.com/Quenty/NevermoreEngine/commit/80581dc1e7722459086e0888fc05fa596f557c11))





# [3.2.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.1.3...@quenty/servicebag@3.2.0) (2021-11-20)


### Bug Fixes

* Support MacOS syncing ([#225](https://github.com/Quenty/NevermoreEngine/issues/225)) ([03f9183](https://github.com/Quenty/NevermoreEngine/commit/03f918392c6a5bdd33f8a17c38de371d1e06c67a))





## [3.1.3](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.1.2...@quenty/servicebag@3.1.3) (2021-11-10)


### Bug Fixes

* Prevent double service initialization from occuring when retrieving service that has not yet been added to service bag ([e7d9915](https://github.com/Quenty/NevermoreEngine/commit/e7d99157a8d2de701cbe5261fd27b8eb2a30971f))





## [3.1.2](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.1.1...@quenty/servicebag@3.1.2) (2021-10-30)

**Note:** Version bump only for package @quenty/servicebag





## [3.1.1](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.1.0...@quenty/servicebag@3.1.1) (2021-10-06)


### Bug Fixes

* Enforce service retrieve returning correct memory address and initializing a separate table ([a4eaf0c](https://github.com/Quenty/NevermoreEngine/commit/a4eaf0ca6ff586a302b60cc8bda6255bc8217f42))





# [3.1.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.0.1...@quenty/servicebag@3.1.0) (2021-10-02)

**Note:** Version bump only for package @quenty/servicebag





## [3.0.1](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@3.0.0...@quenty/servicebag@3.0.1) (2021-09-18)

**Note:** Version bump only for package @quenty/servicebag





# [3.0.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@2.1.0...@quenty/servicebag@3.0.0) (2021-09-11)


### Features

* Service bags now now create a prototype and use that, instead of allowing global access ([40a8510](https://github.com/Quenty/NevermoreEngine/commit/40a85109e85d212355b3cfb1944d45bdac63202a))





# [2.1.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@2.0.0...@quenty/servicebag@2.1.0) (2021-09-05)

**Note:** Version bump only for package @quenty/servicebag





# [2.0.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/servicebag@1.0.0...@quenty/servicebag@2.0.0) (2021-09-05)


### Bug Fixes

* Remove peer dependencies. This is because lerna doesn't really support peer dependencies being linked and getting a new version on build, which is unfortunate. ([5f5aeee](https://github.com/Quenty/NevermoreEngine/commit/5f5aeeea8de9975435309e53679f0ef7064f9dd0))





# 1.0.0 (2021-08-06)


### Features

* Add servicebag package ([207601a](https://github.com/Quenty/NevermoreEngine/commit/207601a802fb0a26cedf752d485e28961bcadd76))





# v1.0.0 (Fri Aug 06 2021)

#### 🚀 Enhancement

- feat: Add servicebag package [#202](https://github.com/Quenty/NevermoreEngine/pull/202) ([@Quenty](https://github.com/Quenty))

#### Authors: 1

- James Onnen ([@Quenty](https://github.com/Quenty))
