const coin = {
    state: 0,
    flip: function() {
        let min = Math.ceil(0);
        let max = Math.floor(1);
        this.state = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.state;
    },
    toString: function() {
        let output = '';
        if (this.state === 0) {
            output = 'Heads';
        } else if (this.state === 1) {
            output = 'Tails';
        }

        return output;
    },
    toHTML: function() {
        const getContainer = document.getElementById('images');
        const image = document.createElement('img');
        getContainer.appendChild(image);
        if (this.state === 0) {
            image.classList.toggle('heads');
        } else if (this.state === 1) {
            image.classList.toggle('tails');
        }
        return image;
    }
};

const create20Flips = (result) => {
    const getContainer = document.getElementById('strings');
    const createDiv = document.createElement('div');
    createDiv.innerText = result;
    createDiv.classList.toggle('flip');
    getContainer.appendChild(createDiv);
}

function display20Flips() {
    const result = [];
    for (let i = 0; i < 20 ; i++) {
        coin.flip();
        result.push(`${coin.toString()} `);
    }
    create20Flips(result);

    return result;
}

function display20Images() {
    const results = [];
    for (let i = 0; i < 20; i++) {
        coin.flip();
        results.push(coin.toHTML());
    }

    return results;
}

const clearHTML = () => {
    const getImages = document.getElementById('images');
    const getStrings = document.getElementById('strings');
    getImages.innerText = '';
    getStrings.innerText = '';
}

const flipButton = () => {
    clearHTML();
    display20Flips();
    display20Images();
}

const flip = document.getElementById('flip');
flip.addEventListener('click', flipButton);