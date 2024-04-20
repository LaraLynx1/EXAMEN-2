export const getfact = async () => {
    try {
        const infofact = await fetch('https://catfact.ninja/fact').then((res)=> res.json())
        console.log(infofact);
        return infofact.fact;
    } catch (error) {
        console.log('error',error);
        return error
    }
}