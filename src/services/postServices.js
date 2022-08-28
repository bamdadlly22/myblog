import axios from "axios"


export const httpPosts = async () => {
    try {
         const response = await axios.get("http://localhost/myblog//wp-json/wp/v2/posts");
         return(response)
     } catch (error) {
         return(error)
     }
}


export const httpCatPosts = async (id) => {
    try {
         const response = await axios.get(`http://localhost/myblog//wp-json/wp/v2/posts?categories=${id}`);
         console.log(response)
         return(response)
     } catch (error) {
         return(error)
     }
}


export const httpPost = async (slug) => {
    try {
        const response = await axios.get(`http://localhost/myblog/wp-json/wp/v2/posts?slug=${slug}`);
        return response
    } catch (error) {
        return(error);
    }
}

export const httpLogin = async (user) => {
    try{
        const response = await axios.post("http://localhost/myblog/wp-json/jwt-auth/v1/token", {
            username: user.username,
            password: user.password
        })
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
}
