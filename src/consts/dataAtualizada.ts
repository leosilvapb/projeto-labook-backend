export const dataAtualizada = () => {
    const data = (new Date()).getTimezoneOffset() * 60000;
    const dataBase = (new Date(Date.now() - data)).toISOString();

    return dataBase
}