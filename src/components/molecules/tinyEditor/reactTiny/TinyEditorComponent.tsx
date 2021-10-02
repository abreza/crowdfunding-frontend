import { Editor } from '@tinymce/tinymce-react';
import React, { FC } from 'react';
import { Editor as TinyMCEEditor } from 'tinymce';
import Script from 'next/script';

import config from '../config';

const TinyEditor: FC<{
  content: string;
  onChange: (a: string, editor: TinyMCEEditor) => void;
}> = ({ content, onChange }) => {
  return (
    <>
      <Editor init={config} value={content} onEditorChange={onChange} />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.1.2/es5/tex-svg.min.js" />
    </>
  );
};

export default TinyEditor;
