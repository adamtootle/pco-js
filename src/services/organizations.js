import http from '../http';

class Organizations {
  getOrganization = () => http.get('/');
}

export default new Organizations();
