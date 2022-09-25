import React, { useContext, useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import styles from "./css/wallet.css";

import {observer} from "mobx-react-lite";
import {Context} from "../App";
import {ModalAddUser} from "../component/ModalAddUser";
import {ModalUpdateUser} from "../component/ModalUpdateUser";
import {deleteUser, getAll, update} from "../http/userAPI";

const Main = observer(() => {
    const users = useContext(Context)?.users
    const [isAddUser,setIsAddUser] = useState(false)
    const [isUpgUser,setIsUpgUser] = useState(false)
    const [userId,setUserId] = useState('')
    const [phoneUser,setPhoneUser] = useState('')
    const [nameUser,setNameUser] = useState('')
    useEffect(()=> {
            getAll()
                .then((res) => {users?.setUser(res.data)})
                .catch((e) => {alert(e.response.data.message)})



    },[])

    function clickAdd(){
        setIsAddUser(true)
    }
    function onCloseAdd(){
        setIsAddUser(false)
    }
    function onCloseUpg(){
        setIsUpgUser(false)
    }
    function clickUpg(id:string,name:string,phone:string){
        setIsUpgUser(true)
        setUserId(id)
        setPhoneUser(phone)
        setNameUser(name)
    }
    async function clickDel(id:number){
        if (confirm("Вы уверены?")){
            await deleteUser(id).then(data => users?.setUser(data.data) )
        }
    }
    return (
        <div>
            <div className={styles.box}>
                <div>
                    <h2 style={{textAlign: "center"}}>Контакты</h2>
                    <div className={styles.btnBox}>
                        <Button variant={"outline-success"} onClick={clickAdd}>
                            Добавить контакт
                        </Button>
                    </div>

                    {users?.Users.map(user => {
                        return <div key={user.id} className={styles.list}>
                            <div className={styles.listItem}>
                                <div style={{marginBottom: 10}}>Имя:{user.name}</div>
                                <div>Телефон: {user.phone}</div>
                            </div>
                            <button className={styles.editBtn}
                                    onClick={() => clickUpg(String(user.id), user.name, user.phone)}>
                                изменить
                            </button>
                            <button className={styles.delBtn} onClick={() => clickDel(user.id)}>
                                удалить
                            </button>

                        </div>
                    })}
                </div>
            </div>

            {isAddUser && <ModalAddUser userId={userId} onClose={onCloseAdd}/>}
            {isUpgUser && <ModalUpdateUser userId={userId} phoneUser={phoneUser} nameUser={nameUser} onClose={onCloseUpg}/>}
        </div>
    );
});

export default Main;
