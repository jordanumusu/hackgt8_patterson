import axios from "axios";

export const listMessages = async () => {
    
    const res = await fetch('api/listMessages', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();

    return data;

}

export const getAllNumbers = (messages: any) => {
    let numbers: any[] = []
    messages.forEach((element: { to: string; from: string; }) => {
        if (element.to != '+14143480176' && !numbers.includes(element.to)) {
            numbers.push(element.to)
        }
        if (element.from != '+14143480176' && !numbers.includes(element.from)) {
            numbers.push(element.from)
        }
    });
    
    return numbers
}
export const listMessagesByNumber = (messages: any, number: String) => {
    let temp: any[] = [];
    messages.forEach((element: { from: String; to: String}) => {
        if (element.from == number || element.to == number) {
            temp.push(element);
        }
    });

    return temp.reverse();
}