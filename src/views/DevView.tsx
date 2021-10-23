import { useCallback, useEffect, useState } from "react"
import { getAllNumbers, listMessages, listMessagesByNumber } from "../api/twilio"



export const DevView = () => {
    const [messages, setMessages]: [any[], any] = useState([]);
    const [number, setNumber] = useState("");

    const map = [{bruh: "bruh"}]
    /*const getCurrentMessages = useCallback(async (number: String) => {
        let messages = await listMessagesByNumber(number);
        setCurrentMessages(messages);
    }, [])
    useEffect(() => {
        if (currentMessages.length == 0) {
            getCurrentMessages(number);
        }
    }, [getCurrentMessages]) */

    useEffect(() => {
        listMessages().then(
            (data) => {
                setMessages(data)
                setNumber(getAllNumbers(data)[0])
            }
        )
    }, [])
    useEffect(() => {
        const interval = setInterval(() => {
            listMessages().then(
                (data) => {
                    setMessages(data)
                }
            )
        }, 5000)
        
        return () => clearInterval(interval);
    }, [])

    return (<div>
        {listMessagesByNumber(messages, number).map((message: {body: String}) => (
            <p>
                {message.body}
            </p>
        ))}
    </div>)
}
