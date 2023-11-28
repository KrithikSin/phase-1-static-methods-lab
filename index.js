class Formatter {
    //add static methods here
    static capitalize(string) {
        const upperCasedString = string[0].toUpperCase() + string.slice(1);
        return upperCasedString;
    }
    static sanitize(string) {
        const sanitizedString = string.replace(/[^\w\s'-]/g, '');
        return sanitizedString;
    }
    static titleize(string) {
        const notCapital = [
            'the',
            'a',
            'an',
            'but',
            'of',
            'and',
            'for',
            'at',
            'by',
            'from',
        ];

        const words = string.split(' ');

        const titleizedWords = words.map((word, index) => {
            if (index === 0 || !notCapital.includes(word.toLowerCase())) {
                return word.charAt(0).toUpperCase() + word.slice(1);
            } else {
                return word;
            }
        });
        const titleizedString = titleizedWords.join(' ');

        return titleizedString;
    }
}
