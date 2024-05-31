import AvatarComponent from './Avatar.svelte';

class AvatarBlock {
	static get toolbox() {
		return {
			title: 'Custom Avatar',
			//   icon: '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m16 8a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 8a3 3 0 1 1 3-3 3.0034 3.0034 0 0 1 -3 3z"/><path d="m16 2a14 14 0 1 0 14 14 14.0158 14.0158 0 0 0 -14-14zm-6 24.3765v-1.3765a3.0033 3.0033 0 0 1 3-3h6a3.0033 3.0033 0 0 1 3 3v1.3765a11.8989 11.8989 0 0 1 -12 0zm13.9925-1.4507a5.0016 5.0016 0 0 0 -4.9925-4.9258h-6a5.0016 5.0016 0 0 0 -4.9925 4.9258 12 12 0 1 1 15.985 0z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>',
			icon: '<svg height="32" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m16 8a5 5 0 1 0 5 5 5 5 0 0 0 -5-5zm0 8a3 3 0 1 1 3-3 3.0034 3.0034 0 0 1 -3 3z"/><path d="m16 2a14 14 0 1 0 14 14 14.0158 14.0158 0 0 0 -14-14zm-6 24.3765v-1.3765a3.0033 3.0033 0 0 1 3-3h6a3.0033 3.0033 0 0 1 3 3v1.3765a11.8989 11.8989 0 0 1 -12 0zm13.9925-1.4507a5.0016 5.0016 0 0 0 -4.9925-4.9258h-6a5.0016 5.0016 0 0 0 -4.9925 4.9258 12 12 0 1 1 15.985 0z"/><path d="m0 0h32v32h-32z" fill="none"/></svg>'
		};
	}

	constructor({ data, api }) {
		this.data = data;
		this.api = api;
		this.avatarBlock = null;
		this.hello = this.hello.bind(this);
	}

	handleImageLoaded(event) {
		this.data = event.detail;
		// this.imageData  = event.detail;
		// console.log('Image loaded:', {thisdata: this.data});
	}

	hello() {
		console.log('hello');
	}
	render() {
		const container = document.createElement('div');
		this.avatarBlock = new AvatarComponent({
			target: container,
			props: {
				data: this.data,
				api: this.hello
			}
		});
		this.avatarBlock.$on('imageLoaded', this.handleImageLoaded.bind(this));
		let tooltip = document.createElement('div');

		// Add "Hello World" text to the tooltip
		let text = document.createTextNode('Click on the avatar to upload an image');
		tooltip.appendChild(text);
		// Add an icon to the tooltip
		
		let icon = document.createElement('i');
		icon.className = 'fas fa-exclamation-circle'; // replace with the class name of your icon
		icon.style.position = 'absolute';
		icon.style.right = '-20px';
		icon.style.top = '10px';
		tooltip.appendChild(icon);

		// Style the tooltip
		tooltip.style.display = 'none';
		tooltip.style.position = 'absolute';
		tooltip.style.border = '1px solid black';
		tooltip.style.borderRadius = '10px';
		tooltip.style.backgroundColor = '#f9f9f9';
		tooltip.style.padding = '10px';
		tooltip.style.boxShadow = '2px 2px 10px rgba(0, 0, 0, 0.1)';

		container.appendChild(tooltip);

		// Show tooltip on mouseover
		container.onmouseover = function (event) {
			tooltip.style.display = 'block';
			// Adjust the left property to display the tooltip to the right of the Avatar component
			tooltip.style.left = event.pageX - container.offsetWidth + 150 + 'px';
			tooltip.style.top = event.pageY - container.offsetParent + 'px';
			tooltip.style.marginTop = '-50px';
			tooltip.style.backgroundColor = 'lightyellow';
		};

		// Hide tooltip on mouseout
		container.onmouseout = function () {
			tooltip.style.display = 'none';
		};

		return container;
	}
	openToolbar() {
		this.api.toolbar.open();

		console.log('open toolbar');
	}
	save(blockContent) {
		// const input = blockContent.querySelector('input');
		// console.log('avatar save   ', this.imageData);
		if (this.data?.image) {
			return this.data;
		}
		return {
			// content: input.value
			image: this.data
		};
	}
}

export default AvatarBlock;
