'use strict';

module.exports = function (City) {
 
    City.populate = (count, cb)=>{
        console.log(count)

            if(count <= 0){
                const err = {
                    statusCode: "400",
                    message: "You need to populate with one or more people"
                }
                cb(err)
            }
            const result = {
                status: `Region populated by ${count} people`
            }
            cb(null,result)
    }

};
  