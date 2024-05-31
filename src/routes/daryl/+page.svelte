<script>
	import { onMount } from 'svelte';
	// import EditorJS from '@editorjs/editorjs';
	// import Header from '@editorjs/header';
	// import List from '@editorjs/list';
	// import ImageTool from '@editorjs/image';
	// import Embed from '@editorjs/embed';
	// import Quote from '@editorjs/quote';
	// import CodeTool from '@editorjs/code';
	// import LinkTool from '@editorjs/link';
	// import Marker from '@editorjs/marker';
	// import InlineCode from '@editorjs/inline-code';
	// import Delimiter from '@editorjs/delimiter';
	// import Table from '@editorjs/table';
	// import Warning from '@editorjs/warning';
	// import Paragraph from '@editorjs/paragraph';
	// import Raw from '@editorjs/raw';
	// import Checklist from '@editorjs/checklist';
	// import SimpleImage from '@editorjs/simple-image';
	import { writable } from 'svelte/store';

	import AvatarBlock from './Avatar';
	// let ssr = false;
	let editor;
	let editorData = writable({});
	let content;
	onMount(async () => {
		if (typeof window !== 'undefined') {
			const localData = localStorage.getItem('daryl');

			const EditorJS = (await import('@editorjs/editorjs')).default;
			const Header = (await import('@editorjs/header')).default;
			// const Text = (await import('@editorjs/paragraph')).default;
			const List = (await import('@editorjs/list')).default;
			// const Embed = (await import('@editorjs/embed')).default;
			// const AvatarBlockBlock = (await import (./AvatarBlock';
			// const ImageTool = (await import('@editorjs/ImageTool')).default;
			let editJsConfig = {
				holder: 'editorjs',
				autofocus: true,
				placeholder: 'Let`s write an awesome story!',
				tools: {
					avatar: AvatarBlock,
					header: { class: Header, inlineToolbar: true },
					list: List
				}
			};
			if (localData) {
				editJsConfig.data = JSON.parse(localData);
			}

			editor = new EditorJS(editJsConfig);
		}
	});
	function openPreview() {
		const width = 800;
		const height = 600;
		const left = (window.screen.width - width) / 2;
		const top = (window.screen.height - height) / 2;

		window.open(
			'./daryl/preview',
			'_blank',
			`height=${height},width=${width},top=${top},left=${left}`
		);
	}
</script>

<h1>Welcome to EditorJs</h1>
<button
	on:click={async () => {
		content = await editor.saver.save();
		console.log('Saved content', content);
		localStorage.setItem('daryl', JSON.stringify(content));
	}}>Save</button
>
<button on:click={openPreview}>Preview</button>
<hr />
<div id="editorjs"></div>
