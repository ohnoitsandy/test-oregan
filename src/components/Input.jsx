import { useState, useRef } from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Input.css';

export const Input = (props) => {
  const {
    defaultText,
    handleInput,
    handleInputKeyBoard,
    inputName,
    text = '',
    hideShow = true,
    children,
  } = props;
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [onFocus, setOnFocus] = useState(false);
  const [layout, setLayout] = useState('default');
  const [localText, setLocalText] = useState('');
  const keyboard = useRef();
  const typeStrategy = {
    true: '',
    false: 'password',
  };

  const handleFocus = () => {
    setShowPlaceholder(false);
    setOnFocus(true);
  };

  const handleShift = () => {
    const newLayoutName = layout === 'default' ? 'shift' : 'default';
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    setLocalText(text + button);
    if (button === '{shift}' || button === '{lock}') handleShift();
  };

  return (
    <>
      <div className="input-container">
        <span
          className={`input-textarea ${typeStrategy[hideShow]}`}
          contentEditable="true"
          onFocus={handleFocus}
          onInput={handleInput}
          id={inputName}
        >
          <span className={showPlaceholder && 'input-placeholder'}>
            {showPlaceholder ? defaultText : localText}
          </span>
        </span>
        {children && children}
      </div>
      {onFocus && (
        <div className="keyboard-container">
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            layoutName={layout}
            onChange={(input) => handleInputKeyBoard(input, inputName)}
            onKeyPress={onKeyPress}
          />
        </div>
      )}
    </>
  );
};
