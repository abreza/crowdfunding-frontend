import mathTextToSvg from '../additionalPlugins/mathTextToSvg';

export default function fixDocumentMathElements(doc: Document) {
  const tinyMathEls = doc.getElementsByClassName('tiny-math');
  // @ts-ignore
  tinyMathEls.forEach((element: HTMLElement) => {
    element.innerHTML = mathTextToSvg(element.dataset.latex).innerHTML;
  });
}
