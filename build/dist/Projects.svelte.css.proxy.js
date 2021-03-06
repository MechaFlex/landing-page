// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".prWrapper.svelte-13o8950.svelte-13o8950{display:flex;justify-content:center;width:100vw;height:100vh;background-color:#fafafa}.prGrid.svelte-13o8950.svelte-13o8950{margin-top:100px;width:90%;height:85%;display:grid;grid-template-columns:repeat(auto-fit, minmax(min(40vw, 350px), 1fr));grid-auto-rows:1fr;gap:1em}.prGrid.svelte-13o8950>.svelte-13o8950{position:relative;border-radius:15px;box-shadow:0px 2px 60px rgba(0, 0, 0, 0.07);overflow:hidden;background-color:white}.prGridElement.svelte-13o8950.svelte-13o8950{padding:15px;text-decoration:none;height:auto}.prTitle.svelte-13o8950.svelte-13o8950{display:inline-block;font-weight:bold;color:black;font-size:clamp(0.5em, 4vw, 1.5em);margin-bottom:8px}.prText.svelte-13o8950.svelte-13o8950{color:#444;font-size:clamp(0.3em, 3vw, 1em)}.prOverlay.svelte-13o8950.svelte-13o8950{top:0;left:0;position:absolute;width:100%;height:100%;background-repeat:no-repeat;background-position:center;background-size:cover;display:grid;place-items:center;transition:opacity 800ms}.prOverlay.svelte-13o8950.svelte-13o8950:hover{opacity:0%;transition:opacity 300ms}.prOverlayTitle.svelte-13o8950.svelte-13o8950{color:white;text-decoration:none;font-size:clamp(1.5em, 3vw, 4em);font-weight:bold;text-shadow:4px 4px 10px rgba(0, 0, 0, 1);text-align:center}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}