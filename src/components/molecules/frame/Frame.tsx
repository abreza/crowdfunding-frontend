/* eslint-disable jsx-a11y/iframe-has-title */
import React, {
  FC,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';

export const Frame: FC<{
  content: string;
  frameProps: any;
  title?: string;
  handleUpdateContent?: any;
}> = ({ content, frameProps, title = '', handleUpdateContent }) => {
  const [contentRef, setContentRef] = useState(null);
  const doc = ((contentRef as any)?.contentDocument ??
    (contentRef as any)?.contentWindow?.document) as Document;

  const fixHeight = useCallback(() => {
    if (contentRef) {
      (contentRef as HTMLElement).style.height =
        doc?.documentElement?.scrollHeight * 1.01 + 'px';
    }
  }, [contentRef, doc?.documentElement?.scrollHeight]);

  useEffect(() => {
    if (!doc) {
      return;
    }
    doc.open();
    doc.write(
      `<head><link rel='stylesheet' href='${process.env.PUBLIC_URL}/frame.css' /><link rel='stylesheet' href='${process.env.PUBLIC_URL}/fonts/fontiran.css' /><base target="_blank" /></head><body>${content}</body>`
    );
    doc.close();

    doc.fonts.ready.then(fixHeight);
  }, [doc, content, fixHeight]);

  useEffect(() => {
    if (!contentRef) {
      return;
    }
    handleUpdateContent?.(doc);
  }, [content, contentRef, doc, handleUpdateContent]);

  useLayoutEffect(() => {
    window.addEventListener('resize', fixHeight);
    return () => window.removeEventListener('resize', fixHeight);
  }, [fixHeight]);

  useEffect(() => {
    fixHeight();
  }, [content, contentRef, fixHeight]);

  return <iframe title={title} {...frameProps} ref={setContentRef}></iframe>;
};
