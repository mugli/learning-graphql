# What is GraphQL

```
  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
|                                          |
|   The dirty secret:                      |
|   We’re all just building CRUD apps.     |
|                                          |
|                          @iamdevloper    |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _|
```
Nothing is that simple in the turbulent field of technology. If you are a developer and haven't been in a cave for last few years, you have seen the rise of complex Single Page Application and Mobile Applications in general. Sometimes it makes me feel we have entered the "client-side heavy" era without much of prior preparation. There have been a lot of confusion, experiments, thrill in how to cope up with the changes, how to structure code and the flow, how to be on the edge of performance, but with all that, we seem to have overlooked some basic things repeatedly, like how we should fetch our data.

Most of us are using REST. And with that, our front-end developers are constantly trying to figure out why some properties are missing in the JSON response they got from the API, what's changed in the last sprint, why that shit is not in API documentation. Our back-end developers are constantly trying to cope up with the nitty gritty changes in dozens of client side applications and their numerous slightly different version that depend on the API. For years, we took this miserable life for granted.

Don't get me wrong. REST is simple, there is almost no learning curve. Here is your resource, ask for it politely with proper verb, be sure to check your status code before you leave and be gone with that. It blends perfectly with HTTP. I was a kid building native desktop applications when the world was cheering to move from SOAP to REST, XML to JSON, Configuration to Convention, so I didn't take much notice on the web. But I can feel the excitement of those times just by looking at GraphQL. Every breath of fresh air probably feels similarly amazing.

I think the main problem of REST is that it tried to blend too much with HTTP instead of focusing on the nature of our data. Maybe that's because it came from a time where most complex data mingling was done in sever side and the client was served with properly rendered pages. But things have changed. Restaurants became grocery shops, they now serve raw ingredients and assumes their clients are now chefs. The real-life communication between a chef and grocery market is much chaotic than a customer and waitress in a restaurant. Some tooling became long due to mitigate this change.

If you look close enough, most of our data is connected like graphs (ah, that's why even the poster child of nosql document storage has to come up with "dynamic lookup" feature to combine data across collections, maybe because the word "join" is too mainstream, and probably not webscale). You cannot just get away with a author's data, you need information about the books has has written. You cannot talk about a TV Show without talking at all about its episodes. It is never as simple as individually lived resources on a served dish. It is complex by requirement, otherwise it is not tasty.

The first step to solve a problem is to acknowledge that it exists. GraphQL (fortunately) does so for us. And not just that, it also agrees that product designs start with views, so front-end engineers should be able to declare what data they need instead of waiting for the backend guys to make necessary changes in API for them. The world needs to move faster. REST was failing to cope up with that, *elegantly*.


There are more actually. Read [GraphQL Introduction](http://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html) to feed your curious monster. Watch the [announcement on React Europe 2015 Conf](https://www.youtube.com/watch?v=WQLzZf34FJ8), and a [deep dive to it](https://www.youtube.com/watch?v=gY48GW87Feo).


## What GraphQL is not:

* GraphQL is not for any specific language or framework. Although the [reference implementation](https://github.com/graphql/graphql-js) has been released in JavaScript, the GraphQL core is expected to be ported to all major languages.

* GraphQL does not assume any specific data store. Just because it has "QL" in its name, don't assume anything similar to SQL. You can use relational, non-relational or other REST style backends as your data source. The GraphQL server's job is to parsing, validating, providing and mutating data based on your request.

##A more formal definition:
> GraphQL consists of a type system, query language and execution semantics, static validation, and type introspection.

We'll discuss them as we go through the series.
