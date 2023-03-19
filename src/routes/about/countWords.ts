export function getCountWordsWithoutH3(element : HTMLElement | null) {
    if (element === null) return 0;

    const collection = element.children;
    let total_words = 0;

    for (let index = 0; index < collection.length; index++) {
        const child = collection[index];
        if(child.tagName === 'H3') continue;
        total_words += child.innerHTML.trim().split(' ').length;
    }

    return total_words;
}