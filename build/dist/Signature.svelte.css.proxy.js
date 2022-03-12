// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".cls-1.svelte-r3ok3r{position:absolute;animation:svelte-r3ok3r-reveal 1s linear;animation-fill-mode:forwards;transition:6s ease-in-out}#sp1.svelte-r3ok3r{stroke-dasharray:3630;stroke-dashoffset:3630;animation-duration:2s}#sp2.svelte-r3ok3r{stroke-dasharray:558;stroke-dashoffset:558;animation-duration:0.5s;animation-delay:1s}#sp3.svelte-r3ok3r{stroke-dasharray:612;stroke-dashoffset:612;animation-duration:0.5s;animation-delay:1.25s}#sp4.svelte-r3ok3r{stroke-dasharray:394;stroke-dashoffset:394;animation-duration:0.5s;animation-delay:1.5s}#sp5.svelte-r3ok3r{stroke-dasharray:454;stroke-dashoffset:454;animation-duration:0.5s;animation-delay:1.75s}#sp6.svelte-r3ok3r{stroke-dasharray:607;stroke-dashoffset:607;animation-duration:0.5s;animation-delay:2s}#sp7.svelte-r3ok3r{stroke-dasharray:704;stroke-dashoffset:704;animation-duration:0.5s;animation-delay:2.25s}@keyframes svelte-r3ok3r-reveal{40%{fill:rgba(255, 255, 255, 0)}100%{stroke-dashoffset:0;fill:white;stroke:white}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}