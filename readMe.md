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

# Express Routers

## What are Express Routers?

Express Routers are a way to organize your Express application such that your primary app. js file does not become bloated and difficult to reason about. As you're building an Express application or API, you'll soon notice that the routes continue to pile up in app. js. This makes the file quite long and hard to read.

Common convention in making routers is making a new folder called routes. This really makes the base file much cleaner and easier to read. All middlewares still work as well!

## What are Controllers?

Controllers are functions that make your express app work. They are the (req, res) => {} functions that you use. Common convention for this is to make another folder called controllers so that you could dump all the controllers there and make your routers even cleaner.
