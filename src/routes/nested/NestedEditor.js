import EditorJS from "@editorjs/editorjs";
import AvatarBlock from '../daryl/Avatar';

class NestedEditor {
    static get toolbox() {
        return {
            title: 'Nested Editor',
            icon: '<svg>...</svg>',
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
this.column2.style.marginLeft = '10px'

// Add border styles
this.column1.style.border = '1px solid black';
this.column2.style.border = '1px solid black';
        // Create an Editor.js instance for each column
        this.editor1 = new EditorJS({
            holder: this.column1,
            autofocus: true,
            tools: {
                AvatarBlock: AvatarBlock,
                // Your tools here...
            },
            data: this.data.column1
        });

        this.editor2 = new EditorJS({
            holder: this.column2,
            autofocus: true,
            tools: {
                AvatarBlock: AvatarBlock,
                // Your tools here...
            },
            data: this.data.column2
        });
            // Make the container a flex container and space the columns evenly apart
    this.container.style.display = 'flex';
    this.container.style.justifyContent = 'space-between';

        // Add the columns to the container
        this.container.appendChild(this.column1);
        this.container.appendChild(this.column2);

        return this.container;
    }

    save(blockContent) {
        this.data.column1 = this.editor1.save();
        this.data.column2 = this.editor2.save();
        return [this.data];
    }
}

export default NestedEditor;