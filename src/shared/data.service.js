
const fetchPosts = async function() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    const data = await res.json()
    
    return data
};

const fetchPost = async function(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    const data = await res.json()
    
    return data
};


export const dataService = {
    fetchPosts,
    fetchPost,
};
    