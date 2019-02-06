export const sum = (num1, num2) => {
    return num1 + num2;
}
export const sub = (num1, num2) => {
    return num1 - num2;
}
export const mult  = (num1, num2) => {
    return num1 * num2;
}
export const div = (num1, num2) => {
    return (num2 === 0) ? `Não é possível dividir ${num1} por 0` : num1 / num2;
}