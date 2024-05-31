<script>
    export let items = [];
    let activeIndex = null;

        // Function to toggle the active state of a panel
        function toggle(index) {
        if (activeIndex === index) {
            activeIndex = null; // Close the panel if it's already open
        } else {
            activeIndex = index; // Open the selected panel
        }
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
        {item.header}
        </div>
        <div
          class="accordion-content {activeIndex === index ? 'open' : ''}"
          id={"content-" + index}
          role="region"
          aria-labelledby={"header-" + index}
        >
        {item.content}
        </div>
      </div>
    {/each}
  </div>
