// const { TypewriterClass } = require('typewriter-effect');


const app = {
    init: () => {
        console.log('connexion établie');
        
        // document.addEventListener('DOMContentLoaded', app.setTextContent);
        app.setTextContent();
    }, 

    setTextContent: () => {
        console.log('appel à setTextContent fonctionnel');
        const hello = 'hello! my name is Ines';
        const welcome = 'welcome to my humble portfolio';
        const scroll = 'keep scrolling to learn more about me :)';

        const aboutMeDiv = document.getElementById('speechbox-text-sentence');
        
        const typewriter = new Typewriter(aboutMeDiv, {
            loop: true,
            delay: 60,
        });

        typewriter.typeString(hello)
            .pauseFor(2000)
            .deleteAll()
            .typeString(welcome)
            .pauseFor(2000)
            .deleteAll()
            .typeString(scroll)
            .pauseFor(2000)
            .start();
    }
};

app.init();