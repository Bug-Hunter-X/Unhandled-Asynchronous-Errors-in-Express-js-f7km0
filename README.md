# Unhandled Asynchronous Errors in Express.js

This repository demonstrates a common but easily overlooked error in Node.js Express.js applications: silently failing to handle asynchronous errors within request handlers.

## The Problem

The `bug.js` file contains an Express.js application with a route handler that performs an asynchronous operation.  If this operation throws an error, the error is logged to the console, but no error response is sent back to the client. This leads to a poor user experience (e.g., the user sees nothing or an unexpected response) and makes debugging difficult.

## The Solution

The `bugSolution.js` file shows the corrected implementation.  It uses a `try...catch` block to properly handle any exceptions thrown during the asynchronous operation and sends an appropriate error response (HTTP 500) to the client.