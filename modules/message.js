class MessageGenerator {
    constructor(){
       this.greetings = ["Hello", "Hi", "Greetings"];
       this.closings = ["Have a nice day", "Cheers", "Best wishes"];
       this.advice = ["trust no one", "always smile", "keep learning"];
   }

    getRandomElement(array){
        return array[Math.floor(Math.random()* array.length )];
    }

    generateMessage(name) {
        const greeting = this.getRandomElement(this.greetings);
        const closing = this.getRandomElement(this.closings);
        const advice = this.getRandomElement(this.advice);
        return `${greeting} ${name},<br> you should <span class="color dm-serif-display-pseudo">${advice}</span><br> <span class="color dm-serif-display-pseudo">${closing}.</span>`;
    }       
}

export {MessageGenerator};
