class GitHub {
    constructor(){
        this.client_id = 'GithubID';
        this.client_secret = 'Githubsecret';
    }

    async getUser(user) {
        const profileResponse = await fetch(`api url`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}
