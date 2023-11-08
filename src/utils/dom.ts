export const DOM = (function (d) {
  function createNode(tagName: string, options?: ElementCreationOptions | undefined) {
    return document.createElement(tagName, options);
  }

  function getBody(): HTMLElement {
    return d.body;
  }
  function getHead(): HTMLElement {
    return d.head;
  }
  

  function createTextNode(text: string = '') {
    const textNode = createNode('p');
    textNode.textContent = text;
    return textNode;
  }

  function createBanner() {
    const div = createNode('div');
    const t = createTextNode('SDK is healthy');

    div.appendChild(t);

    const parentRef = getBody() || getHead();
    parentRef.appendChild(div);
    return div;
  }

  return Object.freeze({
    createNode,
    createTextNode,
    getBody,
    getHead,
    getRef: (selector) => d.querySelector(selector),
    getRefs: (selector) => d.querySelectorAll(selector),
    createBanner,
    // setAttr: (node, attr) => {}
  });
})(document);
