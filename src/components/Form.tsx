import { ChangeEvent, FormEvent, useState } from "react";

interface IUser {
  name: string;
  email: string;
  password: any;
  cpassword: any;
}

function Form() {
  const [user, setUser] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(user);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          placeholder="Enter user name"
          name="name"
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter your email"
          name="email"
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Enter confirm password"
          name="cpassword"
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
