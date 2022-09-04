import axios from "axios";

export default async function DeleteSystemFromServer(id:string)
{
    try {     
        var config = {
            method: 'delete',
            url: `http://localhost:3333/system/${id}`,
            headers: { }
          };
        
          axios(config)
          .then(function (response) {
              console.log("delete successful")
            console.log(JSON.stringify(response.data));
          })
        
    } catch (error) { console.log(error);}
}
    