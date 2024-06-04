import EditorJS from '@editorjs/editorjs';
import AvatarBlock from '../daryl/Avatar';
import Embed from '@editorjs/embed';
import Header from '@editorjs/header';
import List from '@editorjs/list';
// import { head } from 'lodash';
import { readyPromises } from '$lib/components/real/global';
import { read } from '$app/server';
const headerData = { text: 'Header', level: 2 };
const textData = "Ex nostrud dolor adipisicing aliqua qui sit laboris laborum velit exercitation est velit commodo quis. Proident non dolore consequat sit deserunt nisi consequat irure tempor do minim tempor eiusmod. Ut officia dolore duis aliquip tempor. Magna eu tempor sint enim. Officia minim esse consectetur exercitation nulla proident nisi reprehenderit. Ea id dolore consectetur nostrud sint consectetur ullamco et non ad sint anim.";
const listData = { items: ['line 1', 'line 2', 'line 3', 'line 4', 'line 5'], style: 'ordered' };
class NestedEditor {
	static get toolbox() {
		return {
			title: 'Nested Editor',
			icon: '<svg>...</svg>'
		};
	}

	constructor({ data, api, config }) {
		this.api = api;
		this.data = data;
		this.config = config;
		this.container = document.createElement('div');
		this.editor1 = null;
		this.editor2 = null;
	}

	render() {
		// Create two div elements for the columns
		this.column1 = document.createElement('div');
		this.column2 = document.createElement('div');

		// Style the columns
		this.column1.style.width = 'calc(50% - 10px)'; // Subtract the margin from the width
		this.column2.style.width = 'calc(50% - 10px)'; // Subtract the margin from the width
		this.column1.style.float = 'left';
		this.column2.style.float = 'right';
		// Add margin
		this.column1.style.marginRight = '10px'; // Add margin to the right of the first column
		this.column2.style.marginLeft = '10px';

		// Add border styles
		this.column1.style.border = '1px solid black';
		this.column2.style.border = '1px solid black';
		// Create an Editor.js instance for each column
        // console.log('222-', this.data);
        // console.log('222-col1', this.data[0]);
        // console.log('222-col2', this.data[1]);
        this.config1 = {};
		this.editor1 = new EditorJS({
			holder: this.column1,
			autofocus: true,
			tools: {
                list: List,
				// avatarBlock: AvatarBlock,
                header: { class: Header, inlineToolbar: true },
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
			},
			// data: this.data[0]
            data: {
                blocks: [
                    {
                        type: 'header',
                        data: headerData
                    },
                    { type: 'list', data: listData },
                    {
                        type: 'paragraph',
                        data: {
                            text: textData
                        }
                    }
                ]
            },
		});

		this.editor2 = new EditorJS({
			holder: this.column2,
			autofocus: true,
			tools: {
				// AvatarBlock: AvatarBlock
                list: List,
                header: { class: Header, inlineToolbar: true },
				// Your tools here...
			},
			// data: this.data[1]
            data: {
                blocks: [
                    {
                        type: 'header',
                        data: headerData
                    },
                    { type: 'list', data: listData },
                    {
                        type: 'paragraph',
                        data: {
                            text: textData
                        }
                    }
                ]
            },
		});
        readyPromises.push(this.editor1.isReady);
        readyPromises.push(this.editor2.isReady);
		// Make the container a flex container and space the columns evenly apart
		this.container.style.display = 'flex';
		this.container.style.justifyContent = 'space-between';

		// Add the columns to the container
		this.container.appendChild(this.column1);
		this.container.appendChild(this.column2);

		return this.container;
	}

	async save(blockContent) {
		const col1Data = await this.editor1.save();
		const col2Data  = await this.editor2.save();
		return [col1Data, col2Data];
	}
}

export default NestedEditor;
