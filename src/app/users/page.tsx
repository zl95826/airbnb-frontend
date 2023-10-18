import React from "react";
interface User {
  id: number;
  name: string;
}
//------------------one option
//keep data fresh for a certain period of time
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
    //In next object, we can specify configuration parameters
    //that are specific to nexjs
    //This means next.js is going to run a background job,
    //and get fresh data from the backend every 10 seconds.
  });
  //-----------------another option
  //   const res = await fetch("https://jsonplaceholder.typicode.com/users",
  //   {
  //     cache: "no-store",
  //   });
  //{cache:"no-store"}  disable caching that's one option and this is useful
  //if you have data that changes frequently.
  // In those situations we always want to show fresh data to our users.
  const data: User[] = await res.json();
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      {data.map((ele) => (
        <p key={ele.id}>Name: {ele.name}</p>
      ))}
    </div>
  );
};

export default UsersPage;
