import { useEffect, useState } from 'react'
import { Card } from '../../components/Card'
import './styles.css'

interface Student {
  name: string
  time: string
}

interface User {
  name: string
  avatar: string
}

export function Home(): JSX.Element {
  const [studentName, setStudentName] = useState<string>('')
  const [students, setStudents] = useState<Student[]>(
    () => {
      const storedStudents =
        localStorage.getItem('students')
      return storedStudents
        ? JSON.parse(storedStudents)
        : []
    }
  )
  const [user, setUser] = useState<User>({
    name: '',
    avatar: '',
  })

  function handleAddStudent(): void {
    const newStudent: Student = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    }
    setStudents((prevStateNow) => [
      ...prevStateNow,
      newStudent,
    ])
    setStudentName('')
  }

  function handleDeleteStudent(index: number): void {
    setStudents((prevStateNow) => {
      const updatedStudents = [...prevStateNow]
      updatedStudents.splice(index, 1)
      return updatedStudents
    })
  }

  useEffect(() => {
    fetch('https://api.github.com/users/mllsouza')
      .then((response) => response.json())
      .then((data) => {
        setUser({
          name: data.name,
          avatar: data.avatar_url,
        })
      })
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'students',
      JSON.stringify(students)
    )
  }, [students])

  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = (currentDate.getMonth() + 1)
    .toString()
    .padStart(2, '0') // Adiciona zero à esquerda, se necessário

  return (
    <>
      <div className="containerHome">
        <header>
          <div className="tamanhoHoraT">
            <h1>Prolam</h1>
            <div className="tamanhoHora">
              <strong>
                {year}.{month}
                {' - '}
                {new Date().toLocaleTimeString('pt-br')}
              </strong>
            </div>
          </div>
          <div>
            <strong>{user.name}</strong>
            <img
              src={user.avatar}
              alt="foto perfil github"
            />
          </div>
        </header>

        <input
          type="text"
          placeholder="Input your task"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
        <button
          className="buttonAdd"
          type="button"
          onClick={handleAddStudent}
        >
          To Add
        </button>

        {/* {students.map((student, index) => (
          <div key={index}>
            <Card name={student.name} time={student.time}>
              <button
                type="button"
                onClick={() => handleDeleteStudent(index)}
              >
                ❌1
              </button>
            </Card>
          </div>
        ))} */}

        {students.map((student, index) => (
          <div key={index} className="tableContainer">
            <Card name={student.name}></Card>
            <div className="containerHomeDiv200">
              <div className="containerHomeDiv300">
                <Card name={student.time}></Card>
              </div>
              <button
                className="buttonDelete"
                type="button"
                onClick={() => handleDeleteStudent(index)}
              >
                ❌
              </button>
            </div>
          </div>
        ))}

        {/* {students.map((student, index) => (
          <div key={index} className="card-container">
            <Card name={student.name} time={student.time} />
            <button
              className="buttonDelete"
              type="button"
              onClick={() => handleDeleteStudent(index)}
            >
              Del
            </button>
          </div>
        ))} */}
      </div>
    </>
  )
}

