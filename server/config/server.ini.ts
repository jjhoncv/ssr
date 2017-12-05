import * as path from 'path'

let config = <any>{};

// production
config.production = {};
config.production.protocol = 'http'
config.production.host = '162.243.217.204'
config.production.port = 8080
config.production.domain = ''

// local
config.local = {};
config.local.protocol = 'http'
config.local.host = 'localhost'
config.local.port = 8080
config.production.domain = ''

let env = <any>{};
env = Object.assign(env, config[process.env.NODE_ENV])

env.urlBase = `${env.protocol}:// ${env.domain} || ${env.host}:${env.port}`
env.dirServer = path.join(__dirname, '../');
env.dirPublic = `${env.dirServer}/public`
env.dirViews = `${env.dirServer}/views`;

export default env;