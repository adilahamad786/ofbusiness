function daysOld(stringDate) {
    const currentTimestamp = Date.now();
    const oldTimestamp = new Date(stringDate).getTime();
    const differenceInMilliseconds = currentTimestamp - oldTimestamp;
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    
    return differenceInDays;
}

export default daysOld;