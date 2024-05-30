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
			const EditorJS = (await import('@editorjs/editorjs')).default;
			const Header = (await import('@editorjs/header')).default;
			// const Text = (await import('@editorjs/paragraph')).default;
			const List = (await import('@editorjs/list')).default;
			// const Embed = (await import('@editorjs/embed')).default;
			// const AvatarBlockBlock = (await import (./AvatarBlock';
			// const ImageTool = (await import('@editorjs/ImageTool')).default;

			editor = new EditorJS({
				holder: 'editorjs',
				autofocus: true,
				placeholder: 'Let`s write an awesome story!',
				tools: {
					avatar: AvatarBlock,
// 					textBlock: {
// 						class: Text,
// 						inlineToolbar: true,
// 						config: {
// 							placeholder: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4
// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4
// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4`
// 						}
// 					},
					header: { class: Header, inlineToolbar: true },
                    list: List,
					// imageSimple: SimpleImage,
					// carouselSimple: SimpleCarousel,
					
					
					// image: ImageTool,

					// quote: Quote,
					// code: CodeTool,
					// link: LinkTool,
					// marker: Marker,
					// inlineCode: InlineCode,
					// delimiter: Delimiter,
					// table: Table,
					// warning: Warning,
					// paragraph: Paragraph,
					// raw: Raw,
					// checklist: Checklist,
					// simpleImage: SimpleImage
				}
				// @ts-ignore
				// onChange: async(api, data) => {
				// let content = await editor.saver.save();
				// console.log('content-111', content);
				//     editorData.set(data);
				// }
			});
		}
	});
</script>

<h1>Welcome to EditorJs</h1>
<button
	on:click={async () => {
		content = await editor.saver.save();
		console.log('Saved content', content);
		localStorage.setItem('daryl', JSON.stringify(content));
	}}>Save</button
>
<div id="editorjs"></div>
