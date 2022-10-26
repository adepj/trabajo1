

const quoteBox = () => {
    const changeUser = () => {
        const anotherRandom = Math.floor(Math.random() * quotes.length);
        setIndex(anotherRandom);
    return (
        <div>
            <button onClick={changeUser} style={{ color: colors[randomColorIndex] }}>
        <i class="fa-solid fa-shuffle"></i>
      </button>
        </div>
    );
};
}
export default quoteBox;
