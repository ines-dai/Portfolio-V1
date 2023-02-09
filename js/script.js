const app = {
    init: () => {
        app.setScrollReveal();
        app.setTextContent();
    }, 

    setTextContent: () => {
        const hello = 'hello! my name is Ines';
        const welcome = 'welcome to my humble portfolio';
        const scroll = 'keep scrolling to learn more about me...';

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
    },

    setScrollReveal : () => {
        window.sr = ScrollReveal({ reset: true });
        sr.reveal('section', { delay: 500 });
        sr.reveal('#skills', { delay: 500 });
        sr.reveal('#work', { delay: 500 });
    }
};

app.init();