import request from '@/utils/request'

export function AwardsNumberByYear(data) {
    return request({
        url: '/getAwardsNumberByYear',
        method: 'post',
        data
    })
}