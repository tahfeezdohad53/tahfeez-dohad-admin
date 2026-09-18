export function formatName(name){
    if(!name) return;
    const formattedName = name.split(' ').slice(1).map(el => el.slice(0,1).toUpperCase() + el.slice(1)).join(' ');
    return formattedName;
}