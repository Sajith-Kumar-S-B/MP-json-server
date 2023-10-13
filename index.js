//  import json-server
 const jsonServer= require('json-server')

//  create json-server

  const mediaPlayerpServer= jsonServer.create()


//   setup path for db.json file

  const router = jsonServer.router('db.json')

//   return middleware used by json server

const middleware = jsonServer.defaults()

// set up port for server app

const port = 4000 || process.env.port
// use middleware and router in  the server

mediaPlayerpServer.use(middleware)

mediaPlayerpServer.use(router)

// server listen for request from backend

  mediaPlayerpServer.listen(port,()=>{
    console.log(`Media player server started at port : ${port} ad waiting for request !!`);
  })