import axios from 'axios';

const url = 'https://intense-beyond-26705.herokuapp.com/api/posts'

class PostService {
  // get post
  static getPosts() {
    return new Promise((resolve, reject) => {
      axios.get(url).then((res) => {
        const data = res.data
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        )
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  // creat post
  static insertPost(text) {
    return axios.post(url, {
      text,
      date
    })
  }

  // delete post
  static deletePost(id) {
    return axios.delete(`${url}/${id}`)
  }
}

export default PostService
