import React from "react";
interface User {
  id: number;
  name: string;
}
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  //{cache:"no-store"}  disable caching that's one option and this is useful
  //if you have data that changes frequently.
  // In those situations we always want to show fresh data to our users.
  const data: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      {data.map((ele) => (
        <p key={ele.id}>Name: {ele.name}</p>
      ))}
    </div>
  );
};

export default UsersPage;
