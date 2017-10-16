import config from 'app/config'
import es6promise from 'es6-promise'
import fetch from 'isomorphic-fetch'
es6promise.polyfill()

const defaultHeader = {
  'method': 'GET'
}

export function request (path, header = defaultHeader) {
  return fetch(`${config.api}${path}`, header)
    .then(response => response.json())
    .catch(error => console.log(error))
}

export function getEntities () {
  return request(config.path.entities)
}

export function postNewEntity (value) {
  const header = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  }
  return request(`${config.path.entities}`, header)
}

export function postEditedEntity (id, value) {
  const header = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  }
  return request(`${config.path.entities}${id}`, header)
}
