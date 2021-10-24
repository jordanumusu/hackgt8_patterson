import { PaperAirplaneIcon, UserCircleIcon } from "@heroicons/react/outline";
import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react"
import { getAllNumbers, listMessages, listMessagesByNumber, sendMessage } from "../api/twilio"
import Layout from "../components/Layout";



export const ChatView = () => {
    const [messages, setMessages]: [any[], any] = useState([]);
    const [number, setNumber] = useState("");
    const chatBox = useRef<HTMLInputElement>(null);
    const [inputMessage, setInputMessage] = useState("");

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
        }, 1000)
        
        return () => clearInterval(interval);
    }, [])

    return (<div>

        <Layout>
            <div className="flex flex-col md:flex-row w-full">
            <div className="flex flex-col">
                {
                    getAllNumbers(messages).map((num) => (
                        <div onClick={() => setNumber(num)} className={"flex text-gray-400 p-3 border w-full" + (number == num ? " bg-gray-200" : " bg-white")}>
                            <UserCircleIcon className="text-green-400 h-8 w-8"/>
                            <div className="ml-2">
                                <p className="text-sm font-semibold text-black">{num}</p>
                                <p className="text-sm truncate w-28 md:w-auto">{listMessagesByNumber(messages, num)[0].body}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex-grow mr-5">
            <div className="flex flex-col border bg-white p-5 overflow-y-scroll w-full" style={{minWidth: "300px", maxHeight: "80vh"}} ref={chatBox}>
                {listMessagesByNumber(messages, number).map((message: {body: String, from: String, to: String, dateSent: any}) => (
                    <div className={"flex items-center" + (message.to != number ? "": " self-end")}>
                        <p className={"text-xs text-gray-500 mr-2" + (message.to != number ? "": " hidden")}>{("00" + (new Date(message.dateSent)).getHours()).slice(-2)}:{("00" + (new Date(message.dateSent)).getMinutes()).slice(-2)}</p>
                        <p className={"text-xs md:text-sm text-white rounded-lg py-2 px-3 my-2" + (message.to != number ? " bg-gray-500" : " bg-purple-500")} style={{maxWidth: "200px"}}>
                            {message.body}
                        </p>
                        <p className={"text-xs text-gray-500 ml-2" + (message.to != number ? " hidden": "")}>{("00" + (new Date(message.dateSent)).getHours()).slice(-2)}:{("00" + (new Date(message.dateSent)).getMinutes()).slice(-2)}</p>
                    </div>
                ))}
            </div>
            <div className="flex">
                    <input className="flex-grow outline-none border-gray-400 text-sm" type="text" placeholder="Send a message" value={inputMessage} onChange={(e) => {setInputMessage(e.target.value)}} />
                    <button onClick={() => {sendMessage(inputMessage, number); setInputMessage("")}} className="p-3 bg-white text-xs">Send <img className="h-4 w-4 inline-block" src="https://static.thenounproject.com/png/497450-200.png" /></button>
                </div>
            </div>
            </div>
        </Layout>
    </div>)
}
 