import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react"
import { getAllNumbers, listMessages, listMessagesByNumber } from "../api/twilio"



export const DevView = () => {
    const [messages, setMessages]: [any[], any] = useState([]);
    const [number, setNumber] = useState("");
    const chatBox = useRef<HTMLInputElement>(null);

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
        if (chatBox) {
            chatBox.current?.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target }: any = event;
                target?.scroll({ top: target.scrollHeight, behavior: 'smooth' });
            })
        }
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
        <div className="flex flex-col border border-gray-300 p-5 rounded-xl overflow-y-scroll my-10" style={{width: "400px", maxHeight: "80vh"}} ref={chatBox}>
            {listMessagesByNumber(messages, number).map((message: {body: String, from: String, to: String, dateSent: any}) => (
                <div className={"flex items-center" + (message.to == number ? "": " self-end")}>
                    <p className={"text-xs text-gray-500 mr-2" + (message.to == number ? "": " hidden")}>{("00" + (new Date(message.dateSent)).getHours()).slice(-2)}:{("00" + (new Date(message.dateSent)).getMinutes()).slice(-2)}</p>
                    <p className={"text-xs text-white rounded-lg py-2 px-3 my-2" + (message.to == number ? " bg-gray-500" : " bg-purple-500")} style={{maxWidth: "200px"}}>
                        {message.body}
                    </p>
                    <p className={"text-xs text-gray-500 ml-2" + (message.to == number ? " hidden": "")}>{("00" + (new Date(message.dateSent)).getHours()).slice(-2)}:{("00" + (new Date(message.dateSent)).getMinutes()).slice(-2)}</p>
                </div>
            ))}
        </div>
    </div>)
}
 