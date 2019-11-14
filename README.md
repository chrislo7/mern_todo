# MERN-TODOLIST
A simple Todo list with MERN ( MongoDB, Express, React, NodeJS )

_*NOTE: I've shut down the cluster on Atlas, so database integration won't work properly*_

## Instructions

1. git clone this repo
2. Run `npm install` and `npm client-install`
3. Run `npm run dev`
4. create a `keys.js` file inside of the config folder.
5. Put the following in:

`module.exports = {
    mongoURI: 'mongodb+srv://%USER%:%PASSWORD%@mern-todo-vxnac.mongodb.net/test?retryWrites=true&w=majority'
}
`

6. Replace %USER% and %PASSWORD% with username and password from Mongo Atlas 