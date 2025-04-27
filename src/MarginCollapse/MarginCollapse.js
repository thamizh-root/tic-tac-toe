import { useState } from 'react';
import './MarginCollapse.css';

export default function MarginCollapse() {
  const layoutStyle = {
    display: 'grid',
    gridTemplateAreas: `
      ". content ."
    `,
    gridTemplateColumns: '1fr 3fr 1fr',
  };

  const contentStyle = {
    gridArea: 'content',
  };
  return (
    <>
      <div style={layoutStyle}>
        <div style={contentStyle}>
          <VerticalCollapse />
          <hr style={{ margin: '50px 0' }} />
          <AdjacentElementsCollapse />
          <hr style={{ margin: '50px 0' }} />
          <BiggerMarginWins />
          <hr style={{ margin: '50px 0' }} />
          <NestingCollapsing />
          <hr style={{ margin: '50px 0' }} />
          <MarginCollapseBlocked />
          <hr style={{ margin: '50px 0' }} />
          <BlockedByGap />
          <hr style={{ margin: '50px 0' }} />
          <PureNegativeMargins />
          <hr style={{ margin: '50px 0' }} />
        </div>
      </div>
    </>
  )
}



function VerticalCollapse() {
  const paragraphStyle = {
    marginTop: '20px',
    marginBottom: '20px',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    border: '1px solid #ccc',
  };

  const inlineBlockStyle = {
    display: 'inline-block',
    marginLeft: '20px',
    marginRight: '20px',
    backgroundColor: '#e0e0e0',
    padding: '10px',
    border: '1px solid #bbb',
  };

  return (
    <div>
      <h2>Vertical Margin Collapse</h2>
      <div style={paragraphStyle}>Paragraph One (margin-bottom: 20px)</div>
      <div style={paragraphStyle}>Paragraph Two (margin-top: 20px)</div>
      <p>Notice the space between the paragraphs is 20px, not 40px. The vertical margins collapsed.</p>

      <h2>Horizontal Margin (No Collapse)</h2>
      <div>
        <span style={inlineBlockStyle}>Inline One (margin-right: 20px)</span>
        <span style={inlineBlockStyle}>Inline Two (margin-left: 20px)</span>
      </div>
      <p>Notice the space between the inline blocks is 40px (20px right + 20px left). The horizontal margins did not collapse.</p>
    </div>
  );
}

const AdjacentElementsCollapse = () => {
  const paragraphStyle = {
    marginTop: '32px',
    marginBottom: '32px',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    border: '1px solid #ccc',
  };

  return (
    <div>
      <h2>Margin Collapse Blocked by &lt;br /&gt;</h2>
      <div style={paragraphStyle}>Paragraph One (margin-bottom: 32px)</div>
      <br />
      <div style={paragraphStyle}>Paragraph Two (margin-top: 32px)</div>
      <p>
        Notice that the space between the paragraphs is more than 32px. The &lt;br /&gt; tag
        prevents the margins from collapsing. Only adjacent elements collapse.
      </p>
    </div>
  );
};

const BiggerMarginWins = () => {
  const paragraphOneStyle = {
    marginBottom: '72px',
    backgroundColor: '#f0f0f0',
    padding: '10px',
    border: '1px solid #ccc',
  };

  const paragraphTwoStyle = {
    marginTop: '24px',
    backgroundColor: '#e0e0e0',
    padding: '10px',
    border: '1px solid #bbb',
  };

  return (
    <div>
      <h2>Bigger Margin Wins</h2>
      <div style={paragraphOneStyle}>Paragraph One (margin-bottom: 72px)</div>
      <div style={paragraphTwoStyle}>Paragraph Two (margin-top: 24px)</div>
      <p>
        Notice that the space between the paragraphs is 72px, the larger of the two margins.
        The smaller 24px margin is effectively absorbed by the larger one.
      </p>
    </div>
  );
};


