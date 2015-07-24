# Part 8: Mutations

So far we have only talked about `query` operation, which is read-only. What about modifying data?

Unlike REST, which uses different HTTP verbs for Creating, Updating, Deleting resources, GraphQL treats all operations with side-effects similarly, and calls them `mutation`.

By GraphQL definitions mutations are **"writes followed by a fetch"**. You'll return the data you mutated.

Adding mutation to GraphQL schema is much similar to adding query operations. Let's add one.

Here's our schema from part 6 of the series:

```
//schema.js
import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

let dummyData = {
  '1': 'leebyron',
  '2': 'enaqx',
  '3': 'schrockn',
  '4': 'andimarek'
};

export var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contributor: {
        type: GraphQLString,
        args: {
          id: { type: GraphQLString }
        },
        //Using Destructuring of ES2015 to assign value to id
        resolve: (root, {id}) => {
          return dummyData[id];
        }
      }
    }
  })
});
```

We need to start with by adding a top level key `mutation` to it, rest of the things are similar.

```
var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      contributor: {
        type: GraphQLString,
        args: {
          id: { type: GraphQLString }
        },
        //Using Destructuring of ES2015 to assign value to id
        resolve: (root, {id}) => {
          return dummyData[id];
        }
      }
    }
  }),

  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      updateContributor: {
        type: GraphQLString,
        args: {
          id: { type: GraphQLString },
          username: { type: GraphQLString },
        },
        resolve: (root, {id, username}) => {
          dummyData[id] = username;
          return dummyData[id];
        }
      }
    }
  })
});
```
Now you should get `{"data":{"updateContributor":"dschafer"}}` if you post the following `UpdateContributorUsername` mutation:

```
curl -XPOST -d 'mutation UpdateContributorUsername {updateContributor (id: "5", username: "dschafer")}' http://localhost:8080/
```

One important difference between mutation and query operations is, if you post multiple mutation together, they are processed serially in order to ensure data integrity, where independent queries are processed concurrently by the GraphQL executor.
