import { useState, useEffect} from "react";

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

    getData()
    console.log("Json dump called " + jsonfile + " with data " + data)

    return data
}

export default JsonDump;
