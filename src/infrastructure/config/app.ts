import express from 'express'
import http from 'http'
import productRoute from '../routes/productRoute'

export const createServer = () => {
    try {
        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }))
        app.use('/api/product',productRoute)
        const server = http.createServer(app)

        return server;
    } catch (error) {
        console.log(error);
    }
}