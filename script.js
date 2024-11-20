const facts = [
    "I am 20 years old and have a passion for exploring mountains.",
    "I love hiking and have visited several mountain ranges.",
    "I enjoy capturing the beauty of mountains through photography.",
    "I am learning about the geology and ecosystems of mountainous regions.",
    "I aspire to climb some of the world's highest peaks in the future."
];

document.getElementById('generateFact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('factDisplay').textContent = facts[randomIndex];
});
