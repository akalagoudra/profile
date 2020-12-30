import React, { useState, useEffect} from "react";

function JsonDump(jsonfile){

    const [data, setData] = useState()

    const getData = () => {
        fetch(jsonfile, {
            headers : {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            }
        })
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
    }

    useEffect( () => {
      getData()
    }, [])

    return data
}

export default JsonDump;
