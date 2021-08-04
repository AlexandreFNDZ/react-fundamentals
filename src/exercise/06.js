// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  // 📜 https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
  
  // Hook to use error behavior
  // const [error, setError] = React.useState(null);

  const [username, setUsername] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(event) {
    const {value} = event.target;
    const valueLowerCase = value.toLowerCase();

    // Show error message if input has Upper Case
    // const isLowerCase = value === valueLowerCase;
    // setError(isLowerCase ? null : 'You must type lower case only');

    setUsername(valueLowerCase);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" value={username} onChange={handleChange} />
      </div>

      {/* Error message is displayed here, with button disabled if is an error */}
      {/* <div role="alert">{error}</div> */}
      {/* <button disabled={Boolean(error)} type="submit">Submit</button> */}

      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
