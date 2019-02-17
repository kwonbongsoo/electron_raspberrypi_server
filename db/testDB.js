"use strict"

module.exports = {
  setConnection(conn) {
    this.connection = conn // 변수를 알아서 만들어준다.
  },

  test_all (successFn, errorFn) {
    this.connection.query(
    'call test_all()',
    function (error, result) {
        console.log(error)
        if (error) {
            errorFn(error)
        } else {
            successFn(result)
        }
    })
  },
} // module
