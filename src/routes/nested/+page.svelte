<script>
	import { onMount } from 'svelte';
	import { readyPromises } from '$lib/components/real/global';
	// import pkg from 'lodash';
	// const { debounce } = pkg;
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
	// import { writable } from 'svelte/store';
	// import { logApple, convertToAppleNewsFormat } from '$lib/components/apple';

	// import AvatarBlock from '../daryl/Avatar';

	// let ssr = false;

	const initialData =
		'Ex nostrud dolor adipisicing aliqua qui sit laboris laborum velit exercitation est velit commodo quis. Proident non dolore consequat sit deserunt nisi consequat irure tempor do minim tempor eiusmod. Ut officia dolore duis aliquip tempor. Magna eu tempor sint enim. Officia minim esse consectetur exercitation nulla proident nisi reprehenderit. Ea id dolore consectetur nostrud sint consectetur ullamco et non ad sint anim. Pariatur deserunt id veniam fugiat dolore minim enim quis nulla dolore. Sit enim fugiat laborum fugiat reprehenderit cillum excepteur laboris labore. Incididunt nostrud ad laboris do ullamco dolore irure dolor nisi officia pariatur Lorem laboris minim. Amet cupidatat ipsum dolore nulla laboris exercitation amet nulla eiusmod nostrud nostrud ea aliquip officia. Adipisicing anim enim ipsum deserunt voluptate exercitation sit nostrud. Culpa aute minim ut quis aliqua dolore do irure do. Cillum adipisicing laborum quis eiusmod elit nulla eiusmod enim anim. Adipisicing est ex aliqua aliquip nulla occaecat minim do ea ea elit nostrud nisi veniam. Reprehenderit esse qui aliquip commodo. Dolor velit laborum ipsum sunt. Quis officia sit officia sint laborum incididunt aliquip duis ut. Ipsum dolor anim sunt veniam aliqua consectetur dolor quis labore officia culpa. Ex id occaecat non anim. Laboris cupidatat laboris nulla cupidatat. Proident eiusmod sunt ex ut consectetur culpa est eu aliquip. Excepteur incididunt labore ullamco consequat excepteur nulla nostrud officia. Do eu ut sit ullamco. Sint anim deserunt eu qui qui mollit aliqua non et esse cupidatat ea. Pariatur proident fugiat officia ad magna Lorem officia commodo aliqua. Elit consectetur pariatur aute excepteur quis irure esse magna nostrud ad. Culpa cupidatat culpa nisi laboris. Culpa fugiat do laboris sit fugiat. Nisi velit sunt ipsum non incididunt consectetur adipisicing sint. Nulla ipsum laboris aute qui ipsum sunt. Duis veniam duis qui ullamco irure ea deserunt ut veniam nisi. Pariatur sunt eiusmod amet cupidatat est ex minim id tempor commodo aliqua id commodo. Sint mollit fugiat do amet qui tempor id. Commodo eiusmod consectetur deserunt duis voluptate in cillum magna ea. Enim elit aute anim sunt. Laborum ipsum pariatur ex pariatur exercitation mollit reprehenderit culpa anim Lorem eiusmod aute minim sunt. Proident minim magna irure incididunt. Amet cupidatat labore voluptate sint magna nulla. Ipsum ut cupidatat dolor commodo exercitation reprehenderit sunt qui eu Lorem consequat culpa. Tempor magna cillum nisi occaecat commodo dolore esse. Esse irure irure aliquip fugiat cupidatat est in qui commodo culpa nulla quis do. Lorem ea incididunt ad non aliqua sunt enim consequat aliquip. Et nostrud dolore sint aliquip labore aute id laboris minim velit proident velit officia. Veniam aute culpa incididunt ullamco. Pariatur eu est ad minim exercitation. Est laboris sunt cillum sint ea et nostrud ipsum. Do adipisicing voluptate Lorem duis sint aliqua quis enim anim ea adipisicing ea. Tempor cillum sunt dolor duis adipisicing et mollit in. Qui eu reprehenderit sint sint commodo sit exercitation consequat cillum esse eiusmod. Qui nulla sit in consectetur do. Magna aliqua velit dolore minim nisi cupidatat minim. Id excepteur labore sunt proident culpa dolor adipisicing aliquip ullamco ad cupidatat minim. Cillum veniam dolor laboris nostrud aliquip ullamco ea est aute incididunt ullamco. Proident anim aute anim sunt dolore eiusmod cupidatat nulla anim consectetur duis sunt laboris. Tempor ex voluptate commodo ullamco duis sint anim mollit cupidatat reprehenderit ullamco minim do. Ullamco in consequat commodo est sint nisi aliqua cillum. Consequat do nulla fugiat velit proident laboris Lorem esse. Fugiat cupidatat pariatur commodo occaecat ad eu veniam. Cillum duis nulla cillum excepteur magna sit magna aute nisi enim id ipsum. Excepteur veniam ullamco amet non do tempor dolore in laborum minim et officia. Velit non reprehenderit duis sint esse labore dolor reprehenderit consectetur elit labore cillum sint irure.';
	const headerData = { text: 'Header', level: 2 };
	const listData = { items: ['line 1', 'line 2', 'line 3', 'line 4', 'line 5'], style: 'ordered' };
	// const updateToData =
	// 'In tempor amet laborum sint exercitation sit ea anim dolore sit proident non cupidatat. Ea nulla irure velit anim occaecat exercitation cupidatat et mollit irure laboris voluptate elit sunt. Dolor proident ea voluptate culpa fugiat occaecat consectetur amet mollit culpa amet incididunt id nisi. Dolore dolore consequat culpa nulla exercitation Lorem aliquip fugiat incididunt laborum anim esse nostrud do. Sit nulla enim nulla irure incididunt eu anim id esse minim. Ad nisi proident ex exercitation adipisicing aliqua sint. Est ea dolor commodo nulla officia Lorem ipsum dolore ut. Adipisicing sint consequat labore id veniam. Proident minim laborum cupidatat excepteur excepteur consequat nulla occaecat ut. Consectetur duis consectetur ullamco consequat adipisicing sit deserunt commodo fugiat et fugiat minim reprehenderit. Aute irure est dolore sunt qui adipisicing exercitation qui eiusmod veniam fugiat mollit. Ipsum magna tempor nostrud ullamco. Occaecat aliqua non pariatur amet ex exercitation deserunt culpa in ex officia elit. Dolor exercitation exercitation culpa nostrud amet consectetur aute Lorem cupidatat aliquip exercitation dolor. Anim quis officia eiusmod qui. Ipsum proident qui laboris qui voluptate enim Lorem quis culpa nulla ex qui amet. Eiusmod laboris occaecat excepteur laboris duis ad proident Lorem esse laboris irure voluptate adipisicing id. Ad eu sunt laborum ut sint. Incididunt enim Lorem aliqua esse ea ad est sunt dolor. Quis et aliqua reprehenderit aliquip quis. Ad reprehenderit et excepteur mollit elit Lorem aliquip consequat anim aliqua est. Minim elit consequat irure officia eiusmod. Nostrud sit eu culpa adipisicing nostrud cillum fugiat dolor et aliqua ad cillum. Labore incididunt occaecat ad ex duis laborum do mollit occaecat adipisicing excepteur anim. Ullamco non cupidatat nisi cillum nisi proident ex officia commodo nulla amet enim mollit voluptate. Aute consectetur Lorem sint mollit occaecat ullamco ea aliquip. Dolore quis labore eiusmod duis exercitation adipisicing in nostrud. Sunt ex proident cillum est consequat proident ut. Eu ut ex nostrud eu laboris sunt cillum et. Id ex laboris incididunt cillum esse. Ad eiusmod ex consectetur aute ullamco consequat ex dolor incididunt mollit. Aute duis exercitation nulla consectetur veniam ea excepteur commodo non irure proident commodo reprehenderit nostrud. Nisi magna laboris consequat dolor consequat exercitation. Eu cillum occaecat velit eu amet pariatur occaecat laborum et sunt ea in. Ea aute adipisicing enim occaecat officia aute minim consectetur dolore magna quis. Ut et ut occaecat duis est deserunt velit magna in exercitation reprehenderit laboris ex. Laborum do mollit id quis exercitation culpa excepteur veniam occaecat enim est consequat. Cillum id Lorem labore occaecat ullamco. Dolore exercitation incididunt sunt proident irure aliqua amet minim excepteur non aliquip irure Lorem. Qui ad labore sit incididunt eu est consectetur cupidatat ut cillum exercitation aliquip. Sit anim voluptate adipisicing dolore consectetur veniam consectetur sint dolore occaecat voluptate occaecat. Adipisicing occaecat fugiat commodo ex fugiat tempor ut esse proident nisi ad consequat nisi pariatur. Laborum id aute commodo fugiat. Mollit adipisicing fugiat duis velit minim et Lorem ea. Culpa et laboris laboris enim. Cupidatat incididunt excepteur ea aute. Proident nulla eiusmod laborum minim ad qui fugiat. Commodo reprehenderit pariatur reprehenderit fugiat nulla ut. Amet sunt aliquip qui minim culpa reprehenderit aliqua proident occaecat nulla culpa voluptate reprehenderit. Sit enim duis excepteur anim culpa proident cupidatat reprehenderit culpa reprehenderit ut deserunt aliquip. Irure cupidatat voluptate id reprehenderit ad consequat commodo deserunt cupidatat veniam fugiat deserunt. Dolore duis magna et voluptate quis ea nisi elit cupidatat est nostrud amet pariatur.';
	const MAX_ROW = 50;
	const MAX_NESTED = 20
	const nestedObject = { type: 'nestedEditor', data: {} };
	const nestedArray = Array(MAX_NESTED).fill(nestedObject);

	let rows = Array(MAX_ROW).fill(0);
	// let editors = new Array(MAX_ROW);
	let editors = [];
	let content;
	// let textContent = updateToData;
	// async function changeData() {
	// 	let startChangeTime = performance.now();
	// 	for (let editor of editors) {
	// 		await editor.clear();
	// 		await editor.blocks.insert('paragraph', { text: textContent });
	// 	}
	// 	let endChangeTime = performance.now();
	// 	let changeTime = endChangeTime - startChangeTime;
	// 	console.log(`Data change time: ${changeTime}ms`);
	// }
	onMount(async () => {
		if (typeof window !== 'undefined') {
			// const localData = localStorage.getItem('nested-123');
			// console.log(localData);
			const EditorJS = (await import('@editorjs/editorjs')).default;
			const Header = (await import('@editorjs/header')).default;
			// const ImageTool = (await import('@editorjs/image')).default;
			// const Text = (await import('@editorjs/paragraph')).default;
			const List = (await import('@editorjs/list')).default;
			// const Embed = (await import('@editorjs/embed')).default;
			// const SimpleImage = (await import('@editorjs/simple-image')).default;
			const Checklist = (await import('@editorjs/checklist')).default;
			const NestedEditor = (await import('./NestedEditor')).default;
			// console.log('simpleimage', SimpleImage)
			const dataBlocks = [];
			dataBlocks.push({
				type: 'header',
				data: headerData
			});
			dataBlocks.push({
				type: 'list',
				data: listData
			});
			nestedArray.forEach(item => dataBlocks.push(item));
			dataBlocks.push({
				type: 'paragraph',
				data: {
					text: initialData
				}
			});

			let editJsConfig = {
				holder: 'editorjs',
				autofocus: true,
				data: {
					blocks: dataBlocks
				},
				tools: {
					// image: SimpleImage,
					// avatar: AvatarBlock,
					header: { class: Header, inlineToolbar: true },
					list: List,
					checklist: {
						class: Checklist,
						inlineToolbar: true
					},
					nestedEditor: NestedEditor
					// embed: {
					// 	class: Embed,
					// 	inlineToolbar: true,
					// 	config: {
					// 		services: {
					// 			youtube: true,
					// 			coub: true
					// 		}
					// 	}
					// }
				}
			};

			let startLoadTime = performance.now();
			// let readyPromises = [];
			let parsedData = null;
			// if (localData) {
			// 	parsedData = JSON.parse(localData);
			// 	console.log('parsedData', parsedData);
			// }

			for (let i = 0; i < MAX_ROW; i++) {
				editJsConfig.holder = 'editorjs_' + i;
				// if (localData) {
				// 	editJsConfig.data = parsedData[i];
				// }
				const newJsConfig = { ...editJsConfig };
				const newEditor = new EditorJS(newJsConfig);
				editors.push(newEditor);
				readyPromises.push(newEditor.isReady);
			}

			Promise.all(readyPromises).then(() => {
				let endLoadTime = performance.now();
				let loadTime = endLoadTime - startLoadTime;
				console.log('readyPromises:' +readyPromises.length, `Data load time for all editors: ${loadTime}ms`);
			});
		}
	});
</script>

<h1>Welcome to {MAX_ROW} instances of nested EditorJs</h1>
<!-- <textarea bind:value={textContent} rows="10" cols="50"></textarea> -->

<!-- <button
	on:click={async () => {
		let contents = [];
		for (let ed of editors) {
			content = await ed.saver.save();
			contents.push(content);
			console.log('Saved content', content);
		}
		localStorage.setItem('nested', JSON.stringify(contents));
	}}>Save</button
> -->
<!-- <button on:click={changeData}>Change Data</button> -->
<hr />

<div id="editorjs_parent" style="display: flex; flex-direction: column;">
	{#each rows as _, i}
		<div id="editorjs_{i}" style="margin-bottom: 10px;border: 1px solid black;"></div>
	{/each}
</div>
