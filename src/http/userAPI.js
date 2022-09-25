import {$host} from "./index";
export const create = async (name, phone) => {
    const data = await $host.post('api/user/', {name, phone})
    return data
}

export const getAll = async () => {
    const data = await $host.get('api/user/')
    return data
}

export const update = async (id,name, phone) => {
    const data = await $host.post('api/user/'+id,{name, phone})
    return data
}
export const deleteUser = async (id) => {
    const data = await $host.delete('api/user/'+id,)
    return data
}

