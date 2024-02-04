<script lang='typescript'>
	import Me from "./Me.svelte";
	import PageHeader from "./PageHeader.svelte";
	import FirstImage from "./FirstImage.svelte";
	import { firstPageHeader } from "./stores";
	import { setContext } from "svelte";
	import Projects from "./Projects.svelte";
	import Reach from "./Reach.svelte";

	let scrollBuffer: boolean = true;
	function scrollHandler(e: WheelEvent) {
		e.preventDefault();
		if (!scrollBuffer) return;

		scrollToSlide( (e.deltaY > 0 ? 1 : -1) , true);

		scrollBuffer = false;
		setTimeout(() => {
			scrollBuffer = true;
		}, 300);
	}

	export function scrollToSlide(index: number = 0, relative: boolean = false) {
		if (relative) {
			firstPageHeader.set(getCurrentSlideIndex() + index > 0)
			window.scroll({
				top: window.innerHeight * (getCurrentSlideIndex() + index),
				behavior: "smooth",
			});
		} else {
			firstPageHeader.set(index > 0)
			window.scroll({
				top: window.innerHeight * index,
				behavior: "smooth",
			});
		}
	}

	function getCurrentSlideIndex(): number {
		return Math.floor(window.scrollY / window.innerHeight);
	}

	setContext('scroller', {scrollToSlide})
</script>


<svelte:window on:wheel|nonpassive={scrollHandler} />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
	:root {
		font-family: 'Lato', 'sans serif';
		color: white;

		--signaturecolor: white;
	}

	#stack {
		position: absolute;
		height: 300vh;
		display: flex;
		flex-direction: column;
	}
</style>
  
<div>
	<PageHeader/>
	<div id="stack">
		<FirstImage/>
      <!-- <Me/> -->
		<Projects/>
		<Reach/>
	</div>
</div>