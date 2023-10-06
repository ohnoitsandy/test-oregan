import './SignIn.css';

export const SignIn = (props) => {

  const {disabled = true} = props;

  return (
    <div className="sgn-container">
      <button className={`sgn-button ${disabled && 'disabled'}`}>Sign In</button>
    </div>
  );
};
