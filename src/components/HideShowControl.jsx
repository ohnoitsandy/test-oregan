import './HideShowControl.css';

export const HideShowControl = (props) => {
  const { handleToggle, hideShow } = props;

  return (
    <div className="hsc-container">
      <button className="hsc-button" onClick={handleToggle}>
        {hideShow ? (
          <i class="zmdi zmdi-eye zmdi-hc-3x"></i>
        ) : (
          <i class="zmdi zmdi-eye-off zmdi-hc-3x"></i>
        )}
      </button>
    </div>
  );
};
