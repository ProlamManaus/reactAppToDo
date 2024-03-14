import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Card } from '../../components/Card'
import './styles.css'

export function Home() {
  const [studentName, setStudentName] = useState('')
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: '', avatar: '' })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
      setStudentName: () => setStudentName(''),
    }
    // setStudents([newStudent])
    setStudents((prevStateNow) => [
      ...prevStateNow,
      newStudent,
    ])
  }

  useEffect(() => {
    console.log('call useEffect')
    fetch('https://api.github.com/users/mllsouza')
      .then((response) => response.json())
      .then((data) => {
        // console.log(data)
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      })
  }, [])

  return (
    <>
      <div className="container">
        <header>
          <h1>Prolam 2024.03</h1>
          <div>
            <strong>{user.name}</strong>
            <img
              // src="https://github.com/mllsouza.png"
              src={user.avatar}
              alt="foto perfil github"
            />
          </div>
        </header>

        <input
          type="text"
          placeholder="Input your name"
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button type="button" onClick={handleAddStudent}>
          To Add
        </button>

        {/* {students.map((student) => ( */}
        {students.map((student, index) => (
          <Card
            // key={student.time}
            key={index}
            name={student.name}
            time={student.time}
          />
        ))}

        {/* <Card name="Filme BOPP" time="12:09:28" /> */}
        {/* <Card name="Filme Prata" time="05:01:58" /> */}
      </div>
    </>
  )
}

// export default Home
