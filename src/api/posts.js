import { posts } from '.';

export function fetchPosts() {
    return posts.get('/');
}

export function createPosts(postData) {
    return posts.post('/', postData);
}
