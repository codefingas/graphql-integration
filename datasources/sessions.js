const sessions = require("../data/sessions.json");
const {DataSource} = require('apollo-datasource');
const _ = require("lodash");

class SessionsAPI extends DataSource {
    constructor(){
        super();
    }

    initialize (config){

    }

    getSessions(args){
        return  _.filter(sessions, args);
    }

    getSessionsById(id){
        const [data] = _.filter(sessions, {id: parseInt(id)});
        return data;
    }
}

module.exports = SessionsAPI;