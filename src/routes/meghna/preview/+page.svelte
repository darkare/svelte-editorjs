<script>
    import { onMount } from 'svelte';
    import Paragraph from '$lib/components/real/Paragraph.svelte';
    import Header from '$lib/components/real/Header.svelte';
    import Accordion from '$lib/components/real/Accordion.svelte';
    let data;
    onMount(async () => {
        if (typeof window !== 'undefined') {
            const localData = localStorage.getItem('mainpage');
            if (localData) {
                data = JSON.parse(localData);
                console.log('data', data);
            }
        }
    });
</script>

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .accordions {
        grid-column: 1;
    }
    .texts {
        grid-column: 2;
    }
</style>

<h3>This is to preview the page in using the real components</h3>
<hr /> <!-- Line divider -->
<div class="grid">
    <div class="accordions">
        {#if data && data.blocks}
            {#each data.blocks as block (block.id)}
                {#if block.type === 'customAccordionBlock'}
                    <Accordion items={block.data.items} />
                {/if}
            {/each}
        {/if}
    </div>
    <div class="texts">
        {#if data && data.blocks}
            {#each data.blocks as block (block.id)}
                {#if block.type === 'paragraph'}
                    <Paragraph data={block.data} />
                {/if}
                {#if block.type === 'header'}
                    <Header data={block.data} />
                {/if}
            {/each}
        {/if}
    </div>
</div>