export const getinfo = async (text:any)=>{
    try {
        const infohere = await fetch(`https://cataas.com/cat/says/${text}`).then((res)=>res.json)
        console.log(infohere);
        return infohere

    } catch (error) {
        console.log('error',error);
        return error
    }
       


}