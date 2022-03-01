import request from '@/utils/request'

export function userLogin(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

//��ȡ�û��б�
export function userList(data) {
    return request({
        url: '/user/ ',
        method: 'post',
        data
    })
}

//����û�
export function userAdd(data) {
    return request({
        url: '/user/add',
        method: 'post',
        data
    })
}

//�޸��û�
export function userUpdate(data) {
    return request({
        url: '/user/update',
        method: 'post',
        data
    })
}

//ɾ���û�
export function userDelete(id) {
    return request({
        url: '/user/delete',
        method: 'post',
        params: {
            id
        }
    })
}

//����ɾ���û�
export function userBatchDelete(data) {
    return request({
        url: '/user/delete/batch',
        method: 'post',
        data
    })
}