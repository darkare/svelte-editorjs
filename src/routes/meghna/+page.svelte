<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import SimpleImage from './../../lib/components/SimpleImage';
	import SimpleCarousel from './../../lib/components/SimpleCarousel';
	import CustomBlock from './../../lib/components/CustomBlock';
	import CustomAccordionBlock from './../../lib/components/CustomAccordionBlock';
	let ssr = false;
	let editor;
	let editorData = writable({});
	let content;
	onMount(async () => {
		if (typeof window !== 'undefined') {
			const EditorJS = (await import('@editorjs/editorjs')).default;
			const Header = (await import('@editorjs/header')).default;
			const Text = (await import('@editorjs/paragraph')).default;
			const List = (await import('@editorjs/list')).default;
			const Embed = (await import('@editorjs/embed')).default;
			
			const localData = localStorage.getItem('mainpage');

			let editJsConfig = {
				holder: 'editorjs',
				autofocus: true,
				placeholder: 'Let`s write an awesome story!',
				tools: {
					textBlock: {
						class: Text,
						inlineToolbar: true,
						config: {
							placeholder: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4
http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4
http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4`
						}
					},
					header: { class: Header, inlineToolbar: true },
                    list: List,
					imageSimple: {
						class: SimpleImage,
						inlineToolbar: true
					},
					carouselSimple: SimpleCarousel,
					customBlock: CustomBlock,
					customAccordionBlock: CustomAccordionBlock,
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
			'./meghna/preview',
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
		localStorage.setItem('mainpage', JSON.stringify(content));
	}}>Save</button
>
<button on:click={openPreview}>Preview</button>

<div id="editorjs"></div>
