import axios from "axios";


export default function showLocationDetails(id: string){
    var config = {
        method: 'get',
        url: `http://localhost:3333/location/${id}`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        return(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}