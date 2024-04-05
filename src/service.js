import axios from 'axios';

export const sendEmail = async(emailMessageData) =>{
    try{
        const response = await axios.post('https://send-email-service-indol.vercel.app/send-email', emailMessageData);
        console.log('Response: ', response.data);
    }catch (error) {
        console.error(error);
    }
};