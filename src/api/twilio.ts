import axios from "axios";

export const listMessages = async () => {
    const accountSid = 'AC45fcc1e56f3442c7e00c6a83bd78cea0';
    const authToken = '5e369294343d4e0f880e7ab99fe8a464';

    
    const res: any = await axios.get(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`, {
        auth: {
            username: accountSid,
            password: authToken
        }
    })

    return res.data.messages;
}

export const listMessagesByNumber = async (number: String) => {
    const accountSid = 'AC45fcc1e56f3442c7e00c6a83bd78cea0';
    const authToken = '5e369294343d4e0f880e7ab99fe8a464';

    let messages: any = await listMessages();

    let temp: any[] = [];
    messages.forEach((element: { from: String; to: String}) => {
        if (element.from == number || element.to == number) {
            temp.push(element);
        }
    });

    return temp.reverse();
}