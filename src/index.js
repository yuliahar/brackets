module.exports = function check(str, bracketsConfig) {
    let array = str.split('');
    for (let index = 0; index < array.length; index++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            let config = bracketsConfig[i];
            if (config.includes(array[index]))
                for (let j = 0; j < config.length; j++) {
                    if (array[index] === config[j] && array[index + 1] === config[j + 1]) {
                        array.splice(index, 2);
                        if (index > 2) index -= 2;
                        else index = -1;
                        break;
                    }
                    else {
                        i = bracketsConfig.length;
                        break;
                    }
                }
        }
    }
    if (array.length === 0)  return true;
    else return false;
}
