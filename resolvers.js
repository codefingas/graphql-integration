module.exports = {
  Query: {
    sessions: (parent, args, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessions(args);
    },
    sessionsById: (parent, { id }, { dataSources }, info) => {
      return dataSources.sessionAPI.getSessionsById(id);
    },
  },
};
