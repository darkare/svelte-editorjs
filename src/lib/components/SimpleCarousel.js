import './simple-carousel.css'



class SimpleCarousel {
    // @ts-ignore
    
    constructor({ data }) {
        this.data = data;
        this.inputTable = document.createElement('table');
        this.carousel = document.createElement('div');
        this.carousel.classList.add('carousel');
        this.carouselVideos = document.createElement('div');
        this.carouselVideos.classList.add('carousel__videos');
        this.carousel.appendChild(this.carouselVideos);
        
    }

    static get toolbox() {
        return {
            title: 'SimpleCarousel',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">< circle cx="6" cy="18" r="3" ></circle>         <circle cx="18" cy="16" r="3"></circle>            <circle cx="6" cy="6" r="3"></circle>            <circle cx="18" cy="8" r="3"></circle>            <path d="M2 10.3a24 24 0 0 0 20 .3"></path><path d="M22 8v14"></path><path d="M2 6v14"></path>        </svg > ', 
    };
}
addRow() {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    const cellBtn = document.createElement('td');

    const button = document.createElement('button');
    button.textContent = 'Add Video URL';
    button.addEventListener('click', () => {
        const url = prompt('Please enter the video URL');
        if (url) {
            this._addVideo(url);
        }
    });

    cell.appendChild(button);
    cellBtn.appendChild(this._addInputBtn());
    row.appendChild(cell);
    row.appendChild(cellBtn);
    this.inputTable.appendChild(row);
}
_showInputModal() {
    // Create the modal
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '50%';
    modal.style.left = '50%';
    modal.style.transform = 'translate(-50%, -50%)';
    modal.style.backgroundColor = 'white';
    modal.style.padding = '20px';
    modal.style.border = '1px solid black';

    // Create the input
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Enter video URL';
    modal.appendChild(input);

    // Create the submit button
    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', () => {
        const url = input.value;
        if (url) {
            this._addVideo(url);
            document.body.removeChild(modal);
        }
    });
    modal.appendChild(submitButton);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Focus the input
    input.focus();
}

addRow1() {
    const row = document.createElement('tr');
        const cell = document.createElement('td');
        const cellBtn = document.createElement('td');
        cellBtn.appendChild(this._addInputBtn());
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Video URL `;
        input.addEventListener('change', () => {
            console.log('input',input.value)
            //http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4
            // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4
            // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4
            this._addVideo(input.value);
        });
        cell.appendChild(input);
        row.appendChild(cell);
        row.appendChild(cellBtn);
        this.inputTable.appendChild(row);

}

render () {
    this.wrapper = document.createElement('div');
    // this.wrapper.setAttribute('id', 'table-container');
    this.addRow()    

    this.wrapper.appendChild(this.inputTable);
    this.wrapper.appendChild(this.carousel);
    return this.wrapper;
}

_addVideo(url) {
    console.log('_addVideo',url )
    const video = document.createElement('video');
    video.classList.add('carousel__video');
    video.src = url; // replace with the actual video URL
    video.controls = true;
    // video.play();
    this.carouselVideos.appendChild(video);
}


_addInputBtn() {
    const button = document.createElement('button');
    button.textContent = 'Add another Url';
    // input.placeholder = 'Enter an image URL...';
    button.addEventListener('click', () => {
                 this.addRow();
             });
    return button
}

_addInput(value) {
    const input = document.createElement('input');
    input.value = value;
    input.placeholder = 'Enter an image URL...';
    input.addEventListener('change', () => {
        this._createCarousel(this.save(this.wrapper).urls);
    });
    this.wrapper.appendChild(input);
}
save(blockContent) {
    const inputs = Array.from(blockContent.querySelectorAll('input'));
    return {
        urls: inputs.map(input => input.value.trim())
    }
}

validate(savedData) {
    console.log('11-saveData',savedData.urls)
    if (!savedData.urls) {
        return false;
    }
    // Filter out empty or whitespace-only URLs
    const urls = savedData.urls.filter(url => url.trim() !== '');
    return urls.length > 0;
}

_createCarousel(urls) {
    // remove existing carousel if any
    const existingCarousel = this.wrapper.querySelector('.carousel');
    if (existingCarousel) {
        this.wrapper.removeChild(existingCarousel);
    }

    // create new carousel
    const carousel = document.createElement('div');
    carousel.classList.add('carousel');
    urls.forEach(url => {
        const img = document.createElement('img');
        img.src = url;
        carousel.appendChild(img);
    });
    this.wrapper.appendChild(carousel);
}
}

export default SimpleCarousel;

// render1() {
//     this.wrapper = document.createElement('div');
//     this.wrapper.classList.add('horizontal-carousel');

//     (this.data.urls || ['']).forEach(url => {
//         this._addInput(url);
//     });

//     const addButton = document.createElement('button');
//     addButton.textContent = 'Add another URL';
//     addButton.addEventListener('click', () => {
//         this._addInput('');
//     });
//     this.wrapper.appendChild(addButton);

//     return this.wrapper;
// }