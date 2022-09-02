import axios from "axios"


export const httpPosts = async () => {
    try {
         const response = await axios.get("https://api.swipmag.ir/wp-json/wp/v2/posts");
         return(response)
     } catch (error) {
         return(error)
     }
}


export const httpCatPosts = async (id) => {
    try {
         const response = await axios.get(`https://api.swipmag.ir/wp-json/wp/v2/posts?categories=${id}`);
         console.log(response)
         return(response)
     } catch (error) {
         return(error)
     }
}


export const httpPost = async (slug) => {
    try {
        const response = await axios.get(`https://api.swipmag.ir/wp-json/wp/v2/posts?slug=${slug}`);
        return response
    } catch (error) {
        return(error);
    }
}

export const httpLogin = async (user) => {
    try{
        const response = await axios.post("https://api.swipmag.ir/wp-json/jwt-auth/v1/token", {
            username: user.username,
            password: user.password
        })
        console.log(response);
        return response;
    } catch (error) {
        return error;
    }
}

export const httpCategories = async () => {
    try {
        const response = await axios.get("https://api.swipmag.ir/wp-json/wp/v2/categories");
        return(response)
    } catch (error) {
        return(error)
    }
}

export const httpTags = async () => {
    try {
        const response = await axios.get("https://api.swipmag.ir/wp-json/wp/v2/tags");
        return(response)
    } catch (error) {
        return(error)
    }
}

export const httpComments = async () => {
    try {
        const response = await axios.get("https://api.swipmag.ir/wp-json/wp/v2/comments");
        return(response)
    } catch (error) {
        return(error)
    }
}

