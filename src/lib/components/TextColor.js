import './tooltip.css'
class TextColor {
  static get toolbox() {
    return {
      title: 'Change Daryl Text Color',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 21v-3l10-10 3 3-10 10H3zm15.5-11.5l-3-3 1.5-1.5 3 3-1.5 1.5zm3-3L18.5 3 20 1.5l3 3-1.5 1.5zM0 18.5V24h5.5l11-11-5.5-5.5L0 18.5z"/></svg>'
    };
  }

  static get isInline() {
    return true;
  }

  static get sanitize() {
    return {
      span: {
        class: true,
        style: true
      }
    };
  }



  constructor({ api }) {
    this.api = api;
    this.button = document.createElement('button'); ;
    this.state = false;
    this.color = 'red';
    this.colors = ['red', 'green', 'blue', 'yellow', 'purple'];
  }

  render() {
    // this.button = 
    this.button.type = 'button';
    this.button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 21v-3l10-10 3 3-10 10H3zm15.5-11.5l-3-3 1.5-1.5 3 3-1.5 1.5zm3-3L18.5 3 20 1.5l3 3-1.5 1.5zM0 18.5V24h5.5l11-11-5.5-5.5L0 18.5z"/></svg>';
    this.button.title = 'Change Daryl the text color';
    this.button.classList.add('cdx-inline-tool');
    // this.button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M3 21v-3l10-10 3 3-10 10H3zm15.5-11.5l-3-3 1.5-1.5 3 3-1.5 1.5zm3-3L18.5 3 20 1.5l3 3-1.5 1.5zM0 18.5V24h5.5l11-11-5.5-5.5L0 18.5z"/></svg>';
    // this.button.title = 'Change Daryl the text color';
    this.button.classList.add('cdx-inline-tool');

    // Add a tooltip
    // this.api.tooltip.onHover(this.button, 'Change Daryl the text color123');
    // this.api.tooltip.onHover(this.button, 'Change Daryl the text color');

    return this.button;
  }

  surround(range) {
    if (this.state) {
      this.unwrap(range);
    } else {
      this.wrap(range);
    }
  }

  wrap(range) {
    const span = document.createElement('SPAN');
    span.style.color = this.color;
    span.classList.add('cdx-inline-tool');
    range.surroundContents(span);
  }

  unwrap(range) {
    const span = this.api.selection.findParentTag('SPAN');
    if (span) {
      while (span.firstChild) {
        span.parentNode.insertBefore(span.firstChild, span);
      }
      span.remove();
    }
  }

  checkState(selection) {
    const span = this.api.selection.findParentTag('SPAN');
    this.state = !!span && span.style.color === this.color;
    this.button.classList.toggle('cdx-inline-tool--active', this.state);
  }

  renderActions() {
    const wrapper = document.createElement('div');

    this.colors.forEach(color => {
      const button = document.createElement('button');
      button.classList.add('cdx-color-button');
      button.style.backgroundColor = color;
      button.addEventListener('click', () => {
        this.color = color;
      });
      wrapper.appendChild(button);
    });

    return wrapper;
  }
}


export default TextColor;