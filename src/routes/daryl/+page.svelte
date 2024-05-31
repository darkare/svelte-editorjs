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
	// import SimpleImage from './../../lib/components/SimpleImage';
	import { writable } from 'svelte/store';
	import { logApple, convertToAppleNewsFormat } from '$lib/components/apple';

	import AvatarBlock from './Avatar';
	// let ssr = false;
	let editor;
	let content;
	onMount(async () => {
		if (typeof window !== 'undefined') {
			const localData = localStorage.getItem('daryl');

			const EditorJS = (await import('@editorjs/editorjs')).default;
			const Header = (await import('@editorjs/header')).default;
			// const ImageTool = (await import('@editorjs/image')).default;
			// const Text = (await import('@editorjs/paragraph')).default;
			const List = (await import('@editorjs/list')).default;
			const Embed = (await import('@editorjs/embed')).default;
			// const AvatarBlockBlock = (await import (./AvatarBlock';
			// const ImageTool = (await import('@editorjs/ImageTool')).default;
			const SimpleImage = (await import('@editorjs/simple-image')).default;
			const Checklist = (await import('@editorjs/checklist')).default;
			// console.log('simpleimage', SimpleImage)
			let editJsConfig = {
				holder: 'editorjs',
				autofocus: true,
				// placeholder: 'Let`s write an awesome story!',
				tools: {
					image: SimpleImage,
					avatar: AvatarBlock,
					header: { class: Header, inlineToolbar: true },
					list: List,
					Checklist: Checklist,
					embed: {
						class: Embed,
                        inlineToolbar: true,
						config: {
							services: {
								youtube: true,
								coub: true
							}
						}
					}
					
					// image: {
					// 	class: ImageTool,
					// 	config: {
					// 		endpoints: {
					// 			endpoints: {
					// 				byFile: 'http://localhost:5173/uploadFile', // Your backend file uploader endpoint
					// 				byUrl: 'http://localhost:5173/fetchUrl' // Your endpoint that provides uploading by Url
					// 			}
					// 		}
					// 	}
					// }
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
<button on:click={async() => {
	content = await editor.saver.save();
	convertToAppleNewsFormat(content)}}>Convert to Apple News Format</button>
<hr />
<div id="editorjs"></div>
