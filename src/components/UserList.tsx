import React, { useMemo } from 'react'

export default function UserList() {
     const users = [
    { id: 1, name: "An", age: 17 },
    { id: 2, name: "Bình", age: 20 },
    { id: 3, name: "Châu", age: 25 },
    { id: 4, name: "Dũng", age: 15 },
  ]
  const filteredUsers = useMemo(() => {
    return users.filter(user => user.age > 18)
  }, [users])
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách người dùng trên 18 tuổi</h2>
      <ul>
        {filteredUsers.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} tuổi
          </li>
        ))}
      </ul>
    </div>
  )
}
