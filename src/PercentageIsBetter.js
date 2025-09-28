
export default function VhVsPercentHeight() {

  const containerVh = {
    height: '100vh',
    backgroundColor: '#faa',
    padding: '20px',
    overflow: 'auto',
    border: '2px solid red',
    boxSizing: 'border-box',
  };

  const containerPercent = {
    height: '100%',
    backgroundColor: '#afa',
    padding: '20px',
    overflow: 'auto',
    border: '2px solid green',
    boxSizing: 'border-box',
  };

  const wrapperStyle = {
    height: `600px`,
    border: '2px solid black',
    marginBottom: '20px',
    overflow: 'hidden',
    resize: 'vertical', // cool, i dont know she exist
    padding: '10px',
  };

  return (
    <>
      <div>
        <h2>Simulated Viewport Container (Resizable)</h2>
        <p>Drag bottom edge of the black box to resize height (simulate address bar UI changes)</p>
        <div style={wrapperStyle}>

          <div style={containerVh}>
            <h3>Container with height: 100vh</h3>
            <p>This container uses <code>100vh</code>, which is always the initial viewport height (900px on load), ignoring resizes of the wrapper.</p>
            <p>Try resizing the black wrapper - notice the red container’s height remains constant and overflows if wrapper gets smaller.</p>
          </div>
        </div>

        <div style={wrapperStyle}>
          <div style={containerPercent}>
            <h3>Container with height: 100%</h3>
            <p>This container uses <code>100%</code>, so it adjusts to wrapper’s height and resizes dynamically.</p>
            <p>Try resizing the black wrapper - the green container shrinks/grows properly with the wrapper size.</p>
          </div>
        </div>
      </div>
    </>
  );
}


// Term             |  What It Means                  |  CSS/JS Properties                    
// -----------------+---------------------------------+---------------------------------------
// Viewport         |  Visible browser area           |  window.innerHeight, CSS100vhunits    
// Document Height  |  Full height of entire webpage  |  document.documentElement.scrollHeight