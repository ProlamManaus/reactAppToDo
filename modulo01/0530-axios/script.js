// import axios from "axios"

// axios.get('https://api.github.com/users/mllsouza').then(res => {
//   console.log(res.data)
// })


document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar o comportamento padrão do formulário
  const username = document.getElementById('username').value.trim();
  console.log(`Dados Github:`);

  // axios
  //   .get('https://api.github.com/users/' + username)
  //   .then(response => axios.get(response.data.repos_url))
  //   .then(repos => console.log(repos.data))
  //   .catch(error => console.error('Erro:', error))

  // Promise.all([
  //   axios.get('https://api.github.com/users/' + username),
  //   axios.get('https://api.github.com/users/' + username + '/repos')
  // ])
  //   .then(responses => {
  //     const userData = responses[0].data.login;
  //     const reposData = responses[1].data.length;
  //     console.log('Login do usuário:', userData);
  //     console.log('Repositórios do usuário:', reposData);
  //   })
  //   .catch(error => {
  //     console.error('Erro:', error.message);
  //   });


  // async | await
  // const promessa = new Promise(function (resolve, reject) {
  //   return resolve('ok')
  //   return reject('error error')
  // })

  // async function start() {
  //   try {
  //     const result = await promessa
  //     console.log(result)
  //   } catch (error) {
  //     console.log(error)
  //   } finally {
  //     console.log('finalizado')
  //   }
  // }
  // start()

  // async | await
  // axios
  //   .get('https://api.github.com/users/' + username)
  //   .then(response => axios.get(response.data.repos_url))
  //   .then(repos => console.log(repos.data))
  //   .catch(error => console.error('Erro:', error))

  // async | await
  // No Axios, a propriedade data da resposta já é 
  // automaticamente convertida para JSON. Portanto, 
  // não é necessário chamar JSON.parse() ou similar.
  async function start() {
    try {
      const url = ('https://api.github.com/users/' + username)

      const userResponse = await axios.get(url)
      const user = userResponse.data

      const reposResponse = await axios.get(user.repos_url);
      const UserRepos = reposResponse.data;

      console.log(userResponse);
      console.log(user);
      console.log(reposResponse);
      console.log(UserRepos);

    } catch (error) {
      console.error('error message:', error);
    }
  }
  // start().catch(error => console.log('error message:', error))
  start()

});





