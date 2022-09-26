import axios from "axios";

export const fetchImage = async (name, page, key) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${name}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data
} 