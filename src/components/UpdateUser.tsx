import { useState } from "react";

function UpdateUser() {
  const initialuUser = {
    firstName: "Julian",
    lastName: "Vogel",
    email: "julian@web.de",
  };

  const [user, setUser] = useState(initialuUser);

  function onUpdateEmail() {
    setUser((prev) => {
      return {
        ...prev,
        email: "whatever@gmail.com",
      };
    });
  }

  function onUpdateFirstName() {
    setUser((prev) => {
      return {
        ...prev,
        firstName: "Heike",
      };
    });
  }

  function onUpdateLastName() {}

  console.log("hai");

  return (
    <div>
      <h1 className="text-5xl">{user.firstName}</h1>
      <h2 className="text-5xl">{user.lastName}</h2>
      <p className="text-2xl">{user.email}</p>
      <button
        className="bg-primary py-2 px-6 rounded-md text-white"
        onClick={onUpdateEmail}
      >
        update Email
      </button>
      <button
        className="bg-primary py-2 px-6 rounded-md text-white"
        onClick={onUpdateFirstName}
      >
        update FirstName
      </button>
      <button
        className="bg-primary py-2 px-6 rounded-md text-white"
        onClick={onUpdateLastName}
      >
        update LastName
      </button>
    </div>
  );
}

export default UpdateUser;
