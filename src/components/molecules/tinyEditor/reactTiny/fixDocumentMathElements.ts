import mathTextToSvg from '../additionalPlugins/mathTextToSvg';

export default function fixDocumentMathElements(doc: Document) {
  const tinyMathEls = Array.from(
    doc.getElementsByClassName('tiny-math')
  ) as HTMLElement[];

  tinyMathEls.forEach((element) => {
    element.innerHTML = mathTextToSvg(element.dataset.latex).innerHTML;
  });
}
