const yargs       = require('yargs')const actionProxy = require('./note')const {_: action, title, body} = yargs.argvconsole.log(yargs.command())function respondToAction([action], ...rest) {  switch (action) {    case 'remove':      return actionProxy[action](rest[0])    case 'getNote':      return actionProxy[action](rest[0])    case 'list':      return actionProxy[action]()    case 'add':      return actionProxy[action](...rest)    default :      return actionProxy[action]()  }}respondToAction(action, title, body)