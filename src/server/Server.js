import express from 'express';
import reactDom from 'react-dom/server'
import { indexTemplate } from "./indexTemplate";
import {App} from "../App";
import base from "../bd";
import {User} from "./models/models";
import cors from 'cors'
export const PORT = process.env.PORT || 3000;
const app = express();
import router from './routes'
import errorHandler from "./middleware/ErrorHandingMiddleware";



app.use('/static', express.static('./dist/client'))
app.use(cors())
app.use(express.json())
app.use('/api', router)

const usr = User


app.get('*', (req, res) =>{
    res.send(
        indexTemplate(reactDom.renderToString(App)),
    );

});

app.use(errorHandler)

const start = async () => {
    try {
        await base.authenticate()
        await base.sync()
        app.listen(PORT, () => {
            console.log('Server started ',PORT)
        })
    }catch (e) {
        console.log(e)
    }
}

start()
