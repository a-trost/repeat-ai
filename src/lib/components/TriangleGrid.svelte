<!-- src/lib/components/TriangleGrid.svelte -->

<script>
	const grid = [14, 30];
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	fill="none"
	viewBox="0 0 935 425"
	class="absolute -left-2 -top-14 -z-10"
	id="triangle-grid"
	opacity={1}
	style="mask-image: linear-gradient(black, transparent);"
>
	<g class="triangle-grid-group">
		{#each Array(grid[0]) as _, i}
			{#each Array(grid[1]) as __, j}
				<path
					fill="currentColor"
					opacity=".2"
					class="triangle-grid-item"
					d={`M${j * 32 + 5},${i * 32 + 10}l-3.75,2.165l0,-4.33l3.75,2.165z`}
				/>
			{/each}
		{/each}
	</g>
</svg>
