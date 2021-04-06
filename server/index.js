import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRoutes from './routes/users.js';

const app = express();

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/users', userRoutes);
app.get('/', (req, res) => {
    res.send('Hello team14 API');
});

const PORT = process.env.PORT || 3005;
app.set('port', PORT);

const CONNECTION_URL = 'mongodb+srv://team14:jq4FeGfGCHhez6z4@cluster0.njpsh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose
    .connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);

// app.listen(3005, () => {
//     console.log('Server running on port 3005');
// });

// db username = team14
// db password = jq4FeGfGCHhez6z4;
