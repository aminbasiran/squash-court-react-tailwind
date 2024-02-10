export const appendAddress = (addressObj) => {

    let multiLineAddress = ""

    for (const key in addressObj) {
        const value = addressObj[key];
        if (value !== "") { // Check if the value is not empty
            multiLineAddress += `${value}, ` ; // Concatenate value with a newline character
        }
    }

    return multiLineAddress
}