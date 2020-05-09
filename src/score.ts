interface Selection {
    quantity: number
}
function getPrevQuantity(currentQuantity) {
    if (currentQuantity <= 0) return 0

    return currentQuantity - 1
}

export const calculateBlue = ({ quantity }: Selection): number => {
    let total = 0
    let prevScore = 0
    for (let i = 0; i <= quantity; i++) {
        total = prevScore + getPrevQuantity(i)
        prevScore = prevScore === 0 ? 1 : total
    }
    return total
}

export const calculateGreen = ({ quantity }: Selection): number => {
    let total = 0
    let modifier = 0
    for (let i = 0; i <= quantity; i++) {
        total += modifier
        modifier++
    }
    return total
}
