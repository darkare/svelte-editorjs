export async function convertToAppleNewsFormat(data) {
    console.log('convertToAppleNewsFormat', data)

    const appleNewsFormatData = data.blocks.map(block => {
        if (block.type === 'header') {
            return {
                role: 'heading',
                text: block.data.text
            };
        } else if (block.type === 'paragraph') {
            return {
                role: 'body',
                text: block.data.text
            };
        } else if (block.type === 'imageSimple' || block.type === 'image') {
            return {
                role: 'photo',
                URL: block.data.url,
                caption: block.data.caption,
                accessibilityCaption: block.data.caption,
            };
        } else if (block.type === 'Checklist') {
            return {
                role: 'bulletedList',
                items: block.data.items.map(item => ({
                    role: 'listItem',
                    text: item.text
                }))
            };
        } else {
            return null;
        }
    }).filter(block => block !== null);

    console.log('converted', appleNewsFormatData);
    localStorage.setItem('apple-news', JSON.stringify(appleNewsFormatData));
     // Open a new window and display the apple-news data
     const newWindow = window.open();
     newWindow.document.write('<pre>' + JSON.stringify(appleNewsFormatData, null, 2) + '</pre>');
}

export async function logApple(blocks) {
    console.log(blocks)
}