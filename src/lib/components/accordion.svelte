<script>
    import { createEventDispatcher } from 'svelte';

    export let items = [];

    let newHeader = '';
    let newContent = '';
    let activeIndex = null;

    const dispatch = createEventDispatcher();
    
    // Function to toggle the active state of a panel
    function toggle(index) {
        if (activeIndex === index) {
            activeIndex = null; // Close the panel if it's already open
        } else {
            activeIndex = index; // Open the selected panel
        }
    }

    // Function to handle keyboard events
    function handleKeydown(event, index) {
        if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault(); // Prevent default action for space to avoid scrolling
        toggle(index);
        }
    }

    function addItem() {
        if (newHeader && newContent) {
        items = [...items, { header: newHeader, content: newContent }];
        newHeader = '';
        newContent = '';
        dispatch('update', { items });
        }
    }

    $: {
        dispatch('update', { items }); // Emit update event on any change to items
    }
</script>

<style>
    .accordion {
        /* border: 1px solid #ccc; */
        border-radius: 5px;
        margin: 10px 0;
    }

    .accordion-item {
        border-top: .5px solid #b58eff;
        border-bottom: .5px solid #b58eff;
    }

    .accordion-header {
        padding: 15px;
        cursor: pointer;
        font-weight: bold;
    }

    /* .accordion-header:hover {
        background: #e2e2e2;
    } */

    .accordion-content {
        padding: 15px;
        display: none;
        overflow: hidden;
    }

    .accordion-content.open {
        display: block;
    }
    .accordian-input, .accordian-textarea {
        border:0;
        width:100%;
    }
    .accordion-form {
        margin-top:40px;
    }
</style>

<div class="accordion">
    {#each items as item, index}
      <div class="accordion-item">
        <div
          class="accordion-header"
          tabindex="0"
          on:click={() => toggle(index)}
          on:keydown={(event) => handleKeydown(event, index)}
          role="button"
          aria-expanded={activeIndex === index}
          aria-controls={"content-" + index}
          id={"header-" + index}
        >
        <input class="accordian-input" type="text" bind:value={item.header} on:input={() => dispatch('update', { items })} />
        </div>
        <div
          class="accordion-content {activeIndex === index ? 'open' : ''}"
          id={"content-" + index}
          role="region"
          aria-labelledby={"header-" + index}
        >
        <textarea class="accordian-textarea" bind:value={item.content} on:input={() => dispatch('update', { items })}></textarea>
        </div>
      </div>
    {/each}

    <form class="accordion-form" on:submit|preventDefault={addItem}>
        <input type="text" bind:value={newHeader} placeholder="New header" />
        <textarea bind:value={newContent} placeholder="New content"></textarea>
        <button type="submit">Add Item</button>
      </form>
  </div>
