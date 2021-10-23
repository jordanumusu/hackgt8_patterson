import { useCallback, useEffect, useState } from "react"
import { listMessages, listMessagesByNumber } from "../api/twilio"



export const DevView = () => {
    const [number, setNumber] = useState("+14703066493");
    const [currentMessages, setCurrentMessages]: [any[], any] = useState([]);

    const map = [{bruh: "bruh"}]
    const getCurrentMessages = useCallback(async (number: String) => {
        let messages = await listMessagesByNumber(number);
        setCurrentMessages(messages);
    }, [])
    useEffect(() => {
        if (currentMessages.length == 0) {
            getCurrentMessages(number);
        }
    }, [getCurrentMessages])

    console.log(currentMessages)
    return (<div>
        {currentMessages.map((message: {body: String}) => (
            <p>
                {message.body}
            </p>
        ))}
    </div>)
}
