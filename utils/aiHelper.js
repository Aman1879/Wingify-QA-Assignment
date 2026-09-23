

async function classifyDreamWithAI(dreamName) {

    const badKeywords = ['monster', 'maze', 'chase', 'dark', 'fall'];
    const lowerName = dreamName.toLowerCase();

    const isBad = badKeywords.some(keyword => lowerName.includes(keyword));
    return isBad ? 'Bad' : 'Good';
}

module.exports = { classifyDreamWithAI };