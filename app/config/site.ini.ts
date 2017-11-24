import * as path from 'path'
import server from './../../server.ini'

let config = <any>{};

// production
config.urlBase = `${server.protocol}://${server.host}:${server.port}` 
config.urlStatic = `${config.urlBase}/static/`

export default config;