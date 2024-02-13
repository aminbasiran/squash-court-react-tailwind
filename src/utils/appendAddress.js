export const appendAddress = (address) => {
    let multilineAddress = ""

    for (const key in address){
        const value = address[key]
        if (value !== "") {
            multilineAddress = multilineAddress + value + "," + " "
        }

    }

    const finalAddres = multilineAddress.slice(0, -2)
    return finalAddres
}