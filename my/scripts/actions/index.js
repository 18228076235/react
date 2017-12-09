export  function changnum(k){
    return{
        type:'yzsjh',
        k
    }
}

export function getName(k){
    
    return{
        type:'getName',
        k
    }
}

export function getUser(){
    var k=[]
    if(localStorage.user!=undefined){
        k=localStorage.user.split(',')
    }else{
        k=['','','']
    }
    return{
        type:'getUser',
        k    
    }
}

//首页数据渲染
import axios from 'axios'
export function getIndex(url,dispatch){
    return axios.get(url)
        .then(res=>{
            return res.data;
        })
        .then(json=>{
           return dispatch({type:'indexData',json})
        })
}

//加载详情
export function ardetail(url,dispatch){
   return axios.get(url)
        .then(res=>{
  
            if(res.data!=0){
                var cont=res.data[0].artContent;
                res.data[0].artContent = res.data[0].artContent.replace(/src=\"\//gi,'src="https://app.enclavebooks.cn/');             
                return res.data[0]
            }else{
                return {artThumb:"https://photo.enclavebooks.cn/enclave/photo/2017-04-20/23:03:57.jpg",
                        artAvatar:"https://photo.enclavebooks.cn/enclave/photo/2017-04-20/23:03:57.jpg",
                        artTitle:'资金短缺,暂无数据',
                        artEditor:'（◑▽◐）(づ｡◕ᴗᴗ◕｡)づ(づ｡◕ᴗᴗ◕｡)づ(づ｡◕ᴗᴗ◕｡)づ(づ｡◕ᴗᴗ◕｡)づ(づ｡◕ᴗᴗ◕｡)づ(づ｡◕ᴗᴗ◕｡)づ(づ｡◕ᴗᴗ◕｡)づ＜(▰˘◡˘▰)＜(▰˘◡˘▰)＜(▰˘◡˘▰)φ(❐_❐✧ 人丑就要多读书(っ•̀ω•́)っ✎⁾⁾ 我爱学习…φ(๑˃∀˂๑)♪ 学习是我的全部*:ஐ٩(๑´ᵕ`)۶ஐ:* 学习使我进步_φ_(．．) 写作业(。＿ 。） ✎＿学习计划走起(๑╹ヮ╹๑)ﾉ Studying makes me happy(:3[▓▓]快醒醒开学了﻿ε≡٩(๑>₃<)۶ 一心向学⭐凌晨三点╮（￣﹏￣）╭⭐精神！(((o(*ﾟ▽ﾟ*)o)))♡❤❤❤❤❤❤☞邱☀英☜❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤'}
            }
           
        })
        .then(json=>{
            return dispatch({type:'getartDtail',json})
        })
}

export function  cghead(k){
  
    return{
        type:'cghead',
        k
    }
}

//提交评论
export function commentsend(k,dispatch){

    return axios.post('/comment',{artId:k.artId,cont:k.cont,name:k.name,time:k.time,isadd:k.isadd,commentId:k.commentId})
                .then(res=>{             
                    return res.data
                })
                .then(json=>{
                    return dispatch({type:'postcom',json})
                })
}

export function getcomment(url,dispatch){
    return axios.get(url)
    .then(res=>{
      
        return res.data
    })
    .then(json=>{
        return dispatch({type:'getComment',json})
    })
}

export function pushcoment(k){
    return {
        type:'pushcoment',
        k
    }
}

//探索页面-------------------------------------------------------------------

//首页数据展示
export function getExplore(url,dispatch){
  return  axios.get(url)
                .then(res=>{
                    return res.data;
                })
                .then(json=>{
                    return dispatch({type:'Explore',json})
                })
}

//分类
export function findClass(url,dispatch){

    return axios.get(url)
                .then(res=>{
                    return res.data
                })
                .then(json=>{
                    return dispatch({type:'findclass',json})
                })
}

//专题

export function zhuanti(url,dispatch){

    return axios.get(url)
                .then(res=>{
                    return res.data
                })
                .then(json=>{
                    return dispatch({type:'zhuanTi',json})
                })
}

//收藏
export function soucang(){
   return {
       type:'souCang',
   }
}

export function collection(k,dispatch){
    return axios.post('/collection',k)
                .then(res=>{
                    return res.data
                })
                .then(json=>{
                    return dispatch({type:'collecTion',json})
                })
}

export function check(url,dispatch){
    return axios.get(url)
                .then(res=>{
                    return res.data
                })
                .then(json=>{
                    return dispatch({type:'getCheck',json})
                })
}

export function myCollectin(url,dispatch){
    return axios.get(url)
    .then(res=>{

        return res.data
    })
    .then(json=>{
        return dispatch({type:'Mycollection',json})
    })
}