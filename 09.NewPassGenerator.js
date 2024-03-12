function newPassGenerator(input) {
    let wordToChange = input.pop().split(``);
    let splitedWord = input[0].concat(input[1]);
    let vowels = [`a`, `e`, `i`, `o`, `u`];

    let idxWordToChange = 0;

    for (let i = 0; i < splitedWord.length; i++) {
        let letter = splitedWord[i];
        if (vowels.includes(letter.toLowerCase())) {
            splitedWord = splitedWord.replace(letter, wordToChange[idxWordToChange].toUpperCase());
            idxWordToChange = (idxWordToChange + 1) % wordToChange.length;

        }
    }
    let finalResult = splitedWord.split(``).reverse().join(`$`);
    console.log(`Your generated password is ${finalResult}`);

}
newPassGenerator(['miroslav', 'petrov', 'junior']);
//newPassGenerator(['easymoneyeazylife', 'atleasttencharacters', 'absolute']);
