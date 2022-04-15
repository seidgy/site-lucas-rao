import axios from 'axios'

export class contactService  {
    async send(url,params) {
      return axios.post(url,
        params, 
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );
    }
}