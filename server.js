const express = require('express')
const http = require('http')
const { Server } = require('socket.io')

const app = express()
const PORT = 9000
const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket)=>{
    socket.on('echo123',(data)=>{
        io.emit('echo123', data)
    })
})

app.use(express.static('public'))

server.listen(PORT, () => {
    console.log("server is running", PORT)
})