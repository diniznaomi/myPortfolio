import axios from 'axios';

export const sendEmail = async(emailMessageData) =>{
    try{
        const response = await axios.post('http://localhost:8000/send-email', emailMessageData);
        console.log('Response: ', response.data);
    }catch (error) {
        console.error(error);
    }
};