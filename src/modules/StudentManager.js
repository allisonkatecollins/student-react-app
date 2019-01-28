const remoteURL = "http://localhost:5002"

export default {
  getAll() {
    return fetch(`${remoteURL}/students`).then(e => e.json())
  }
}