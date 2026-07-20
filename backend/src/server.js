import app from './app.JS';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server Listening on Port ${PORT}...`));
