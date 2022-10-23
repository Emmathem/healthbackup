// TO REDUCE STRING LENGTH
export const truncateText = (string = '', length = '30', ending = '...') => {
    if (!(string && length)) {
        return;
    }
    return length > string.length ? string : string.substring(0, length - ending.length) + ending;
};
