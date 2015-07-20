# Querying with Field Aliases & Fragments

We have seen basic query with parameters. Let's get into deeper water.

## Field Aliases

Consider the GraphQL query from previous part:

```
// Request
query FetchUser {
  user(id: "1") {
    name
  }
}

// Response:
{
  data: {
    user: {
      name: "Lee Byron"
    }
  }
}
```

What if you need to fetch multiple users in a single query? You already have `user` as the property of `data` object, how would you fit another user there?

`Field Aliases` can be handy in these cases. You can give your fields any valid name you want, and the response will match that query.

```
// Request
query FetchLeeAndSam {
  lee: user(id: "1") {
    name
  }
  sam: user(id: "2") {
    name
  }
}
```

The `field` name `user` is still the same, you are just instructing GraphQL server to provide Lee's data and Sam's data in their separate keys.

```
// Response:
{
  data: {
    lee: {
      name: "Lee Byron"
    }
    sam: {
      name: "Sam "
    }
  }
}
```

By the way, using comma between GraphQL `field`s is optional. You can use them between lee and sam if that makes you comfortable:

```
// Request
query FetchLeeAndSam {
  lee: user(id: "1") {
    name
  },
  sam: user(id: "2") {
    name
  }
}
```

## Fragments

Now imagine our product manager suddenly came and asked to include Lee and Sam's email address. We could do so with this query of course:

```
// Request
query FetchLeeAndSam {
  lee: user(id: "1") {
    name
    email
  }
  sam: user(id: "2") {
    name
    email
  }
}
```

We can already see that we are repeating ourselves. Since we have to add new fields to both parts of the query, things are looking odd. Instead, we can extract out the common fields into a `fragment`, and reuse the fragment in the query, like this:

```
// Request
query FetchWithFragment {
  lee: user(id: "1") {
    ...UserFragment
  }
  sam: user(id: "2") {
    ...UserFragment
  }
}

fragment UserFragment on UserFragment {
  name
  email
}
```

> This `...` is called spread operator. If you are familiar with the new features of ES2015 you have already seen similar syntax there.
>
> The `on User` tells that the `UserFragment` can only be applied on `User` type. We'll go through the details of type system later.

Both of those queries give this result:

```
// Response:
{
  data: {
    lee: {
      name: "Lee Byron",
      email: lee@example.com
    },
    sam: {
      name: "Sam",
      email: sam@example.com
    }
  }
}
```

The `FetchLeeAndSam` and `FetchWithFragment` queries will both get the same result, but `FetchWithFragment` is less verbose and less repetitive; if we wanted to add more fields, we could add it to the common fragment rather than copying it into multiple places.

##Inline Fragment

There is another thing called `inline fragments`, which as you might have guessed, can be defined inline to queries. This is done to conditionally execute fields based on their runtime type.

In our following example we'll get sequels in case of "The Matrix", which is of Movie type and episodes for "Mr. Robot", which is of Tvshow type.

```
query inlineFragmentTyping {
  shows(titles: ["The Matrix", "Mr. Robot"]) {
    title
    ... on Movie {
      sequel {
        name
        date
      }
    }
    ... on Tvshow {
      episode {
        name
        date
      }
    }
  }
}
```

There are other ways to conditionally modify a query. `Directive` plays the key role in that and we are going to talk about them in the next part.
