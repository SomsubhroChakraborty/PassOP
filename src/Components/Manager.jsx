import React, { useEffect, useState } from 'react';

const Manager = () => {
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    } else {
      setPasswordArray([]);
    }
  }, []);

  const handleAddPassword = () => {
    const newPassword = {
      Site: websiteUrl,
      username: username,
      password: password
    };

    setPasswordArray([...passwordArray, newPassword]);
    // Saving passwords to localStorage
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, newPassword]));

    // Clearing input fields after saving
    setWebsiteUrl('');
    setUsername('');
    setPassword('');
  };

  const handleDeletePassword = (index) => {
    const updatedPasswords = [...passwordArray];
    updatedPasswords.splice(index, 1);
    setPasswordArray(updatedPasswords);
    localStorage.setItem("passwords", JSON.stringify(updatedPasswords));
  };

  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between">
            <div className="flex-shrink-0">
            </div>
            <div className="flex">
            </div>
          </div>
        </div>
      </nav>
      <div className="mx-auto max-w-4xl my-8 font-bold text-white">
        <h1 className="text-purple-800 text-center text-4xl">
          <span className="text-purple-800"> &lt;Pass</span>
          <span className="text-white">OP</span>
          <span className="text-purple-800">/&gt;</span>
        </h1>
        <p className="text-purple-600 mx-auto text-center text-2xl my-2">your own password manager</p>
        <div className="flex flex-col p-4 text-black gap-3">
          <input
            placeholder="Enter website URL"
            className="rounded-full mb-8 border-2 border-purple-800"
            type="text"
            value={websiteUrl}
            onChange={(e) => setWebsiteUrl(e.target.value)}
          />
          <div className="flex flex-col md:flex-row">
            <input
              placeholder="Enter user name"
              className="mx-auto md:mx-0 rounded-full border-2 border-purple-800 mb-4 md:mb-0 md:mr-4"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              placeholder="Enter password"
              className="mx-auto md:mx-0 rounded-full border-2 border-purple-800"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button
            className="text-purple-800 flex justify-center items-center mx-auto border-2
            border-purple-800 rounded-full px-4 py-2 hover:font-bold gap-2"
            onClick={handleAddPassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
              colors="primary:#6c16c7"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <div className="passwords">
          <h2 className="text-white flex justify-center my-4 mb-4 text-2xl">Your passwords</h2>
          <table className="table-auto w-full">
            <thead className='bg-purple-800 text-black border-2 border-black-800 rounded-full'>
              <tr>
                <th>Site</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {passwordArray.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2 border border-white text-center w-32">{item.Site}</td>
                    <td className="py-2 border border-white text-center w-32">{item.username}</td>
                    <td className="py-2 border border-white text-center w-32">{item.password}</td>
                    <td className="py-2 border border-white text-center w-32">
                      <button
                        className="text-white bg-red-600 rounded-full px-2 py-1"
                        onClick={() => handleDeletePassword(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manager;
