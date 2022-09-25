import React, {ChangeEvent, FormEvent, useContext, useEffect, useRef, useState} from 'react';

import styles from './modalAddWallet.css';
import {Button, Form} from "react-bootstrap";
import {create} from "../http/userAPI";
import {Context} from "../App";


interface IModalAddExpenses {
    onClose?: (() => void);
    userId?:string
}

export function ModalAddUser({onClose,userId}:IModalAddExpenses) {
    const [name, setName] = useState('')
    const [value, setValue] = useState('')
    const users = useContext(Context)?.users
    function nameChange(e:ChangeEvent<HTMLInputElement>) {
        setName(e.target.value)
    }
    function valueChange(e:ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
    }
    const ref = useRef<HTMLDivElement>(null);
    document.body.style.overflow = "hidden"
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)){
                document.body.style.overflow = "auto"
                if (onClose) {
                    onClose()
                }
            }

        }
        document.addEventListener('click',handleClick);

        return () => {
            document.removeEventListener('click',handleClick);
        }
    },[])
    const click = async () => {
        try {
            const data = await create(name,value)
            users?.setUser(data.data)

            if (onClose) {
                document.body.style.overflow = "auto"
                onClose()
            }
        } catch (e:any){
            alert(e.response.data.message)
        }

    }

    const submit = async (event:FormEvent) => {
        try {
            event.preventDefault();
            const data = await create(name,value)
            users?.setUser(data.data)

            if (onClose) {
                document.body.style.overflow = "auto"
                onClose()
            }
        } catch (e:any){
            alert(e.response.data.message)
        }

    }




    return (
        <div className={styles.bcg}>
            <div className={styles.box} ref={ref}>
                <Form className="d-flex flex-column" onSubmit={submit}>
                    <div style={{fontFamily: "sans-serif",fontSize:16}}>Введите имя:</div>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите имя"
                        value={name}
                        onChange={nameChange}
                    />
                    <div style={{fontFamily: "sans-serif",fontSize:16}}>Введите телефон:</div>
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите телефон"
                        value={value}
                        onChange={valueChange}
                    />
                    <div className="d-flex justify-content-center align-items-center mt-3">

                        <Button variant={"outline-success"} onClick={click}>
                            Добавить
                        </Button>
                    </div>
                </Form>




            </div>
        </div>

    );
}
