// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".reachWrapper.svelte-1vvs7kp{display:grid;place-items:center;width:100vw;height:100vh;background-color:#fafafa}a.svelte-1vvs7kp{text-decoration:none;color:rgb(0, 0, 127);font-family:Oxygen;font-size:clamp(0.8rem, 5vw, 1.8rem);font-weight:300;margin-bottom:2%}a.svelte-1vvs7kp:hover{color:rgb(50, 50, 150)}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}