const NestingCollapsing = () => {

  const paragraphOneStyle = {
    marginTop: '48px',
    marginBottom: '48px',
    backgroundColor: '#f0f0f0',
  };

  const paragraphTwoStyle = {
    marginTop: '48px',
    marginBottom: '48px',
    backgroundColor: '#e0e0e0'
  };

  return (
    <div>
      <h2>Nesting Doesn't Prevent Collapsing (Simplified)</h2>
      <div>
        <p style={paragraphOneStyle}>Paragraph One (margin-top: 48px)</p>
      </div>
      <p style={paragraphTwoStyle}>Paragraph Two (margin-top: 48px)</p>
      <p>
        Observe the space <strong style={{ color: 'red' }}>above</strong> "Paragraph One"
        and the space <strong style={{ color: 'red' }}>below</strong> the orange border.
        The top margin of the paragraph inside the div collapses with the top margin of the div's parent.
        Also, the bottom of the orange border is directly next to the top of "Paragraph Two" because the
        paragraph's bottom margin collapses.
      </p>
    </div>
  );
};

function MarginCollapseBlocked() {
  const paragraphStyle = {
    marginBottom: '30px',
    marginTop: '40px',
    paddingBottom: '24px', // Adding padding-bottom to the first paragraph
    borderBottom: '1px solid transparent', // Adding a transparent border
  };

  const secondParagraphStyle = {
    marginTop: '40px',
  };

  return (
    <div>
      <h2>Blocked by padding or border</h2>

      <p style={paragraphStyle}>Paragraph One (padding-bottom: 24px)</p>
      <p style={secondParagraphStyle}>Paragraph Two (margin-top: 40px)</p>

      <p style={{ ...paragraphStyle, paddingBottom: '0' }}>Paragraph One (no padding-bottom)</p>
      <p style={secondParagraphStyle}>Paragraph Two (margin-top: 40px) - Margins Collapse</p>

      <p style={{ ...paragraphStyle, paddingBottom: '0' }}>Paragraph One (border-bottom: 1px solid black)</p>
      <p style={secondParagraphStyle}>Paragraph Two (margin-top: 40px) - Margins Do Not Collapse</p>

    </div>
  );
}

const BlockedByGap = () => {
  const parentStyle = {
    height: '150px', // Creating a fixed height
  };

  const childStyle = {
    backgroundColor: '#f0f0f0',
  };

  const siblingStyle = {
    backgroundColor: '#e0e0e0',
    marginTop: '30px', // Top margin of the sibling
  };

  return (
    <div>
      <h2>Bottom Margin Blocked by Parent's Height</h2>
      <div style={parentStyle}>
        <div style={childStyle}>Child Element (marginBottom: 40px)</div>
      </div>
      <div style={siblingStyle}>Sibling Element (marginTop: 30px)</div>
      <p>
        Notice the space between the blue border (parent) and the gray border (sibling). It's determined
        by the parent's <code>marginBottom</code> (30px), not the collapsed margin of the child and sibling.
        The fixed <code>height</code> on the parent creates a gap that blocks the child's
        <code>marginBottom</code> from collapsing with the sibling's <code>marginTop</code>.
      </p>
    </div>
  );
};


const PureNegativeMargins = () => {
  const headerStyle = {
    marginBottom: '-20px',
  };

  const headingStyle = {
    marginBottom: '10px',
  };

  const sectionStyle = {
    marginTop: '-10px',
  };

  const paragraphStyle = {
    marginTop: '30px',
  };

  return (
    <div>
      <h2>Complex Negative Margin Collapse</h2>
      <header style={headerStyle}>
        <h1 style={headingStyle}>My Project</h1>
      </header>
      <section style={sectionStyle}>
        <p style={paragraphStyle}>Hello World</p>
      </section>
      <p>
        Here's how the margins collapse:
        <ul>
          <li>The <code>marginBottom</code> of the <code>header</code> is -20px.</li>
          <li>The <code>marginBottom</code> of the <code>h1</code> is 10px.</li>
          <li>The <code>marginTop</code> of the <code>section</code> is -10px.</li>
          <li>The <code>marginTop</code> of the <code>p</code> is 30px.</li>
          <li>The largest positive margin is 30px (from the paragraph).</li>
          <li>The "most negative" margin is -20px (from the header).</li>
          <li>The resulting margin between the header and section is 30px + (-20px) = 10px.</li>
        </ul>
      </p>
    </div>
  );
};

// MarginCollapse:


