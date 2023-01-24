const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        id: ID
        name: String
        password: String
        avatar: String
        role: String
        createdAt: Int
        modifiedAt: Int
    }

    type Token {
        token: String!
    }

    type Query {
        getAllUsers: [User]!
        getUserById(id: ID!): User
    }

    input UserInput {
        name: String!
        password: String!
    }

    type Mutation {
        createUser(user: UserInput!): String!
        loginUser(user: UserInput!): Token!
        updatePass(id: ID!, password: String!): String!
        deleteUser(id: ID!): String!
    }
`;

module.exports = typeDefs;
