# Part 5: On the server-side - Creating your first schema

We've learnt a great deal of how to prepare GraphQL queries. Let's dive into next step, on building our own GraphQL server.

The first step to build a working GraphQL API is providing a `schema`. The GraphQL engine will parse queries, then validate and return the data based on your designed type schema.

By design, GraphQL schemas are **strongly typed**. This gives the system a way to validate the query and guarantees the *shape* of the response.

Here's an example of a simple GraphQL schema that returns `{hello: 'world'}` for a `{hello}` query:

```
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => 'world'
      }
    }
  })
});

// Dummy GraphQL query. In real-life we'll get it from clients
var query = `
  query HelloQuery {
    { hello }
  }
`;

graphql(schema, query).then((result) => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(result);
});

```

If you need to accept parameters to get results, that's easy too. We need to define what type of parameter we accept via a `args` object on fields, and pass that to the `resolve` function. Here's a updated version of the above sample that takes `greet` parameter of `GraphQLString` type:

```
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';


var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        args: {
          greet: { type: GraphQLString }
        },
        //Using Destructuring of ES2015 to assign value to greet
        resolve: (root, {greet}) => {
          greet = greet ? greet + '!' : 'world!';
          return greet;
        }
      }
    }
  })
});

var query = `
  query Welcome {
    hello (greet: "mehdi")
  }
`;

graphql(schema, query).then((result) => {

  // Prints
  // {
  //   data: { hello: "mehdi" }
  // }
  console.log(result);
});

```

> Have you noticed that we are using double-quotes in `hello (greet: "mehdi")` in our query? That's because using single-quotes in `GraphQLString` type parameters is invalid. Tada!

If you are using server-side MVC frameworks like Ruby on Rails, Laravel or SailsJS, you are probably getting a hint here that the coming days are going to be a lot different with GraphQL. The `V` in MVC is already gone in API only use cases. What's next? I can only speculate there will be rudimentary routing for our API servers, as we won't have a bunch of routes but a single endpoint. The schema will do a lot of validation for us, a lot of authentication & authorization will be on middleware layers, as they are now. The `resolve` function of the fields will probably take a lot of responsibility from controllers. The only least affected areas might be the models/ORM layer. Or maybe GraphQL will co-exists with REST and dominant MVC style server-side architecture for a long time. I don't know. But I'm excited to embrace what's coming in near future!
