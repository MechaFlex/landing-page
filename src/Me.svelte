<script lang='typescript'>
import { each } from "svelte/internal";

	interface Interest {
		title: string,
		text: string,
		imgurl: string
	}

	const interests: Interest[] = [
		{
			title: "Film and digital media",
			text: "I've always found it fun to film and edit short movies, which has expanded to all forms of digital media. I enjoy all aspects of creating in the digital world: creating music, working with audio as well as digital design and illustrations. I wish could spend more time in these areas.",
			imgurl: "Images/edited-3980.jpg"
		},
		{
			title: "Programming",
			text: "Another passion of mine is programming. Programming really makes your brain work and is much more precise than other creative areas. You can find some of my projects on this website. This website is also a project, all self hosted on my own Raspberry Pi.",
			imgurl: "Images/code.png"
		},
		{
			title: "NollKIT",
			text: "I'm currently a part of the reception committee for the Software engineering program at Chalmers University of Technology. It's like nothing I've done before and really tests ones cooperation, leadership and planning skills.",
			imgurl: "Images/crop_2853.jpg"
		}
	]
</script>
  
<style>
	.meWrapper {
		display: flex;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		background-color: #fafafa;
	}

	.meGrid {
		margin-top: 100px;
		width: 70%;
		height: 80%;
		display: grid;
		grid-template-rows: 2fr 1fr;
		grid-template-columns: 1fr 1fr 1fr;

		gap: 25px;
	}

	.meGrid > * {
		border-radius: 15px;
		box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.07);
		overflow: hidden;
		background-color: white;
	}

	.me {
		grid-column: 1 / 4;
		color: black;
		overflow: hidden;

		display: grid;
		grid-template-columns: 1fr 2fr;
	}

	.meImage {
		height: 100%;
		background-image: url("Images/centered-4694.jpg");
		background-position-x: center;
		background-size: cover;
		background-repeat: no-repeat;
		transform: rotateY(180deg);
	}

	.meText {
		padding: 50px;
	}

	.meInterest {
		font-size: 14px;
		color: #444;
		position: relative;
		
		display: grid;
		grid-template-columns: 5.5fr 4.5fr;
	}

	.meInterestContainer {
		padding: 15px;
	}

	.meInterestTitle {
		display: inline-block;
		font-weight: bold;
		color: black;
		font-size: 20px;
		margin-bottom: 8px;
	}

	.meInterestImage {
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.meInterestGradient {
		height: 4px;
		border-radius: 4px;
		margin-bottom: 6px;
		margin-left: -3px;
		margin-right: -3px;
	}

	.meGrid > :nth-child(2) > :nth-child(1) > :nth-child(2) {
		background: linear-gradient(135deg, rgb(52, 224, 0) 0%, rgb(12, 141, 0) 100%);
	}

	.meGrid > :nth-child(3) > :nth-child(1) > :nth-child(2) {
		background: linear-gradient(135deg, rgb(255, 145, 0) 0%, rgb(255, 0, 0) 100%);
	}

	.meGrid > :nth-child(4) > :nth-child(1) > :nth-child(2) {
		background: linear-gradient(135deg, #11dceb 0%, #077bc9 100%);
	}
</style>


<div>
	<div class="meWrapper">
		<div class="meGrid">
			<div class="me">
				<div class="meImage"></div>
				<div class="meText">My name is Jacob and I'm a 19 year old guy living in Gothenburg, Sweden. I'm currently finishing up my first year at the Software Engineering program at Chalmers University of Technology.</div>
			</div>
			{#each interests as interest}
				<div class="meInterest">
					<div class="meInterestContainer">
						<span class="meInterestTitle">{interest.title}</span>
						<div class="meInterestGradient"></div>
						<div class="meInterestText">{interest.text}</div>
					</div>
					<div style="background-image: url({interest.imgurl});" class="meInterestImage"></div>
				</div>
			{/each}
		</div>
	</div>
</div>

