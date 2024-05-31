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
	import { writable } from 'svelte/store';
	import SimpleImage from './../lib/components/SimpleImage';
	import SimpleCarousel from './../lib/components/SimpleCarousel';
	import CustomBlock from './../lib/components/CustomBlock';
	import CustomAccordionBlock from './../lib/components/CustomAccordionBlock';
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
			// const ImageTool = (await import('@editorjs/ImageTool')).default;
			
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
					//imageSimple: SimpleImage,
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

// 			editor = new EditorJS({
// 				holder: 'editorjs',
// 				autofocus: true,
// 				placeholder: 'Let`s write an awesome story!',
// 				tools: {
// 					textBlock: {
// 						class: Text,
// 						inlineToolbar: true,
// 						config: {
// 							placeholder: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4
// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4
// http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4`
// 						}
// 					},
// 					header: { class: Header, inlineToolbar: true },
//                     list: List,
// 					//imageSimple: SimpleImage,
// 					imageSimple: {
// 						class: SimpleImage,
// 						inlineToolbar: true
// 					},
// 					carouselSimple: SimpleCarousel,
// 					customBlock: CustomBlock,
// 					customAccordionBlock: CustomAccordionBlock,
// 					embed: {
// 						class: Embed,
//                         inlineToolbar: true,
// 						config: {
// 							services: {
// 								youtube: true,
// 								coub: true
// 							}
// 						}
// 					}
// 				},
// 				data: {
// 					time: 1552744582955,
// 					blocks: [
// 						{
// 							type: "imageSimple",
// 							data: {
// 							url: "https://cdn.pixabay.com/photo/2017/09/01/21/53/blue-2705642_1280.jpg",
// 							caption: 'Here is a caption field',
// 							withBorder: true,
// 							withBackground: false,
// 							stretched: false
// 							}
// 						},
// 						{
// 							type: 'customAccordionBlock',
// 							data: {
// 							items: [
// 								{ header: 'Section 1', content: 'Content for section 1.' },
// 								{ header: 'Section 2', content: 'Content for section 2.' },
// 								{ header: 'Section 3', content: 'Content for section 3.' },
// 							],
// 							},
// 						}
// 					],
// 					version: "2.11.10"
// 				}
// 			});
		}
	});
</script>

<h1>Welcome to EditorJs</h1>
<button
	on:click={async () => {
		content = await editor.saver.save();
		console.log('Saved content', content);
		localStorage.setItem('mainpage', JSON.stringify(content));
	}}>Save</button
>
<div id="editorjs"></div>
