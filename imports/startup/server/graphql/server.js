import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import Schema from './schema';

const app = express().use('*', cors());

/* TODO: Authentication layer here. */
app.use((request, response, next) => {
  next();
});

app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));

app.listen(4000);
