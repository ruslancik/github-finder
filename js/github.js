class Github {

    constructor(){
        this.client_id = '438afb667c9bc52f09ee';
        this.client_secret='24079b56f61819744ba054d6a22c1ebccb8b6712';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?
            client_id=${this.client_id}&
            client_secret=${this.client_secret}`);

            const profile = await profileResponse.json();

            return {
                profile //means profile:profile in ES6
            }
    }
};