import React from 'react';
import Script from 'next/script';

import { Frame } from 'src/components/molecules/frame/Frame';
import fixDocumentMathElements from './fixDocumentMathElements';

const TinyPreview = ({ hidden = false, content = '', frameProps = {} }) => {
  return (
    <div style={hidden ? { display: 'none' } : {}}>
      <Frame
        handleUpdateContent={(doc: Document) => fixDocumentMathElements(doc)}
        content={content}
        frameProps={frameProps}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.1.2/es5/tex-svg.min.js"
        integrity="sha512-9irB0qyXMAf4xUF5UEVOhb4NMCWo7xeKakVbl0lfJ09HyhrplRCqTFMtaW6lP7G0IbHfIcmSo3dFZrWcrsGnOA=="
      />
    </div>
  );
};

export default TinyPreview;
