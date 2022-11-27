//获取表格数据
// import * as url from "url";

export function getData(root, url, params) {
    root.service.get(url, {params: params || {}})
        .then(res => {
            if (res.data.status === 200) {
                root.tableData =res.data.data
                root.total = res.data.total
            }
        })
        .catch(err => {
            throw err
        })
}
//新增和修改方法
import qs from 'qs'
// import {infoDel} from "@/api/api";
export  function changeInfo(root,method,url,form,callback) {
    let data = qs.stringify(form)
    root.service[method](url, data)
        .then(res => {
            if (res.data.status === 200) {
                callback(root, url)
                root.dialogFormVisible = false
                root.$refs['form'].resetField()
                root.message({type: 'success', message:res.data.message})
            }

        })
        .catch(err => {
            throw err
        })
}//删除方法封装
export  function delData(root, url, id, callFun) {
    root.$alert('你确定删除吗','提示',{
        confirmButtonText:'确定',
        callback: () => {
                root.service.delete(`${url}/${id}`).then(res => {
                    if (res.data.status === 200) {
                        callFun(root, url)
                        root.$message({message: res.data.message, type: 'success'})
                    }
                })
                 .catch(err => {
                     throw err
                 })
        }
    })
}