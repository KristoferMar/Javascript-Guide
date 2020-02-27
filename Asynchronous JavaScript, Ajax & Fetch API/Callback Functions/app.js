const posts = [
    {
        title: 'Post One',
        body: 'This is post one'
    },
    {
        title: 'Post Two',
        body: 'This is post two'
    }
]

// SYNC Way
function createPost(post){
    setTimeout(function() {
        posts.push(post);
    }, 2000);
}

function getPosts(){
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'});

getPosts();


// ASYNC WAY with a callback function.
// Callback is a function which can be parsed in with another function and called with that other function.
function createPost(post, callback){
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

function getPosts(){
    setTimeout(function() {
        let output = '';
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
