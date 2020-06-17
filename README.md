# LAB - Class 17:  TCP Server / Message Application
### Author: Reham Omar AL-Sobh

The Transmission Control Protocol (TCP) is widely used by application layer protocols in the Internet Protocol Suite. TCP creates a two way communication between two hosts and provides reliable, ordered, and error checked byte streams between the applications.

In this class, we will be building a multiple-server event driven system, using TCP as our communication layer.

 ## Links and Resources

 - [submission PR/lab-17 ](https://github.com/Reham-401-advanced-javascript/caps/pull/2)
 - [ci/cd ](https://github.com/Reham-401-advanced-javascript/caps/pull/1/checks?check_run_id=771389132)

## Documentation

CAPS Phase 2: Continue working on a multi-day build of our delivery tracking system.

In this lab, we’ll be moving away from a single application and creating separate applications for the drivers, stores, and a server that ties them all together.

As you can imagine, in the CAPS system the Vendors and the Drivers will each be on different computers and can’t be using the same running application, so we’ll need a way to keep everything in sync over the network.

## Setup

 `npm i jest eslint dotenv faker `

#### .env requirements (where applicable)
  i.e.
  `storeName`

## How to initialize/run your application (where applicable)
   * `npm test`
   * `node index.js`

## Tests

#### How do you run tests?
  ` npm test` / `npm run lint`/`node index.js `
#### Any tests of note?
   `jest --verbose --coverage`


## UML

[UML Diagrame ](assest/lab-16.jpg)