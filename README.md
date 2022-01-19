# React JS Notes App

## Live application URL

The project is available on the following link: [https://lerastarynets.github.io/react-notes-app/](https://lerastarynets.github.io/react-notes-app/).

## Functionality

1. Users can add, edit and remove notes.
2. Users can archive notes. Archived notes are not shown in the notes list. Users can view archived notes and unarchive them.

## Technologies

This Project demonstrates the following:

1. React

- Functional (a.k.a. stateless) component
- React Hooks

2. Redux

- Using Action Creators with meaningful action names
- Keeping the immutability and readability of the reducer
- No store data transformations in the components
- Using the Redux DevTools Extension for Debugging

## About

1. Categories are predefined: “Task”, “Random Thought”, “Idea”.
2. Notes in the table display a list of dates mentioned in this note as a separate column.
3. There is a summary table which counts notes by categories: separately for active and archived. The table is updated whenever users perform some action on notes. The summary table is shown on the same page as the notes table.
4. Data is stored in the redux store. Store is prepopulate with 7 notes that are used by default as an initial state so that they are shown when the page is reloaded.
5. Components are structured properly (container, page, component), components are reused.
