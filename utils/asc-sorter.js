function ascSort(data) {
    if (typeof data[0] !== 'string') {
        data.sort((a, b) => {
            let fa = a.type.toLowerCase(),
                fb = b.type.toLowerCase();
        
            if (fa < fb) {
                return -1;
            } if (fa > fb) {
                return 1;
            }
            return 0;
        });
    } else {
        data.sort((a, b) => {
            let sa = a.toLowerCase(),
                sb = b.toLowerCase();
                if (sa < sb) {
                    return -1;
                }
                if (sa > sb) {
                    return 1;
                }
                return 0;
        });
    }
}

module.exports = {
    ascSort:  ascSort
}