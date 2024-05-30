<script>
    export let data;
</script>

{#if data && data.level}
    {#if data.level === 1}
        <h1>{data.text}</h1>
    {:else if data.level === 2}
        <h2>{data.text}</h2>
    {:else if data.level === 3}
        <h3>{data.text}</h3>
    {:else if data.level === 4}
        <h4>{data.text}</h4>
    {:else if data.level === 5}
        <h5>{data.text}</h5>
    {:else if data.level === 6}
        <h6>{data.text}</h6>
    {/if}
{/if}