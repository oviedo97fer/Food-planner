const today = new Date();

const getDay = (day)=>{
    switch (day) {
        case 0:
            return 'DOM';
        case 1:
            return 'LUN'
        case 2:     
            return 'MAR'  
        case 3:
            return 'MIE'
        case 4:
            return 'JUE'
        case 5:
            return 'VIE'
        case 6:
            return 'SAB';
        default:
            console.log('ERROR')
            break;
    }
};

export default getDay(today.getDay());