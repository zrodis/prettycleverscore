interface BlueSelection {
    quantity: number
}
function getPrevQuantity(currentQuantity) {
    if (currentQuantity <= 0) return 0

    return currentQuantity - 1
}

export const calculateBlue = ({ quantity }: BlueSelection) => {
    let total = 0
    let prevScore = 0
    for (let i = 0; i <= quantity; i++) {
        total = prevScore + getPrevQuantity(i)
        prevScore = prevScore === 0 ? 1 : total
    }
    return total
}
