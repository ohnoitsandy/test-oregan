import { useState } from 'react';
import { Input } from './components/Input';
import { HideShowControl } from './components/HideShowControl';
import { SignIn } from './components/SignIn';
import './App.css';

function App() {
  const [textFields, setTextFields] = useState({});
  const [hideShow, setHideShow] = useState(false);

  const handleInput = (event) => {
    const name = event.currentTarget.id;
    const value = event.currentTarget.textContent;
    setTextFields((values) => ({ ...values, [name]: value }));
  };

  const handleInputKeyBoard = (input, name) => {
    setTextFields((values) => ({ ...values, [name]: input }));
  };

  const handleToggle = () => {
    setHideShow(true);
    setTimeout(() => setHideShow(false), 3000);
  };

  return (
    <div className="app">
      <h3 className="form-title">User Login</h3>
      <div className="form-container">
        <Input
          defaultText="Type Username Here"
          text={textFields['username']}
          handleInput={handleInput}
          handleInputKeyBoard={handleInputKeyBoard}
          inputName="username"
          inputType="text"
        />
        <Input
          defaultText="Type Password Here"
          text={textFields['password']}
          handleInput={handleInput}
          handleInputKeyBoard={handleInputKeyBoard}
          inputName="password"
          inputType="password"
          hideShow={hideShow}
        >
          <HideShowControl
            handleToggle={handleToggle}
            hideShow={hideShow}
          ></HideShowControl>
        </Input>
        <SignIn
          disabled={Object.keys(textFields).length === 0 ? true : false}
        />
      </div>
    </div>
  );
}

export default App;
