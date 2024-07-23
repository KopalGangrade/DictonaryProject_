let searchBar = document.querySelector("#searchbar");
let searchButton = document.querySelector("#button");
let result = document.querySelector(".result");

function searchWord(word) {
  let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let textWord = document.createElement("h1");
      textWord.textContent = `Word: ${data[0].word}`;
      result.appendChild(textWord);
      textWord.style.marginLeft = "20px";
      textWord.style.marginTop = "20px";

      let phonetics= document.createElement("h2");
      phonetics.textContent = `Phonetics: ${data[0].phonetics[1].text}`;
      result.appendChild(phonetics);
      phonetics.style.marginTop = "20px";

      let meaning = document.createElement("h2");
      meaning.textContent = `Meaning: ${data[0].meanings[0].definitions[0].definition}`;
      result.appendChild(meaning);
      meaning.style.marginTop = "20px";

      let synonums = document.createElement("h2");
      synonums.textContent = `Synonums: ${data[0].meanings[0].synonyms[0]}`;
      result.appendChild(synonums);
      synonums.style.marginTop = "20px";

      let antonyms = document.createElement("h2");
      antonyms.textContent = `Antonyms: ${data[0].meanings[0].antonyms[0]}`;
      result.appendChild(antonyms);
      antonyms.style.marginTop = "20px";

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
