const url = "http://localhost:5500/api"

function getUsers() {
  axios.get(url)
    .then(response => {
      apiResult.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      userId.textContent = response.data.id
      userName.textContent = response.data.name
      userCity.textContent = response.data.city
      userAvatar.src = response.data.avatar
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`,  userUpdated )
    .then(response => console.log(response))
    .catch(error => console.error(error))
}
const userUpdated = {
  name: 'Hadassa',
  avatar: "https://avatars.githubusercontent.com/u/67393275?v=4",
  city: "Manaus - AM"
}


function deleteUser(id) {
  axios.delete(`${url}/${id}`)
  .then(response => console.log(response))
    .catch(error => console.error(error))
}

deleteUser(3)
getUsers()
getUser(2)
// updateUser(3,userUpdated)