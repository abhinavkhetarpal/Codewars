// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const category = document.querySelector(".mw-category")
    const links = Array.from(category.querySelectorAll("a"))
    const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes('de'))
