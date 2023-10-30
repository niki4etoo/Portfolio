export const getRandomRotation = () => {
    const FORWARD = 90;
    const REVERSE = -90;
    let randomVal = Math.floor(Math.random() * 2 + 1); // between 1 and 2
    let rotate = randomVal > 1 ? FORWARD : REVERSE;
    return rotate;
}