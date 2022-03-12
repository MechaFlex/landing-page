import './Signature.svelte.css.proxy.js';
/* src\Signature.svelte generated by Svelte v3.37.0 */
import {
	SvelteComponent,
	detach,
	element,
	init,
	insert,
	listen,
	noop,
	safe_not_equal
} from "../_snowpack/pkg/svelte/internal.js";

function create_fragment(ctx) {
	let div;
	let mounted;
	let dispose;

	return {
		c() {
			div = element("div");
			div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-10 -10 766.17 648.18"><defs><style>.cls-1{fill:none;stroke:#fff;stroke-width:3px;stroke-linecap:round;stroke-linejoin:round;}</style></defs><path id="sp1" class="cls-1 svelte-r3ok3r" d="M145.49,471.3,110,456.25l-2.55-1.08L110,454c17.76-8.32,35.68-16.26,53.63-24.17s36-15.64,54.07-23.22,36.28-15,54.61-22Q286,379.23,300,374.32c9.29-3.26,18.64-6.4,28.14-9.24,4.74-1.42,9.53-2.75,14.4-3.95a136.1,136.1,0,0,1,15-2.93,48.8,48.8,0,0,1,8.25-.4,19.09,19.09,0,0,1,4.94.86,10.53,10.53,0,0,1,1.46.58,8.5,8.5,0,0,1,.83.43,10.1,10.1,0,0,1,1,.66,10.42,10.42,0,0,1,2.45,2.89,17.75,17.75,0,0,1,1.83,4.95,33.45,33.45,0,0,1,.66,4.29,71.8,71.8,0,0,1,.26,8c-.09,5.16-.52,10.18-1.05,15.16s-1.21,9.9-2,14.8c-1.52,9.81-3.31,19.52-5.23,29.19-3.86,19.33-8.24,38.5-12.84,57.61s-9.45,38.15-14.46,57.13q-15.21,56.91-32.12,113.32C305.84,686.44,300.08,705.22,294,724c-3.07,9.37-6.15,18.68-9.65,28.11-.45,1.19-.9,2.38-1.39,3.59s-1,2.44-1.65,3.83c-1,2.12-2,4.31-3,6.52l-5.94,13.41c-4,9-8.09,18-12.49,27s-9.1,17.8-14.42,26.45c-2.67,4.33-5.49,8.6-8.58,12.77a104.55,104.55,0,0,1-10.34,12.08,53.43,53.43,0,0,1-13.84,10.24,33.06,33.06,0,0,1-9.24,3,29.1,29.1,0,0,1-5.13.35c-.87-.06-1.74-.09-2.6-.21l-1.29-.19-.63-.11-.52-.11a59.43,59.43,0,0,1-16-5.67,56.9,56.9,0,0,1-7.25-4.56,58.54,58.54,0,0,1-6.45-5.61,62.7,62.7,0,0,1-10.07-13.41,81.77,81.77,0,0,1-6.52-14.92,112.41,112.41,0,0,1-3.79-15.38c-.89-5.16-1.44-10.3-1.81-15.44a221.44,221.44,0,0,1,.33-30.5l0,1.61,0-.5,0-.32,0-.59c0-.37,0-.73,0-1.07,0-.69,0-1.35,0-2,.06-1.29.16-2.55.3-3.77a60.61,60.61,0,0,1,1.3-7.15,80,80,0,0,1,4.51-13.3,113.5,113.5,0,0,1,14-23.29,165.5,165.5,0,0,1,17.84-19.67c3.19-3,6.48-5.92,9.81-8.74s6.77-5.52,10.26-8.11a332.11,332.11,0,0,1,43.85-27.52c15.18-8.07,30.75-15.22,46.54-21.74S322,616.58,338,611.16c8-2.74,15.92-5.44,23.83-8.29l11.9-4.24,11.86-4.33q47.49-17.25,94.48-36,23.52-9.35,46.94-18.88t46.84-19.17q23.4-9.66,46.71-19.52L667.21,481q46.62-19.78,93-40.07l46.37-20.37q23.21-10.15,46.34-20.46h0a.45.45,0,0,1,.6.23.45.45,0,0,1-.22.59Q761.65,444.05,669,485c-61.76,27.33-123.81,54-186.38,79.47q-46.94,19.1-94.37,36.9l-11.87,4.41-11.91,4.31c-7.93,2.91-15.91,5.66-23.88,8.46-16,5.48-31.78,11.36-47.33,17.88s-30.86,13.64-45.7,21.63a334.44,334.44,0,0,0-42.65,27c-3.38,2.52-6.64,5.17-9.88,7.85s-6.36,5.5-9.41,8.4A157.92,157.92,0,0,0,168.75,720a105.4,105.4,0,0,0-12.87,21.5,72.35,72.35,0,0,0-4,11.84,53.58,53.58,0,0,0-1.1,6.13,30.68,30.68,0,0,0-.18,6.11v.18a214.55,214.55,0,0,0-.26,29.24c.37,4.86.89,9.7,1.72,14.5a104.82,104.82,0,0,0,3.52,14.12c3,9.19,7.67,18,14.48,24.8a48.53,48.53,0,0,0,25.07,13.42,20.55,20.55,0,0,0,13.7-2,44.58,44.58,0,0,0,11.52-8.56,95.19,95.19,0,0,0,9.47-11c2.91-3.91,5.61-8,8.18-12.12,10.23-16.64,18.48-34.45,26.47-52.31l6-13.43c1-2.23,2-4.47,3.09-6.69s1.89-4.45,2.75-6.73c3.42-9.15,6.52-18.45,9.6-27.75,6.12-18.6,12-37.3,17.68-56Q320.71,609,336.24,552.31,344,524,351.14,495.46c4.74-19,9.27-38.07,13.26-57.24,2-9.59,3.85-19.2,5.43-28.86a235.89,235.89,0,0,0,3.26-29.11,67.74,67.74,0,0,0-.15-7.27,17.92,17.92,0,0,0-1.66-6.83,4.16,4.16,0,0,0-1-1.24,4.74,4.74,0,0,0-1.44-.72,14,14,0,0,0-3.46-.61,43.75,43.75,0,0,0-7.22.29,133.58,133.58,0,0,0-14.38,2.65c-4.76,1.12-9.48,2.38-14.19,3.73-18.8,5.42-37.3,11.91-55.69,18.64S237.24,402.74,219.05,410q-54.56,21.86-108.38,45.53v-.86l35.18,15.8a.44.44,0,0,1,.22.59.44.44,0,0,1-.58.23Z" transform="translate(-107.42 -243.06)"></path><path id="sp3" class="cls-1 svelte-r3ok3r" d="M465.63,436.3c-2.39,6.2-5.17,12.07-7.67,18.08s-5,11.94-7.18,18-4.29,12.05-5.88,18.14c-.78,3-1.52,6.07-2.13,9.09a83.66,83.66,0,0,0-1.32,9,44.54,44.54,0,0,0,1.34,16.62,14.57,14.57,0,0,0,3.1,5.7,5.34,5.34,0,0,0,3.7,1.78,10.82,10.82,0,0,0,5.17-1.31,25.27,25.27,0,0,0,5.9-4.34,44.28,44.28,0,0,0,5.39-6.22c.41-.58.82-1.16,1.22-1.76l1.23-1.9c.91-1.43,1.82-2.83,2.76-4.2,7.44-11,15.13-21.52,23.1-31.92s16-20.7,24.46-30.68,17-19.92,26.07-29.48c2.3-2.36,4.62-4.71,7-7a74.34,74.34,0,0,1,7.67-6.7,11.91,11.91,0,0,1,2.71-1.55,21.13,21.13,0,0,1,2.63-.75,11.91,11.91,0,0,1,2.92-.29,6.12,6.12,0,0,1,3.2,1,5.46,5.46,0,0,1,2,2.55,10.16,10.16,0,0,1,.63,2.69,28.26,28.26,0,0,1,0,5v0a.45.45,0,0,1-.48.42.43.43,0,0,1-.41-.42,34,34,0,0,0-.58-4.77c-.33-1.52-1-3.06-2.19-3.75a5.74,5.74,0,0,0-4.35,0,18.61,18.61,0,0,0-2.21.85,8.35,8.35,0,0,0-1.86,1.32,80.53,80.53,0,0,0-6.7,7c-2.15,2.44-4.23,4.94-6.3,7.45-8.27,10-16.24,20.34-24.12,30.7s-15.63,20.83-23.28,31.37S486,507.18,478.73,518L476.05,522c-.88,1.37-1.8,2.76-2.78,4.08a52.7,52.7,0,0,1-6.57,7.44,32.72,32.72,0,0,1-8.19,5.71,18.31,18.31,0,0,1-9.93,1.9,13.67,13.67,0,0,1-4.92-1.59,14.89,14.89,0,0,1-4-3.26,23.07,23.07,0,0,1-4.52-9,49.58,49.58,0,0,1-.76-19.7,105.51,105.51,0,0,1,4.69-19.08,185.61,185.61,0,0,1,7.29-18.2c2.74-5.93,5.71-11.74,8.84-17.46q2.34-4.31,4.79-8.53c1.6-2.83,3.31-5.64,4.8-8.48a.45.45,0,0,1,.82.38Z" transform="translate(-107.42 -243.06)"></path><path id="sp2" class="cls-1 svelte-r3ok3r" d="M434.71,442.15c-9.52,7.52-19.06,14.84-28.16,22.56-4.59,3.81-9.1,7.67-13.37,11.7-2.12,2-4.25,4-6.29,6.08s-4,4.14-5.78,6.28a53.42,53.42,0,0,0-4.8,6.5c-.33.54-.66,1.08-.95,1.6s-.55,1-.85,1.61c-.59,1.18-1.12,2.4-1.61,3.63a57.83,57.83,0,0,0-3.81,15.47,47.46,47.46,0,0,0-.19,7.59,21.23,21.23,0,0,0,1.32,6.36,8.44,8.44,0,0,0,1.1,2,4.46,4.46,0,0,0,.52.58,4.92,4.92,0,0,0,.7.49,9.27,9.27,0,0,0,4.58,1.5,13.57,13.57,0,0,0,5.54-1,32.36,32.36,0,0,0,6.31-3.32,80.48,80.48,0,0,0,12.41-10.55,162.32,162.32,0,0,0,11.47-12.91c1.84-2.26,3.61-4.6,5.41-6.92s3.6-4.67,5.35-7.05,3.49-4.8,5.2-7.23l5.11-7.32C437.35,475,440.68,470,444,465s6.68-10,10.09-15l5.13-7.5,2.68-3.7c.45-.61.91-1.23,1.39-1.83.25-.31.5-.6.78-.9a5.17,5.17,0,0,1,.47-.46l.19-.14a.66.66,0,0,1,.6-.07.57.57,0,0,1,.35.5.75.75,0,0,1,0,.22h0a.45.45,0,0,1-.5.4.46.46,0,0,1-.4-.43V436s0,.09.22.23.28,0,.29,0l0,0a2.66,2.66,0,0,0-.31.39c-.2.29-.4.6-.59.92-.38.63-.75,1.28-1.12,1.94l-2.15,4-4.23,8q-4.23,8-8.6,15.89c-5.88,10.51-12,20.89-18.67,31a221.8,221.8,0,0,1-22,28.76,84.24,84.24,0,0,1-13.63,12.06,40.1,40.1,0,0,1-8.12,4.35,22.64,22.64,0,0,1-9.2,1.59,18.2,18.2,0,0,1-8.9-3,12.86,12.86,0,0,1-3.53-3.25,17.73,17.73,0,0,1-2.25-4.17,30.16,30.16,0,0,1-1.73-9.1,50.05,50.05,0,0,1,.44-9.16,66.05,66.05,0,0,1,5-17.53,45.84,45.84,0,0,1,4.43-8,64.44,64.44,0,0,1,5.82-7,139.56,139.56,0,0,1,13.4-12.23c4.69-3.81,9.52-7.42,14.45-10.9q14.83-10.35,30.53-19.37a.45.45,0,0,1,.5.74Z" transform="translate(-107.42 -243.06)"></path><path id="sp4" class="cls-1 svelte-r3ok3r" d="M519.43,463.39c-.45,2.07-.86,4.12-1.11,6.19s-.54,4.11-.68,6.17-.27,4.08-.28,6.1a52,52,0,0,0,.28,5.91,28.84,28.84,0,0,0,.93,5.38,6.71,6.71,0,0,0,1.79,3.31,1.7,1.7,0,0,0,.78.31,4.2,4.2,0,0,0,.88,0,13.2,13.2,0,0,0,3.53-1,46.3,46.3,0,0,0,9-5.69c3-2.36,6-4.95,8.93-7.69s5.83-5.54,8.66-8.47,5.69-5.86,8.48-8.87,5.6-6,8.37-9.12l4.2-4.59c1.4-1.54,2.75-3.11,4.16-4.63,2.83-3.05,5.53-6.2,8.35-9.26l8.32-9.32c5.55-6.23,11.22-12.41,17-18.65l4.46-4.59c1.51-1.52,3-3.06,4.63-4.5.78-.74,1.63-1.45,2.46-2.15s1.67-1.41,2.56-2.06a25.57,25.57,0,0,1,5.74-3.29l0,0a.45.45,0,0,1,.58.25.45.45,0,0,1-.17.54c-3.43,2.25-6.17,5.5-8.81,8.71s-5.11,6.64-7.61,10c-5,6.75-10,13.51-15.16,20.16q-15.44,20-32.5,38.64a249.36,249.36,0,0,1-18.12,17.64,114.77,114.77,0,0,1-10,7.82,45.92,45.92,0,0,1-11.3,6,15.83,15.83,0,0,1-6.51.88,8.29,8.29,0,0,1-5.84-3.26,13.9,13.9,0,0,1-2.34-6.15,33.68,33.68,0,0,1-.35-6.41A71.54,71.54,0,0,1,518.61,463a.44.44,0,0,1,.59-.21.43.43,0,0,1,.25.49Z" transform="translate(-107.42 -243.06)"></path><path id="sp5" class="cls-1 svelte-r3ok3r" d="M592.65,445.17a34,34,0,0,0-.63,7.24,51.8,51.8,0,0,0,.43,7.17,43.91,43.91,0,0,0,3.45,13.26A14.6,14.6,0,0,0,599,477.6a5.62,5.62,0,0,0,1.72,1.14,8.34,8.34,0,0,0,1.93.42,17.61,17.61,0,0,0,5.37-.31,33.8,33.8,0,0,0,5.82-1.8c7.77-3.25,14.91-9,21.14-15.53A106.26,106.26,0,0,0,643.86,451c2.8-3.69,5.37-7.6,7.83-11.61.63-1,1.24-2,1.83-3s1.2-2,1.78-3.08c1.19-2.08,2.31-4.2,3.48-6.28,2.3-4.19,4.38-8.46,6.39-12.72,3.9-8.55,7.22-17.25,8.57-26a56.5,56.5,0,0,0,.65-6.65c.07-2.25.05-4.52,0-7l0-1.92v-.81c0-.2,0-.43,0-.66a18.79,18.79,0,0,0-.45-2.92,13.21,13.21,0,0,0-2.09-4.79,4.07,4.07,0,0,0-1.44-1.24,4,4,0,0,0-2.1-.4,14.86,14.86,0,0,0-5.8,1.94,43.46,43.46,0,0,0-5.9,4c-2,1.48-3.79,3.11-5.68,4.75l-.06.06a.45.45,0,0,1-.63,0,.45.45,0,0,1,0-.57,59.29,59.29,0,0,1,10.5-10.62,17.85,17.85,0,0,1,6.85-3.32,8.65,8.65,0,0,1,3.95.07,8.24,8.24,0,0,1,3.49,1.91,15.56,15.56,0,0,1,4,6.54,24.61,24.61,0,0,1,1,3.68c.23,1.3.29,2.51.45,3.73a70.35,70.35,0,0,1,.47,14.94c-.87,10-4,19.59-7.86,28.74-1.93,4.58-4.07,9.06-6.35,13.47s-4.68,8.75-7.27,13a125.07,125.07,0,0,1-18.28,23.54,83.53,83.53,0,0,1-11.5,9.57A55.05,55.05,0,0,1,616.2,484a35.62,35.62,0,0,1-7.37,1.67,22,22,0,0,1-7.63-.34,12.65,12.65,0,0,1-3.62-1.49,12,12,0,0,1-2.91-2.62,21.18,21.18,0,0,1-3.51-6.78,46.79,46.79,0,0,1-1.91-14.85,54.81,54.81,0,0,1,.64-7.46,31.92,31.92,0,0,1,1.93-7.26.44.44,0,0,1,.58-.24.45.45,0,0,1,.27.5Z" transform="translate(-107.42 -243.06)"></path><path id="sp7" class="cls-1 svelte-r3ok3r" d="M719.52,366.39c11.34-8.69,23.45-16.21,35.68-23.55,6.16-3.59,12.4-7,18.74-10.41,3.16-1.7,6.39-3.27,9.66-4.81s6.59-3,10-4.43c1.73-.69,3.5-1.36,5.4-2l5.2-1.61a99.63,99.63,0,0,1,11-2.66,45.65,45.65,0,0,1,12.56-.69,24.8,24.8,0,0,1,7.31,1.83,20.26,20.26,0,0,1,3.75,2.13,18.77,18.77,0,0,1,3.32,3.11A19.57,19.57,0,0,1,846,331a28.47,28.47,0,0,1,.81,7.29A51.76,51.76,0,0,1,845,350.73a100.68,100.68,0,0,1-3.7,10.92l-.26.66-.32.73-.63,1.44c-.43,1-.93,1.86-1.39,2.79s-1,1.78-1.51,2.67-1.07,1.7-1.62,2.55a100.91,100.91,0,0,1-15.23,17.26c-2.76,2.53-5.61,4.91-8.49,7.21s-5.8,4.51-8.8,6.6c-6,4.19-12.1,8.07-18.3,11.78-3.1,1.84-6.21,3.66-9.36,5.39s-6.35,3.37-9.55,5-6.4,3.23-9.62,4.78-6.45,3.11-9.73,4.53c-6.54,2.89-13.1,5.68-19.73,8.33A395.76,395.76,0,0,1,686.24,457l0,0a.45.45,0,0,1-.55-.32.44.44,0,0,1,.27-.53c13.09-5.3,26-11.1,38.75-17.21S750,426.45,762.33,419.5A350.94,350.94,0,0,0,798,396.71a184.08,184.08,0,0,0,16.29-13.43,94.17,94.17,0,0,0,13.81-15.8,48.72,48.72,0,0,0,4.91-9.17,93.25,93.25,0,0,0,3.44-9.93,43.35,43.35,0,0,0,1.71-10.23c.07-3.4-.52-6.91-2.59-9.48s-5.39-3.84-8.75-4.25a38.72,38.72,0,0,0-10.35.37,99.39,99.39,0,0,0-10.3,2.2c-1.69.44-3.45.88-5.12,1.34s-3.34,1-5,1.61c-6.63,2.36-13.11,5.18-19.54,8.09s-12.79,6-19.12,9.16c-12.65,6.3-25.21,12.83-37.4,20a.43.43,0,0,1-.61-.16.44.44,0,0,1,.11-.58Z" transform="translate(-107.42 -243.06)"></path><path id="sp6" class="cls-1 svelte-r3ok3r" d="M649,372.8a173.26,173.26,0,0,1,8.65-16.31c3.07-5.3,6.3-10.48,9.47-15.7l9.93-15.38c3.36-5.09,6.85-10.08,10.31-15.11,1.74-2.51,3.46-5,5.23-7.51L698,295.4q5.43-7.36,11-14.69c3.79-4.82,7.67-9.68,11.84-14.37a184.16,184.16,0,0,1,13.25-13.68,53.86,53.86,0,0,1,8.6-6.47,24.18,24.18,0,0,1,6.3-2.61,17.69,17.69,0,0,1,4-.52,18.35,18.35,0,0,1,4,.38c.63.12,1.21.28,1.77.44l.41.13c.15.05.25.07.48.16.4.14.8.3,1.2.47a13.93,13.93,0,0,1,4.28,3,15.49,15.49,0,0,1,2.7,3.86,18.87,18.87,0,0,1,1.33,3.67,25.41,25.41,0,0,1,.73,6.34,44.07,44.07,0,0,1-.41,5.53,68,68,0,0,1-2.22,10c-.46,1.59-1,3.14-1.59,4.79l-.45,1.2-.45,1.1-.9,2.21L762,290.62l-2,4.19-4,8.28c-5.3,11-11,21.8-16.92,32.5s-12.07,21.25-19,31.39l0,0a.46.46,0,0,1-.62.12.45.45,0,0,1-.15-.57c5.39-10.88,10.47-21.91,15.49-33s10-22.14,14.78-33.3c2.37-5.58,4.75-11.17,6.93-16.81a68.15,68.15,0,0,0,4.55-17.38,24.87,24.87,0,0,0-.34-8.75,7.9,7.9,0,0,0-1.89-3.6,5,5,0,0,0-1.59-1.11,10.32,10.32,0,0,0-2-.58c-2.78-.61-5.58.31-8.09,1.81a44.62,44.62,0,0,0-7.07,5.43c-4.44,4.05-8.59,8.48-12.66,13s-8,9.14-11.79,13.83c-7.67,9.4-15.15,19-22.57,28.58s-14.75,19.3-22,29q-5.48,7.29-10.87,14.62l-5.35,7.37-2.62,3.71c-.84,1.25-1.74,2.51-2.44,3.77a.45.45,0,0,1-.81-.4Z" transform="translate(-107.42 -243.06)"></path></svg>`;
		},
		m(target, anchor) {
			insert(target, div, anchor);

			if (!mounted) {
				dispose = listen(div, "mouseenter", /*runAnimation*/ ctx[0]);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self) {
	"use strict";

	var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
			? value
			: new P(function (resolve) {
						resolve(value);
					});
		}

		return new (P || (P = Promise))(function (resolve, reject) {
				function fulfilled(value) {
					try {
						step(generator.next(value));
					} catch(e) {
						reject(e);
					}
				}

				function rejected(value) {
					try {
						step(generator["throw"](value));
					} catch(e) {
						reject(e);
					}
				}

				function step(result) {
					result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
				}

				step((generator = generator.apply(thisArg, _arguments || [])).next());
			});
	};

	function runAnimation() {
		return __awaiter(this, void 0, void 0, function* () {
			for (let i = 1; i <= 7; i++) {
				let currentPath = document.getElementById("sp" + i);

				currentPath === null || currentPath === void 0
				? void 0
				: currentPath.classList.remove("cls-1");

				yield new Promise(r => setTimeout(r, 8));

				currentPath === null || currentPath === void 0
				? void 0
				: currentPath.classList.add("cls-1");
			}
		});
	}

	return [runAnimation];
}

class Signature extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default Signature;