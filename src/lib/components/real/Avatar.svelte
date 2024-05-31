<script>
    export let data;
</script>

<div class="avatar" >
	{#if data.image}
		<img src={data.image} alt=" Image not displaying" />
	{:else}
		Avatar
	{/if}
</div>

<style>
	.avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		overflow: hidden;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		border: 1px solid black;
	}
	.avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>