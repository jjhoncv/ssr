import * as path from 'path'

let config = <any>{};

// production
config.production = {};
config.production.protocol = 'http'
config.production.host = '162.243.217.204'
config.production.port = 8080

// local
config.local = {};
config.local.protocol = 'http'
config.local.host = 'localhost'
config.local.port = 8080

let env = <any>{};
env = Object.assign(env, config[process.env.NODE_ENV])


env.dirApp = path.join(__dirname, '/app');
env.dirPublic = path.join(__dirname, '/public');
env.dirViews = `${env.dirApp}/views`;

export default env;