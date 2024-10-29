import express from 'express';
import toDoRoutes from './routes/toDo.routes';
const app = express();

app.use(express.json());

app.use(toDoRoutes);

app.get('/', (_req, res) => { 
  res.send('Hello World');
})
app.listen(3000, () => {
  console.log('Server is running on port 3000\nhttp://localhost:3000');
});
