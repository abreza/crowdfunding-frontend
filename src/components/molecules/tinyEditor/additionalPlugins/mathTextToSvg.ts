/* global MathJax */

const mathTextToSvg = (mathText: string = '', config?: any) => {
  const span = document.createElement('span');
  span.className = 'tiny-math';
  span.dataset.latex = mathText;
  // @ts-ignore
  const mj = MathJax;
  let res = mj.tex2svg(mathText, {
    em: 16,
    ex: 8,
    containerWidth: 579,
    display: true,
    scale: 1,
    lineWidth: 1000000,
    ...config,
  });
  span.appendChild(res.querySelector('svg'));
  return span;
};

export default mathTextToSvg;
