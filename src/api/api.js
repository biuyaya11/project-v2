//项目中我们大多时候都会把队友的接口请求封装成api来调用
import service from "../service";

//登陆接口
export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}
//学生列表查询
export function students(params) {
    return service({
        method:'get',
        url: '/students',
        params
    })
}

//学生列表删除接口
export function studentDel(id) {
    return service({
        method:'delete',
        url: `/students/${id}`,  //拼接用·包？

    })
}


