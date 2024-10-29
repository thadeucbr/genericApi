import express from 'express';
import toDoRoutes from './routes/toDo.routes';
const app = express();

app.use(express.json());

app.use(toDoRoutes)

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});