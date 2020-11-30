const {gql} = require("apollo-server");

module.exports = gql`
  type Query {
    sessions(
      id: ID
      title: String
      description: String
      endsAt: String
      room: String
      day: String
      format: String
      track: String
      level: String
    ): [Session]
    sessionsById(id: ID): Session
  }
  type Session {
    id: ID!
    title: String
    description: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "will be leaving in version 2.0")
    level: String
  }
`;
