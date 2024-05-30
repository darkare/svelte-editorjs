<script>
	import { createEventDispatcher } from 'svelte';
	//  let data = { image: '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m16 8a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 8a3 3 0 1 1 3-3 3.0034 3.0034 0 0 1 -3 3z"/><path d="m16 2a14 14 0 1 0 14 14 14.0158 14.0158 0 0 0 -14-14zm-6 24.3765v-1.3765a3.0033 3.0033 0 0 1 3-3h6a3.0033 3.0033 0 0 1 3 3v1.3765a11.8989 11.8989 0 0 1 -12 0zm13.9925-1.4507a5.0016 5.0016 0 0 0 -4.9925-4.9258h-6a5.0016 5.0016 0 0 0 -4.9925 4.9258 12 12 0 1 1 15.985 0z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>' };
	//  let data = { image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="50px" height="50px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"/></svg>' };
	export let data =  { image: '' };
	export let api;

	const dispatch = createEventDispatcher();

	function generateUniqueId() {
		return 'id-' + Math.random().toString(36).substr(2, 16);
	}

	const uniqueId = generateUniqueId();

	const handleFileChange = (event) => {
		const file = event.target.files[0];
		const reader = new FileReader();

		reader.onloadend = () => {
			data.image = reader.result;
			dispatch('imageLoaded', data.image);
		};

		if (file) {
			const fileType = file.type;
			const validImageTypes = ['image/gif', 'image/jpeg', 'image/pjpeg'];

			if (validImageTypes.includes(fileType)) {
				reader.readAsDataURL(file);
			} else {
				alert('Invalid file type. Please select a JPEG or GIF image.');
			}
		}
	};

	const handleClick = (uniqueId) => {
		document.getElementById(uniqueId).click();
	};

	if (api) {
		api();
	}
</script>

<div class="avatar" on:click={()=> handleClick(uniqueId)}>
	{#if data.image}
		<img src={data.image} alt=" Image not displaying" />
		<!-- {@html data.image} -->
	{:else}
		Avatar
	{/if}
</div>
<input
	type="file"
	id={uniqueId}
	accept=".jpeg, .jpg, .gif"
	on:change={handleFileChange}
	style="display: none;"
/>

<!-- <script>
    export let data = { content: '' };
    // export let bgColor = 'white';   
    // export let textColor   = 'black';
    // export let avatarVariant = 'circle';
    // export let image = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50';
    // @ts-ignore
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            // @ts-ignore
            data.image = reader.result;
        };

        if (file) {
            const fileType = file.type;
            const validImageTypes = ['image/gif', 'image/jpeg', 'image/pjpeg'];

            if (validImageTypes.includes(fileType)) {
                reader.readAsDataURL(file);
            } else {
                alert('Invalid file type. Please select a JPEG or GIF image.');
            }
        }
    };   
  </script>
  
  <div class="avatar-block">
    <input type="file" on:change={handleFileChange} />
  </div>
  
  <style>
    .avatar-block {
      padding: 10px;
      border: 1px solid #ddd;
      margin: 5px 0;
    }
  </style> -->

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
