

const handler = require('serve-handler')
const http = require('http')

const server = http.createServer((req,res)=>{
   return handler(req,res)
})

server.listen('3005',()=>{
	console.log('listen 3005')
})
