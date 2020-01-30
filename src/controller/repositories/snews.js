'use strict'

module.exports = {
  
  'contatos' : {
              'get'      : "select * from agenda.contatos;",
              'specific' : "select * from agenda.contatos where id = $1;",
              'create'   : "insert into agenda.contatos (info) values ($1);",
              'update'   : "update agenda.contatos set info = $2 where id = $1;",
              'delete'   : "delete from agenda.contatos where id = $1;"
            }
}
