# Part 2: Basic Query syntax


GraphQL queries look a lot like JSON objects without data. And you know what? I'm glad they did it this way.

```
// a json object
{
  "user": "name"
}

```

A similar GraphQL query would be:

```
// Request:
{
  user {
    name
  }
}

```

When the server responds it just pour data in those empty properties. Could it be any more simpler than that!

```
// Response:
{
  data: {
  user: {
    name: "Lee Byron"
  }
}
}

```

You can also use parameters in GraphQL queries:

```
//Request:
query fetchUser {
  user(id: "1") {
    name
  }
}
```

*Now wait a minute! That looks more than the promised simple JSON object without data. What are those `query` and `fetchUser` things doing here? God forbid, I hope you aren't trying to sell me OData disguised as graphshit!*

I'm not. And I'm glad that you are paying attention. In my opinion, GraphQL's approach is much elegant than that initiative of Microsoft.

## Anatomy of a GraphQL Query:

Looking back again:

```
//Request:
query fetchUser {
  user(id: "1") {
    name
  }
}
```

`query` is an GraphQL `Operation`. It, as you might guess, fetches the data from server. It is read-only, you cannot modify data with `query` operations.

 > The other valid value for GraphQL operation is `mutation`, which we can use to create, update or delete data and fetch the updated result (*doing CRUD, remember? Need to do them all!*). We'll discuss more on mutations later.

`fetchUser` is just an arbitrary name of your query. You'll write whatever you feel right here. A meaningful name will make sense later to other developers about what the query does in short. Yeah,  [that's one of the hardest things to do in computer science](http://martinfowler.com/bliki/TwoHardThings.html)!

`user` is called `field`. And `name` is a sub-field, you might say .

`id: "1"` is the `argument` on `user` field. Arguments are unordered, by the way. `picture(width: 200, height: 100)` and `picture(height: 100, width: 200)` means same to a GraphQL server.

And this whole darn thing is called a `document`.


----------


However, if a query has no `arguments` or `directives` (we will discuss directives later, for now just assume its another piece of the whole puzzle) or `name`, the `query` keyword can be omitted. We did that with our first example above:

```
// Request:
{
  user {
    name
  }
}

```
