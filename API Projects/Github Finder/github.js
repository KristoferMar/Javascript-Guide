class GitHub {
    constructor(){
        this.client_id = 'GithubID';
        this.client_secret = 'Githubsecret';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`api url`);

        const repoResponse = await fetch(`api url for repos`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
