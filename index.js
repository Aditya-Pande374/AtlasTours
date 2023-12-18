function loadMapScenario() {
    var map = new Microsoft.Maps.Map(document.getElementById('mapDiv'), {
        credentials: 'Aizwp1RpUB-pFz6ktC1cCFGD9VPvpSbVXII2p3zr73p0cfLvP6SBy4CX4BFLUrDY',
    });
}

loadMapScenario();

document.querySelector('.atlas').addEventListener('click', function (event) {
    event.preventDefault();
    loadMapScenario();
});


const languages = ['en', 'es']; 
let currentLanguage = 0;

function toggleLanguage() {
    const languageContents = document.querySelectorAll('.language-content');
    languageContents.forEach(element => {
        element.style.display = 'none';
    });

    const selectedLanguage = languages[currentLanguage];
    document.querySelectorAll(`.${selectedLanguage}`).forEach(element => {
        element.style.display = 'block';
    });

    currentLanguage = (currentLanguage + 1) % languages.length;
}

const languageButton = document.querySelector('.language-button');
languageButton.addEventListener('click', toggleLanguage);

toggleLanguage();



