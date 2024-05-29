<!-- <script>
    import { writable } from 'svelte/store';
    let rows = writable([{ url: '' }]);
    let popupVisible = false;
    let currentRow = null;

    function addRow() {
        rows.update(n => [...n, { url: '' }]);
    }

    function openPopup(row) {
        currentRow = row;
        popupVisible = true;
    }

    function closePopup() {
        popupVisible = false;
    }

    function updateUrl(event) {
        currentRow.url = event.target.value;
        closePopup();
    }
</script>

<div class="custom-block">
    <table>
        {#each $rows as row, i (i)}
            <tr>
                <td>{row.url}</td>
                <td>
                    <button on:click={() => openPopup(row)}>Enter URL</button>
                    <button on:click={addRow}>Add Row</button>
                </td>
            </tr>
        {/each}
    </table>

    {#if popupVisible}
        <div class="popup">
            <input type="text" bind:value={currentRow.url} on:blur={updateUrl} autofocus />
        </div>
    {/if}
</div>

<style>
    .custom-block {
        padding: 10px;
        border: 1px solid #ddd;
        margin: 5px 0;
    }

    .popup {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .popup input {
        padding: 10px;
        font-size: 16px;
    }
</style> -->