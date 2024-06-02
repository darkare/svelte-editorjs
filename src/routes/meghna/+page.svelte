<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import SimpleImage from './../../lib/components/SimpleImage';
	import SimpleCarousel from './../../lib/components/SimpleCarousel';
	import CustomBlock from './../../lib/components/CustomBlock';
	import CustomAccordionBlock from './../../lib/components/CustomAccordionBlock';
	// import TextColor from '../../lib/components/TextColor';
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
			const TextColor = (await import('../../lib/components/TextColor')).default;
			const localData = localStorage.getItem('mainpage');

			let editJsConfig = {
				holder: 'editorjs',
				autofocus: true,
				placeholder: 'Let`s write an awesome story!',
				tools: {
					header: { class: Header, inlineToolbar: true },
                    list: List,
					imageSimple: {
						class: SimpleImage,
						inlineToolbar: true
					},
					carouselSimple: SimpleCarousel,
					customBlock: CustomBlock,
					customAccordionBlock: {class: CustomAccordionBlock, inlineToolbar: true},
					embed: {
						class: Embed,
                        inlineToolbar: true,
						config: {
							services: {
								youtube: true,
								coub: true
							}
						}
					},
					textColor: {
						class: TextColor,
						inlineToolbar: true
					},

				},
				sanitize: {
					span: {
					class: true,
					style: true
					}
				}
				// onReady: () => {
				// 	const toolbarButtons = document.querySelectorAll('.ce-inline-toolbar__button');
				// 	toolbarButtons.forEach(button => {
				// 	const toolName = button.getAttribute('data-tool');
				// 	switch (toolName) {
				// 		case 'textColor':
				// 		 editor.api.tooltip.onHover(button, 'Change text color');
				// 		 console.log('it was here');
				// 		break;
				// 		default:
				// 		break;
				// 	}
				// 	});
				// }
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