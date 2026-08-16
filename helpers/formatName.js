export function formatName(name){
    const slice = name.split(' ').slice(1).join(' ');
    const formattedName = slice.slice(0,1).toUpperCase() + slice.slice(1);
    return formattedName;
}