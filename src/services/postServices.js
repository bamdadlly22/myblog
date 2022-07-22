import axios from "axios"


export const httpPosts = async () => {
    try {
         const response = await axios.get("http://localhost/myblog//wp-json/wp/v2/posts");
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
