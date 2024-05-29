// // import SvelteCarouselComponent from './SvelteCarousel.svelte';


// import SvelteCarouselComponent from './SvelteCarousel.svelte';

// class SvelteCarousel {
//   constructor({ data, api }) {
//     this.data = data;
//     this.api = api;
//   }

//   static get toolbox() {
//     return {
//       title: 'SvelteCarousel',
//       icon: '<svg>...</svg>', // replace with your icon
//     };
//   }

//   render() {
//     const container = document.createElement('div');
//     this.svelteCarousel = new SvelteCarouselComponent(
//         {
//       target: container,
//       props: {
//         data: this.data,
//       },
//     }
// );
//     return container;
//   }

//   save(blockContent) {
//     return {
//       content: this.svelteCarousel.$$.ctx[0].map(row => row.url), // replace with the correct context index
//     };
//   }

//   destroy() {
//     this.svelteCarousel.$destroy();
//   }
// }

// export default SvelteCarousel;