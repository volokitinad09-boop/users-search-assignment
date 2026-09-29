import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Список пользователей</h1>

      <input
        type="text"
        placeholder="Поиск по имени"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <div className="users">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div className="card" key={user.id}>
              {user.name}
            </div>
          ))
        ) : (
          <p>Пользователи не найдены</p>
        )}
      </div>
    </div>
  );
}

export default App;
