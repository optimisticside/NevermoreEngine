# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.2.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@4.1.0...@quenty/rx@4.2.0) (2022-03-27)


### Features

* Add Rx.first() and Rx.delay() and fix a few bugs where we emit while no longer pending ([2445b97](https://github.com/Quenty/NevermoreEngine/commit/2445b97a8478590196fdfb5b8fd8121d81a0a5a8))





# [4.1.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@4.0.0...@quenty/rx@4.1.0) (2022-03-10)

**Note:** Version bump only for package @quenty/rx





# [4.0.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.8.0...@quenty/rx@4.0.0) (2022-03-06)


### Features

* Add Rx.throttleDefer() ([e0bdf7f](https://github.com/Quenty/NevermoreEngine/commit/e0bdf7f1220e66923fe275b323afd153d87f6351))





# [3.8.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.7.1...@quenty/rx@3.8.0) (2022-01-17)


### Features

* Add Rx.toPromise(observable, cancelToken) ([1237fb4](https://github.com/Quenty/NevermoreEngine/commit/1237fb4155bb9bcca94ffd5f618fcea60026f694))
* Add stack tracing to subscription if desired, and check pending state ([6cf8bc6](https://github.com/Quenty/NevermoreEngine/commit/6cf8bc6ab5916a0a2c237a2552fd9901dca1a756))





## [3.7.1](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.7.0...@quenty/rx@3.7.1) (2022-01-16)

**Note:** Version bump only for package @quenty/rx





# [3.7.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.6.0...@quenty/rx@3.7.0) (2022-01-07)

**Note:** Version bump only for package @quenty/rx





# [3.6.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.5.2...@quenty/rx@3.6.0) (2022-01-03)


### Bug Fixes

* Fix Rx typing in documentation and provide better error messages. Also... ([47f8d9a](https://github.com/Quenty/NevermoreEngine/commit/47f8d9a17f814b81d4cb239c78b3a7075280e2cc))





## [3.5.2](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.5.1...@quenty/rx@3.5.2) (2021-12-30)

**Note:** Version bump only for package @quenty/rx





## [3.5.1](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.5.0...@quenty/rx@3.5.1) (2021-12-30)

**Note:** Version bump only for package @quenty/rx





# [3.5.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.4.0...@quenty/rx@3.5.0) (2021-12-18)

**Note:** Version bump only for package @quenty/rx





# [3.4.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.3.0...@quenty/rx@3.4.0) (2021-12-14)

**Note:** Version bump only for package @quenty/rx





# [3.3.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.2.0...@quenty/rx@3.3.0) (2021-11-20)


### Bug Fixes

* Support MacOS syncing ([#225](https://github.com/Quenty/NevermoreEngine/issues/225)) ([03f9183](https://github.com/Quenty/NevermoreEngine/commit/03f918392c6a5bdd33f8a17c38de371d1e06c67a))





# [3.2.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.1.2...@quenty/rx@3.2.0) (2021-10-30)


### Features

* combineLatest may also combine none-observables which are treated as raw values (for now). ([9daebde](https://github.com/Quenty/NevermoreEngine/commit/9daebde70584cee5c0e71d1faa92b2d6249cf644))





## [3.1.2](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.1.1...@quenty/rx@3.1.2) (2021-10-30)

**Note:** Version bump only for package @quenty/rx





## [3.1.1](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.1.0...@quenty/rx@3.1.1) (2021-10-06)

**Note:** Version bump only for package @quenty/rx





# [3.1.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.0.1...@quenty/rx@3.1.0) (2021-10-02)

**Note:** Version bump only for package @quenty/rx





## [3.0.1](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@3.0.0...@quenty/rx@3.0.1) (2021-09-18)


### Bug Fixes

* Fix undeclare package dependencies that prevented loading in certain situations ([a8be7e0](https://github.com/Quenty/NevermoreEngine/commit/a8be7e06a06506a71257862429934e2ed0f6f56b))





# [3.0.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@2.1.0...@quenty/rx@3.0.0) (2021-09-11)

**Note:** Version bump only for package @quenty/rx





# [2.1.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@2.0.0...@quenty/rx@2.1.0) (2021-09-05)

**Note:** Version bump only for package @quenty/rx





# [2.0.0](https://github.com/Quenty/NevermoreEngine/compare/@quenty/rx@1.2.0...@quenty/rx@2.0.0) (2021-09-05)


### Bug Fixes

* Remove peer dependencies. This is because lerna doesn't really support peer dependencies being linked and getting a new version on build, which is unfortunate. ([5f5aeee](https://github.com/Quenty/NevermoreEngine/commit/5f5aeeea8de9975435309e53679f0ef7064f9dd0))





# 1.2.0 (2021-07-31)


### Bug Fixes

* Add CI and CD ([47513e9](https://github.com/Quenty/NevermoreEngine/commit/47513e9b568162707534af132396dd8756947dd3))
* Adjust CI badge to show automatic build and release state ([5a55d3f](https://github.com/Quenty/NevermoreEngine/commit/5a55d3f19bf8d66a760d67da9b56ed47fab74656))
* Fix selene linting ([45fc074](https://github.com/Quenty/NevermoreEngine/commit/45fc07489ee59127ac6582689f19a0e87c1e5b5a))



## 1.0.2 (2021-07-25)



## 1.0.1 (2021-07-25)



# 1.0.0 (2021-07-24)
