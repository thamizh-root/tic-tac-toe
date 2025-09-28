import './HeightAlgorithm.css';

export default function HeightAlgorithm() {
  const fixedHeightStyle = {
    height: '120px',
    background: 'lightcoral',
    padding: '10px',
    marginBottom: '24px',
  };

  const minHeightStyle = {
    minHeight: '80px',
    background: 'powderblue',
    padding: '10px',
    marginBottom: '24px',
  };

  const maxHeightStyle = {
    maxHeight: '60px',
    overflow: 'auto',
    background: 'palegreen',
    padding: '10px',
    marginBottom: '24px',
  };

  const percentHeightContainer = {
    height: '200px',
    background: 'wheat',
    padding: '10px',
    marginBottom: '24px',
  };

  const percentHeightChild = {
    height: '50%',
    background: 'thistle',
  };

  const fitContentStyle = {
    background: 'lightgoldenrodyellow',
    padding: '10px',
    marginBottom: '24px',
    display: 'inline-block',
    // No height: grows to fit content only
  };

  return (
    <>
      <h1>Height Algorithm</h1>

      <div style={fixedHeightStyle}>
        Fixed Height (height: 120px). Content may overflow if too tall!
      </div>

      <div style={minHeightStyle}>
        Min Height (min-height: 80px). If content is short, this sets a lower bound.
      </div>

      <div style={maxHeightStyle}>
        Max Height (max-height: 60px). If content is tall, overflow scroll appears.<br/>
        Extra line<br/>Extra line<br/>Extra line<br/>Extra line
      </div>

      <div style={percentHeightContainer}>
        <div style={percentHeightChild}>
          50% height on child (works only if parent has a defined height).
        </div>
      </div>

      <div style={fitContentStyle}>
        No height set (acts like fit-content): grows just enough to fit <b>this</b> content.
      </div>
    </>
  );
}

// Height Algorithm:

// The default "width" behaviour of a block-level element is to fill all the available width, 
// whereas the default "height" behaviour is to be as small as possible while fitting all of the element's content; 
// it's closer to width: min-content than width: auto!

