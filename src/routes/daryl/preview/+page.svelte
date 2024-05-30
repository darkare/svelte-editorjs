<script>
	import { onMount } from 'svelte';
	import Paragraph from '$lib/components/real/Paragraph.svelte';
    import Header from '$lib/components/real/Header.svelte';
	let data;
	onMount(async () => {
		if (typeof window !== 'undefined') {
			const localData = localStorage.getItem('daryl');
			if (localData) {
				data = JSON.parse(localData);
				console.log('data', data);
			}
		}
	});
</script>

{#if data && data.blocks}
	{#each data.blocks as block (block.id)}
		{JSON.stringify({ type: block.type, data: block.data })}
		{#if block.type === 'paragraph'}
			<Paragraph data={block.data} />
		{/if}
        {#if block.type === 'header'}
			<Header data={block.data} />
		{/if}
	{/each}
{/if}
This is to preview the page in using the real components
