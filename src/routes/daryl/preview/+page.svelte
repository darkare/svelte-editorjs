<script>
    import { onMount } from 'svelte';
    import Paragraph from '$lib/components/real/Paragraph.svelte';
    import Header from '$lib/components/real/Header.svelte';
    import Avatar from '$lib/components/real/Avatar.svelte';
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

<style>
    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .avatars {
        grid-column: 1;
    }
    .texts {
        grid-column: 2;
    }
</style>

<h3>This is to preview the page in using the real components</h3>
<hr /> <!-- Line divider -->
<div class="grid">
    <div class="avatars">
        {#if data && data.blocks}
            {#each data.blocks as block (block.id)}
                {#if block.type === 'avatar'}
                    <Avatar data={block.data} />
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