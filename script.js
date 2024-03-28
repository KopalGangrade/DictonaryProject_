let searchBar = document.querySelector("#searchbar");
let searchButton = document.querySelector("#button");
let result = document.querySelector(".result");

function searchWord(word) {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let textWord = document.createElement("h1");
            textWord.textContent = `WORD: ${data[0].word}`;
            result.appendChild(textWord);

            let meaning = document.createElement("h2");
            meaning.textContent = `${data[0].meanings[0].definitions[0].definition}`;
            result.appendChild(meaning);

            let synonums = document.createElement("h2");
            synonums.textContent = `${data[0].meanings[0].synonyms[0]}`;
            result.appendChild(synonums);

            let antonyms = document.createElement("h2");
            antonyms.textContent = `${data[0].meanings[0].antonyms[0]}`;
            result.appendChild(antonyms);

            result.style.display = "block";
        })
        .catch((error) => {
            console.log(error);
        });
}

function handleSearch() {
    result.innerHTML = ""; 
    searchWord(searchBar.value);
    searchButton.removeEventListener("click", handleSearch); 
}

searchButton.addEventListener("click", handleSearch);
