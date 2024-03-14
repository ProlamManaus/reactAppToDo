const url = "http://localhost:5500/api"

function getUsers() {
  fetch(url)
    // .then(response => console.log(response.json()))
    .then(response => (response.json()))
    .then(data => renderApiResult.textContent = JSON.stringify(data))
    .catch(error => console.error(error))
}

function getUser() {
  fetch(`${url}/1`)
    .then(response => (response.json()))
    .then(data => {
      // return renderApiResult.textContent = JSON.stringify(data)
      // return renderApiResult.textContent = JSON.stringify(data.name)
      userId.textContent = data.id
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(newUser),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => (response.json()))
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
  name: "Pedro Souza",
  avatar: "https://avatars.githubusercontent.com/u/67393275?v=4",
  city: "São Paulo"
}
addUser(newUser)

function updateUser(updatedUser, id) {
  // fetch(`${url}/1`, {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const updatedUser = {
  name: "Pedro Ramos",
  avatar: "https://avatars.githubusercontent.com/u/67393275?v=4",
  city: "Manaus - AM"
}
// updateUser(updatedUser, 1)

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

deleteUser(2)
getUsers()
getUser()

