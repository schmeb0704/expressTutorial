# Express Tutorial Notes

## Why use Express?

It makes making servers easier

## What is Express?

A minimal and flexible Node.js web application framework that provides a set of features for web and mobile applications.

Because of this, it is now easier to spin up APIs and web servers

# COMMONLY USED METHODS FOR EXPRESS

### These are called http verbs

- .get | Read data - default for browsers
- .post | Insert data
- .put/.patch | update data
- .delete | delete data

### No longer http verbs, these are Express.js specific

- .all
- .use
- .listen

# Middlewares in Express

## What are Middlewares?

Middlewares are functions that execute during the request to the server. Each middleware has access to req and res objects. Middlewares are everywhere in Express. Literally the heart and soul of Express apps.
