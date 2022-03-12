// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "#mainImage.svelte-8tzkwi{position:relative;background-image:url(\"Images/main.jpg\");background-size:cover;background-repeat:no-repeat;background-position:center;width:100vw;height:100vh;z-index:10;bottom:0px}#text.svelte-8tzkwi{position:absolute;left:12%;top:30%;width:clamp(30vw, 40%, 35vw)}.textseg.svelte-8tzkwi{display:inline-block;background-color:black;font-family:Oxygen;font-weight:700;font-size:clamp(0.8rem, 3vw, 1.5rem);padding:clamp(0.8rem, 2.5vw, 1rem);color:white;margin-bottom:clamp(1rem, 3.5vw, 2rem);margin-right:clamp(1rem, 3.5vw, 2rem);white-space:nowrap}img.svelte-8tzkwi{height:clamp(1rem, 3.5vw, 2rem);vertical-align:bottom}#downArrow.svelte-8tzkwi{position:absolute;bottom:3%;left:50%;background-image:url(\"Images/Down Arrow Medium.svg\");background-repeat:no-repeat;background-position:center;background-size:contain;width:55px;height:55px;filter:invert(1) drop-shadow(0px 0px 5px rgba(0, 0, 0, 1));opacity:0.85;z-index:11;transition:opacity 0.1s ease-in-out;animation:svelte-8tzkwi-arrowBump 6s;animation-iteration-count:infinite}#downArrow.svelte-8tzkwi:hover{cursor:pointer;opacity:1;transition:opacity 0.1s ease-in-out}@keyframes svelte-8tzkwi-arrowBump{0%{transform:translateY(0px) translateX(-50%)}70%{transform:translateY(0px) translateX(-50%)}75%{transform:translateY(10px) translateX(-50%)}85%{transform:translateY(0px) translateX(-50%)}90%{transform:translateY(10px) translateX(-50%)}100%{transform:translateY(0px) translateX(-50%)}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}