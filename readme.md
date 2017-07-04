JS library for working the with [Planning Center API](https://planningcenter.github.io/api-docs/). Still very much a work in progress.

This is the direction I'm taking the API for now (subject to change):
```
import PCO from 'pco-js';

const client = new PCO();
client.http.accessToken = '<token>';

client
  .services()
  .me()
  .schedules()
  .get()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
```

`services()` here is a request generator (PCORequest, more specifically). Each subsequent function modifies the original request, corresponding with endpoints supported by the Services API. Request modifiers will accept params as outlined by the API docs. Finally, `get()` executes the GET request and returns a promise.

The goal is to have all 4 PCO apps supported (Check-Ins, Giving, People, and Services). As well as multiple request methods (get, post, put, delete, etc) and file uploads. This is in early development right now as I get the various APIs/endpoints added.