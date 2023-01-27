const app = {
    init: () => {
        console.log('connexion établie');
        
        setInterval(app.setTextContent, 4000);
    }, 

    setTextContent: () => {
        const hello = 'hello! My name is Ines';
        const welcome = 'Welcome to my humble portfolio';

        const aboutMeDiv = document.querySelector('.speechbox-text');
        aboutMeDiv.textContent = hello;

        if(aboutMeDiv.textContent === hello){
            aboutMeDiv.textContent = welcome;
        } else if (aboutMeDiv.textContent === welcome){
            aboutMeDiv.textContent = hello;
        }
    }
};

app.init();