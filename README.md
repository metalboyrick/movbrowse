# MovBrowse

An OMDB API - based movie explorer.

## Description

### Overview

This project is a Next.js based movie explorer with features such as searching, detail-viewing. This site is responsive.

### Technical Description

This project was built with Next.js, Chakra UI, axios, and Redux.
<img width="555" alt="Screen Shot 2023-04-11 at 07 39 42" src="https://user-images.githubusercontent.com/53423618/231026531-4370c082-1566-41ac-9656-8ba26cca22d9.png">

The components are designed in a way that the view (rendered and displayed part) and the controller (event handlers, lifecycle logics) are decoupled. This way, maintenance would be easier in the long run and it would be easier to write isolated features.

Logic relating to data are not defined within the components, instead they are handled by a core service that processes the data from the OMDB API and stores it in the Redux store. The service is exposed as hooks.

## How to Run

First, install dependencies

```
yarn
```

Then, configure your environment for the public server URL, you can find the example within the repository.
Next, run locally

```
yarn dev
```

The project should be live on http://localhost:3000.

To run unit tests, do

```
yarn test
```

## Demo

This project is live on demo link.

## Other notes

- The unit tests are not completed due to time constraints.
