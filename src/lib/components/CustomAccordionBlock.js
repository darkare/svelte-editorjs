import CustomAccordionComponent from './accordion.svelte';

export default class CustomAccordionBlock {
  static get toolbox() {
    return {
      title: 'Custom Accordion',
      icon: '<svg width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12,2A10,10 0 1,0 22,12A10,10 0 0,0 12,2M12,17.27L18.18,21L16.54,14.09L22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.46,14.09L5.82,21L12,17.27Z"></path></svg>',
    };
  }

  constructor({ data, api }) {
    this.data = data;
    this.api = api;
    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement('div');

    this.svelteComponent = new CustomAccordionComponent({
      target: this.wrapper,
      props: {
        items: this.data.items || [],
      }
    });

    this.svelteComponent.$on('update', (event) => {
        this.data.items = event.detail.items; // Update data.items with the latest items array
      });

    return this.wrapper;
  }

  save(blockContent) {
    //return this.data;
    //localStorage.setItem('accordionData', JSON.stringify(this.data.items)); 
    return {
        items: this.data.items
      };
  }
}
