Problems GQL Solves over REST (when REST is done right).
- multiple round trips
- over/under fetching data

GQL API
- single endpoint
- http://graphql.org
- is a specification, many implementations/languages supported.

Schema Basics
- Describes functionality supported

Scalar Types
- Int
- Float
- String
- Boolean
- ID

Object Types
- represents a group of fields
- each field in an object maps to another type, allowing nested types and circular references.
- 

### Root Level Types
- entry point into the GQL API.

```typescript
    type Query {
        users: [Users]
        tasks: [Task]
        ...
    }

    type Mutation {
        signup(email: String, password: string): User
        ...
    }

    type Subscription {
        userCreated: User
        ...
    }
```

Query types are executed in parallel
Mutation types are executed sequentially

### Input Type
are a special type which allows an object to be passed as an argument to both queries and mutations.

```typescript
   input TaskInput {
       name: String!
       completed: Boolean!
       userId: ID!
   }

   type Query {
       fetchTask(task: TaskInput!): Task
   }
```

### Custom Scalar Types  
### Interface Types  
Abstract types - can't be used directory in a schema, but can be used as building blocks for creating explicit types

```typescript
  interfae Book {
      title: String
      author: Author
  }

  type TextBook implements Book {
      ## Since TextBook implements Book, TextBook must minimally declare
      ## all of the fileds that Book declares
       title: String
       author: Author
       classes: [Class]
  }
```

### Union Type
indicates that a field can return more than one object type, but doesn't define specific fields itself. 

```typescript

   type Book {}
   type Author {}
   union Result = Book | Author

   type Query {
       search: [Result]
   }
```

### Enum TYpe

```typescript
    enum AllowedColor {
        RED
        GREEN 
        BLUE
    }
```