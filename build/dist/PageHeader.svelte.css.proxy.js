// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".header.svelte-qy4cx2{position:fixed;top:0;left:0;width:100%;height:6em;display:flex;justify-content:center;color:white;font-family:Oxygen, 'sans serif';z-index:1000}.headerBackground.svelte-qy4cx2{position:absolute;width:100%;height:100%;background:linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%);transition:opacity 500ms}.headerWidth.svelte-qy4cx2{gap:clamp(2em, 10vw, 15em);width:auto;display:flex;justify-content:space-between;align-items:center}.signatureWrapper.svelte-qy4cx2{position:relative;width:90px}.signatureWrapper.svelte-qy4cx2:hover{cursor:pointer}.headerItem.svelte-qy4cx2{position:relative;display:inline-block;font-size:1.2em;animation:svelte-qy4cx2-reveal 2s;animation-delay:calc(var(--reveal-delay) * 0.5s + 2.5s);animation-fill-mode:backwards;user-select:none;transition:opacity 500ms, color 500ms;width:90px;text-align:center}.headerItem.svelte-qy4cx2:hover{color:var(--signaturecolor);opacity:0.7;transition:opacity 200ms, color 200ms;cursor:pointer}@keyframes svelte-qy4cx2-reveal{from{color:rgba(255, 255, 255, 0)}to{color:var(--signaturecolor)}}.headerAltColors.svelte-qy4cx2{color:black}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}