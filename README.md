# Weather App | The Odin Project

This is the repo for the weather app project in the JavaScript course of The Odin Project

## What I Learned

### Promises

I had a couple of previous projects where I was working with asynchronous code, but I would always default to the callback functions provided because I was never really comfortable with promises.  I understood what they did and understood what asynchornous code does, but I wasn't comfortable with it because I was having trouble understanding the code I was reading.  I was so used to reading synchronous code, with assignments in their neat little places.  And any projects or exercises I had that involved `fetch` bothered me because the solutions had the asynchronous code nested within the `fetch`.  Whole programs would be wrapped around a `fetch` call and I just didn't feel good having everything wrapped in a chained `fetch` call.

I'm feeling a little bit more comfortable with `fetch` now, but it helps knowing how to handle the promises that is returned with a `.then` call.  The `.then` is what handles the promise and has access to the asynchronous data that is returned at a later time.  It halts the chain until the asynchronous code completes before moving on.  Returned values in a `.then` are promises that can then be chained with another `.then`.  This system of handling promises makes the code read like synchronous code but still act asynchronously.

### Async/Await

Using async/await is another method of handling promises.  It's known as "syntactic sugar" since this addition doesn't change the fundamental use of promises.  If I had to choose though, I would pick the syntax of async/await because it handles and reads more like synchronous code.  Assignments are much easier to read because all I need to watch for are the `async` and `await` keywords.  It's a little bit messy to use the try/catch block to handle errors, but just like I mentioned with the `fetch` function above I don't like everything having to be wrapped into one big call.  I guess I'm would rather see `async` and `await` keywords than a chained `.then`.  In either case though, both are better than seeing the callback hell tree of doom.

### Hiding API Key From Git Repo

I made a Git commit and forgot to hide my API key.  I learned how to [undo the last commit](https://stackoverflow.com/questions/927358/how-do-i-undo-the-most-recent-local-commits-in-git), change my code, and redo the commit so my API code isn't showing on my public repo.  I found this article on [How to hide API KEY in GitHub repo](https://dev.to/ptprashanttripathi/how-to-hide-api-key-in-github-repo-2ik9) which utilized a script file to act like a `.env` file and used the `.gitignore` file to not push our secrets out to the public.