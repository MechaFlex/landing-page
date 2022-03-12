<script lang="typescript">
import { getContext } from "svelte";


	const {scrollToSlide} = getContext('scroller')
</script>

<div>
	<div id="mainImage">
		<div id="textContainer">
			<div class="parallelogram">
				<p />
				<p>Hi there</p>
			</div>
			<div class="parallelogram">
				<p>Hi there</p>
				<p>I'm Jacob</p>
			</div>
			<div class="parallelogram">
				<p>I'm Jacob</p>
				<p>I study IT</p>
			</div>
			<div class="parallelogram">
				<p>I study IT</p>
				<p>at CTH</p>
			</div>
		</div>
		<div on:click={() => scrollToSlide(1)} id="downArrow" />
	</div>
</div>

<style>
	#mainImage {
		position: relative;
		background-image: url("Images/buske2k.jpg");
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		width: 100vw;
		height: 100vh;
		z-index: 10;
		bottom: 0px;
	}

	#textContainer {
		opacity: 100%;
		position: absolute;
		left: 7%;
		top: 33%;
	}

	.parallelogram {
		position: relative;
		font-weight: 800;
		background-color: rgba(0, 0, 0, 0.8);
		padding: 0 30px 0 30px;
		text-transform: uppercase;
		overflow: hidden;
		height: 70px;
		/*box-shadow: -10px 10px 50px rgba(0, 0, 0, 0.753);*/
	}

	p {
		margin: 0;
		height: 70px;
		line-height: 70px;
		font-size: 70px;
		transition: all 0.2s ease-in-out;
	}

	#textContainer:hover p {
		transform: translate(0, -70px);
	}

	.parallelogram:nth-child(even) {
		transform: skew(60deg, -30deg) scaleY(0.667);
	}

	.parallelogram:nth-child(odd) {
		transform: skew(0deg, -30deg) scaleY(1.333);
	}

	.parallelogram:nth-child(1) {
		background: none;
		box-shadow: none;
	}

	.parallelogram:nth-child(2) {
		left: 40px;
		background-color: hsla(229, 54%, 30%, 0.7);
	}

	.parallelogram:nth-child(3) {
		left: 80px;
		background-color: hsla(229, 54%, 20%, 0.7);
	}

	.parallelogram:nth-child(4) {
		left: 120px;
		background-color: hsla(229, 54%, 10%, 0.7);
	}

	#downArrow {
		position: absolute;
		bottom: 3%;
		left: 50%;
		background-image: url("Images/Down Arrow.svg");
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 55px;
		height: 55px;
		filter: invert(1) drop-shadow(0px 0px 5px rgba(0, 0, 0, 1));
		opacity: 0.85;
		z-index: 11;
		transition: opacity 0.1s ease-in-out;

		animation: arrowBump 6s;
		animation-iteration-count: infinite;
	}

	#downArrow:hover {
		cursor: pointer;
		opacity: 1;
		transition: opacity 0.1s ease-in-out;
	}

	@keyframes arrowBump {
		0% {
			transform: translateY(0px) translateX(-50%);
		}
		70% {
			transform: translateY(0px) translateX(-50%);
		}
		75% {
			transform: translateY(10px) translateX(-50%);
		}
		85% {
			transform: translateY(0px) translateX(-50%);
		}
		90% {
			transform: translateY(10px) translateX(-50%);
		}
		100% {
			transform: translateY(0px) translateX(-50%);
		}
	}
</style>
