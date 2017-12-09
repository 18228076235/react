
const initState={
    number:null,
    name:'',
    user:[],
    recommend:[],
    ardetailData:[],
    headData:'',
    commentDate:[],
    exportData:[],
    classData:[],
    ztData:[],
    icon:"icon-shuqian",
    sc:false,  
    collectionData:[]
}

export default (state=initState,action)=>{
    switch(action.type){
        case 'yzsjh':
        state.number=action.k;
        return Object.assign({},state);

        case 'getName':
        state.name=action.k;
        return Object.assign({},state);

        case 'getUser':
        state.user=action.k;
        return Object.assign({},state);

        case 'indexData':
        state.recommend=action.json;
        return Object.assign({},state);

        case 'getartDtail':
        state.ardetailData=action.json;
        return Object.assign({},state);

        case 'cghead':
        state.headData=action.k;
        return Object.assign({},state);

        case 'getComment':
        if(action.json=='0'){
            state.commentDate=[]
        }else{
            state.commentDate=action.json;
        }
      
       
        return Object.assign({},state);

        case 'pushcoment':
        state.commentDate.push(action.k);

        case 'Explore':
        state.exportData=action.json;
        return Object.assign({},state);

        case 'findclass':
        state.classData=action.json;
        return Object.assign({},state);

        case 'zhuanTi':
        state.ztData=action.json;
        state.columnDetail=action.json;
        return Object.assign({},state);

        case 'souCang':
        state.sc=!state.sc;
        if(state.sc==true){
            state.icon='icon-shouchang';

        }else{
            state.icon='icon-shuqian';
           
        }
        return Object.assign({},state);

        case 'collecTion':
        return Object.assign({},state);
        
        case 'getCheck':
        state.sc=action.json;
        if(state.sc==true){
            state.icon='icon-shouchang';
        }else{
            state.icon='icon-shuqian';
           
        }
        return Object.assign({},state);

        case 'Mycollection':
        state.collectionData=action.json;
        return Object.assign({},state);
                
       default:
       return Object.assign({},state);
       break;
        
    }
}