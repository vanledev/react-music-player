function shuffleArray(array) {
  let arr2 = [...array];
    for (let i = arr2.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr2[i], arr2[j]] = [arr2[j], arr2[i]];
    }
    return arr2;
}
export default shuffleArray;