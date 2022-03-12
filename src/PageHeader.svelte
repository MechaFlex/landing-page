<script lang='typescript'>
	import { getContext } from "svelte";
	import Signature from "./Signature.svelte";
	import { firstPageHeader } from "./stores";

	let headerValue = true;

	firstPageHeader.subscribe(val => {
		headerValue = val
	})

	const {scrollToSlide} = getContext('scroller')
</script>
  
<style>

	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 6em;
		display: flex;
		justify-content: center;
		color: white;
		font-family: Oxygen, 'sans serif';
		z-index: 1000;
	}

	.headerBackground {
		position: absolute;
		width: 100%;
		height: 100%;
		background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 100%);
		transition: opacity 500ms;
	}

	.headerWidth {
		gap: clamp(2em, 10vw, 15em);
		width: auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.signatureWrapper {
		position: relative;
		width: 90px;
	}

	.signatureWrapper:hover {
		cursor: pointer;
	}

	.headerItem {
		position: relative;
		display: inline-block;
		font-size: 1.2em;
		animation: reveal 2s;
		animation-delay: calc(var(--reveal-delay) * 0.5s + 2.5s);
		animation-fill-mode: backwards;
		user-select: none;
		transition: opacity 500ms, color 500ms;
		width: 90px;
		text-align: center;
	}

	.headerItem:hover {
		color: var(--signaturecolor);
		opacity: 0.7;
		transition: opacity 200ms, color 200ms;
		cursor: pointer;
	}

	@keyframes reveal {
		from {
			color: rgba(255, 255, 255, 0);
		}
		to {
			color: var(--signaturecolor);
		}	
	}

	.headerAltColors {
		color: black;
	}

</style>
  
<div>
	<div class="{`header ${headerValue && "headerAltColors"}`}">
	<div style="{` ${headerValue && "opacity: 0"}`}" class="headerBackground"></div>
		<div class="headerWidth">
			<div style="{` filter: invert(0%); transition: filter 500ms; ${headerValue && "filter: invert(100%);"}`}" class="signatureWrapper" on:click="{() => scrollToSlide()}">
				<Signature/>
			</div>
			<!-- <span style="--reveal-delay: 0;" class="headerItem" on:click="{() => scrollToSlide(1)}">Me</span> -->
			<span style="--reveal-delay: 0;" class="headerItem" on:click="{() => scrollToSlide(1)}">Projects</span>
			<span style="--reveal-delay: 1;" class="headerItem" on:click="{() => scrollToSlide(2)}">Reach</span>
		</div>
	</div>
</div>