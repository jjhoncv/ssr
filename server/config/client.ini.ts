import * as path from 'path'
import server from './server.ini'

let config = <any>{};

// production
config.urlBase = server.urlBase
config.urlStatic = `${config.urlBase}/static/`

export default config;