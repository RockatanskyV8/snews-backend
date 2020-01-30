'use strict'

const { Pool } = require('pg')
const repos    = {'snews' : require('./repositories/snews')}


const cliente = new Pool({
    user : "postgres", password : null, host : "localhost",
    port : 5432,       database : "snews"
});

cliente.connect();

function getReqInfo(req){
  let result = []
  // console.log(req.params)
  if (Object.values(req.body).length   > 0 ){ result = Object.values(req.body)   } else
  if (Object.values(req.params).length > 0 ){ result = Object.values(req.params) }

  return result;
}

exports.rule = async(req, res, next) => {
    let path = (req.originalUrl).split("/");
    // console.log(getReqInfo(req))
    let { rows } = await cliente.query(
                                        repos[ path[1] ][ path[2] ][ path[3] ], getReqInfo(req)
                                      );
    res.status(200).send(rows);

}
