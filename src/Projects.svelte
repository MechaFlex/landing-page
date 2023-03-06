<script lang='typescript'>
	interface Project {
		title: string,
		text: string,
		url: string,
        imgurl: string
	}

	const projects: Project[] = [
		{
            title: "Bingo",
            text: "Bingo is an online bingo board with two teams made for speedrun bingo races. It's made with vanilla JS and runs on a Node Express server.",
            url: "http://bingo.drake.ee",
            imgurl: "bingo.jpg"
        },
		{
            title: "Sort",
            text: "This website let's you sort any list using the merge sort algorithm. The twist is that you do all the comparisons yourself. It is the first project I made using Svelte.",
            url: "http://sort.drake.ee",
            imgurl: "sort.jpg"
        },
        {
            title: "Hanna Abrahamsson",
            text: "This is a webpage I made for a cross country skier. It's built using vanilla HTML, CSS and JS as well as some PHP.",
            url: "https://hannaabrahamsson.se",
            imgurl: "hanna.jpg"
        },
		{
            title: "Top List",
            text: "This was the second webpage I made during the second half of the web development course. It is made using vanilla HTML and CSS and jQuery with PHP to save the list.",
            url: "http://topplista.drake.ee",
            imgurl: "topplista.jpg"
        },
        {
            title: "Minecraft",
            text: "This was the first webpage I made during the first half of the web development course at GKC. Made using HTML and CSS.",
            url: "http://minecraft.drake.ee",
            imgurl: "minecraft.jpg"
        }
    ]
</script>
    
<style>
    .prWrapper {
		display: flex;
		justify-content: center;
		width: 100vw;
		height: 100vh;
		background-color: #fafafa;
	}

	.prGrid {
		margin-top: 100px;
        width: 90%;
        height: 85%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(min(40vw, 350px), 1fr));
        grid-auto-rows: 1fr;

		gap: 1em;
	}

	.prGrid > * {
        position: relative;
		border-radius: 15px;
		box-shadow: 0px 2px 60px rgba(0, 0, 0, 0.07);
		overflow: hidden;
		background-color: white;
	}

    .prGridElement {
        padding: 15px;
        text-decoration: none;
        height: auto;
    }

    .prTitle {
		display: inline-block;
		font-weight: bold;
		color: black;
		font-size: clamp(0.5em, 4vw, 1.5em);
		margin-bottom: 8px;
	}

    .prText {
        color: #444;
        font-size: clamp(0.3em, 3vw, 1em);
    }

    .prOverlay {
        top: 0;
        left: 0;
        position: absolute;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        display: grid;
        place-items: center;

        transition: opacity 800ms;
    }

    .prOverlay:hover {
        opacity: 0%;
        transition: opacity 300ms;
    }

    .prOverlayTitle {
        color: white;
        text-decoration: none;
        font-size: clamp(1.5em, 3vw, 4em);
        font-weight: bold;
        text-shadow: 4px 4px 10px rgba(0, 0, 0, 1);
        text-align: center;
    }

</style>

<div>
    <div class="prWrapper">
		<div class="prGrid">
			{#each projects as project}
				<a class="prGridElement" href="{project.url}">
					<div class="prTitle">{project.title}</div>
                    <div class="prText">{project.text}</div>
                    <div style="{`background-image: url(Images/Projects/${project.imgurl});`}" class="prOverlay">
                        <div class="prOverlayTitle">{project.title}</div>
                    </div>
                </a>
			{/each}
		</div>
	</div>
</div>
