const db = [
    // RAIMON ORIGINAL (S1)
    { id: 1, name: "Mark Evans", team: "Raimon", pos: "PR", elem: "Montaña ⛰️", num: 1, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 2, name: "Nathan Swift", team: "Raimon", pos: "DF", elem: "Aire 🌪️", num: 2, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 3, name: "Jack Wallside", team: "Raimon", pos: "DF", elem: "Montaña ⛰️", num: 5, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 4, name: "Jim Wraith", team: "Raimon", pos: "DF", elem: "Bosque 🌲", num: 3, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 5, name: "Tod Ironside", team: "Raimon", pos: "DF", elem: "Fuego 🔥", num: 4, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 6, name: "Steve Grim", team: "Raimon", pos: "MD", elem: "Aire 🌪️", num: 6, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 7, name: "Timmy Saunders", team: "Raimon", pos: "MD", elem: "Aire 🌪️", num: 7, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 8, name: "Sam Kincaid", team: "Raimon", pos: "MD", elem: "Fuego 🔥", num: 8, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 9, name: "Max Carson", team: "Raimon", pos: "MD", elem: "Aire 🌪️", num: 9, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 10, name: "Axel Blaze", team: "Raimon", pos: "DL", elem: "Fuego 🔥", num: 10, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 11, name: "Kevin Dragonfly", team: "Raimon", pos: "DL", elem: "Bosque 🌲", num: 11, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 12, name: "Willy Glass", team: "Raimon", pos: "DL", elem: "Montaña ⛰️", num: 12, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 13, name: "Bobby Shearer", team: "Raimon", pos: "DF", elem: "Bosque 🌲", num: 13, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 14, name: "Jude Sharp", team: "Raimon", pos: "MD", elem: "Aire 🌪️", num: 14, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 15, name: "Erik Eagle", team: "Raimon", pos: "MD", elem: "Bosque 🌲", num: 16, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 16, name: "Shadow Cimmerian", team: "Raimon", pos: "DL", elem: "Bosque 🌲", num: 21, gen: "M", season: 1, saga: "IE1", arco: "FF" },

    // RIVALES FF (S1)
    { id: 20, name: "Joe King", team: "Royal Academy", pos: "PR", elem: "Fuego 🔥", num: 1, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 21, name: "David Samford", team: "Royal Academy", pos: "DL", elem: "Aire 🌪️", num: 11, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 22, name: "Daniel Hatch", team: "Royal Academy", pos: "DL", elem: "Montaña ⛰️", num: 9, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 23, name: "Derek Swing", team: "Royal Academy", pos: "MD", elem: "Aire 🌪️", num: 8, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 30, name: "Byron Love", team: "Zeus", pos: "MD", elem: "Bosque 🌲", num: 10, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 31, name: "Poseidon", team: "Zeus", pos: "PR", elem: "Montaña ⛰️", num: 1, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 32, name: "Apollo", team: "Zeus", pos: "DF", elem: "Fuego 🔥", num: 2, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 33, name: "Hera", team: "Zeus", pos: "DL", elem: "Aire 🌪️", num: 11, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 40, name: "Thomas Feldt", team: "Brainwashing", pos: "PR", elem: "Bosque 🌲", num: 1, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 41, name: "Neil Turner", team: "Brainwashing", pos: "DL", elem: "Fuego 🔥", num: 10, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 42, name: "Johan Tassman", team: "Occult", pos: "DL", elem: "Bosque 🌲", num: 9, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 43, name: "Marvin Murdock", team: "Kirkwood", pos: "DL", elem: "Bosque 🌲", num: 9, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 44, name: "Tyler Murdock", team: "Kirkwood", pos: "DL", elem: "Fuego 🔥", num: 11, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 45, name: "Thomas Murdock", team: "Kirkwood", pos: "DL", elem: "Montaña ⛰️", num: 10, gen: "M", season: 1, saga: "IE1", arco: "FF" },
    { id: 46, name: "Albert Green", team: "Farm", pos: "PR", elem: "Bosque 🌲", num: 1, gen: "M", season: 1, saga: "IE1", arco: "FF" },

    // CARAVANA INAZUMA (S2)
    { id: 50, name: "Shawn Froste", team: "Instituto Alpino", pos: "DL", elem: "Aire 🌪️", num: 9, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 51, name: "Tori Vanguard", team: "Raimon II", pos: "MD", elem: "Fuego 🔥", num: 6, gen: "F", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 52, name: "Sue Hartland", team: "Triple C", pos: "DL", elem: "Aire 🌪️", num: 10, gen: "F", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 53, name: "Darren LaChance", team: "Fauxshore", pos: "PR", elem: "Bosque 🌲", num: 1, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 54, name: "Hurley Kane", team: "Mary Times", pos: "DF", elem: "Aire 🌪️", num: 4, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 55, name: "Scott Banyan", team: "Claustro Sagrado", pos: "DF", elem: "Bosque 🌲", num: 6, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 56, name: "Soundtown", team: "Mary Times", pos: "MD", elem: "Fuego 🔥", num: 7, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },

    // ACADEMIA ALIEA (S2)
    { id: 60, name: "Janus (Jordan)", team: "Tormenta Géminis", pos: "MD", elem: "Bosque 🌲", num: 10, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 61, name: "Diam", team: "Tormenta Géminis", pos: "DL", elem: "Fuego 🔥", num: 11, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 62, name: "Dvalin (Dave)", team: "Epsilon", pos: "PR", elem: "Fuego 🔥", num: 1, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 63, name: "Zell", team: "Epsilon", pos: "DL", elem: "Aire 🌪️", num: 11, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 64, name: "Metron", team: "Epsilon", pos: "MD", elem: "Aire 🌪️", num: 10, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 65, name: "Gazelle (Bryce)", team: "Polvo Diamantes", pos: "DL", elem: "Aire 🌪️", num: 10, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 66, name: "Burn (Claude)", team: "Prominence", pos: "DL", elem: "Fuego 🔥", num: 10, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 67, name: "Gocker", team: "Prominence", pos: "PR", elem: "Fuego 🔥", num: 1, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 68, name: "Xavier Foster (Xene)", team: "Genesis", pos: "DL", elem: "Fuego 🔥", num: 11, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 69, name: "Bellatrix", team: "Genesis", pos: "MD", elem: "Aire 🌪️", num: 10, gen: "F", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 70, name: "Nero", team: "Genesis", pos: "PR", elem: "Aire 🌪️", num: 1, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 71, name: "Wittz", team: "Genesis", pos: "DF", elem: "Aire 🌪️", num: 4, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },

    // INAZUMA JAPÓN / FFI (S3)
    { id: 80, name: "Austin Hobbes", team: "Inazuma Japón", pos: "DL", elem: "Fuego 🔥", num: 11, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 81, name: "Archer Hawkins", team: "Inazuma Japón", pos: "DF", elem: "Aire 🌪️", num: 7, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 82, name: "Caleb Stonewall", team: "Inazuma Japón", pos: "MD", elem: "Fuego 🔥", num: 8, gen: "M", season: 2, saga: "IE3", arco: "FFI" },
    { id: 83, name: "Thor Stoutberg", team: "Inazuma Japón", pos: "DF", elem: "Montaña ⛰️", num: 12, gen: "M", season: 2, saga: "IE3", arco: "FFI" },
    { id: 84, name: "Dave Quagmire", team: "Neo Japón", pos: "MD", elem: "Fuego 🔥", num: 10, gen: "M", season: 2, saga: "IE3", arco: "FFI" },
    { id: 90, name: "Nice Dolphin", team: "Big Waves", pos: "MD", elem: "Aire 🌪️", num: 9, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 91, name: "Joe Jones", team: "Big Waves", pos: "DL", elem: "Fuego 🔥", num: 11, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 92, name: "Bjorn Kyle", team: "Desert Lion", pos: "DL", elem: "Fuego 🔥", num: 10, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 93, name: "Chan-soo", team: "Fire Dragon", pos: "MD", elem: "Bosque 🌲", num: 7, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 94, name: "Edgar Partinus", team: "Knights of Queen", pos: "DL", elem: "Bosque 🌲", num: 10, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 95, name: "Thiago Torres", team: "The Empire", pos: "DF", elem: "Montaña ⛰️", num: 2, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 96, name: "Leone", team: "The Empire", pos: "DL", elem: "Fuego 🔥", num: 10, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 97, name: "Mark Kruger", team: "Unicorn", pos: "MD", elem: "Bosque 🌲", num: 9, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 98, name: "Dylan Keats", team: "Unicorn", pos: "DL", elem: "Aire 🌪️", num: 10, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 99, name: "Paolo Bianchi", team: "Orpheus", pos: "DL", elem: "Bosque 🌲", num: 10, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 100, name: "Hidetoshi Nakata", team: "Orpheus", pos: "MD", elem: "Montaña ⛰️", num: 7, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 101, name: "Gigi Blasi", team: "Orpheus", pos: "PR", elem: "Fuego 🔥", num: 1, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 102, name: "Mac Robingo", team: "The Kingdom", pos: "DL", elem: "Fuego 🔥", num: 10, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 103, name: "Lagarto", team: "The Kingdom", pos: "DF", elem: "Bosque 🌲", num: 2, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 104, name: "Hector Helio", team: "Little Gigant", pos: "PR", elem: "Fuego 🔥", num: 1, gen: "M", season: 3, saga: "IE3", arco: "FFI" },
    { id: 105, name: "Drago Hill", team: "Little Gigant", pos: "DL", elem: "Fuego 🔥", num: 11, gen: "M", season: 3, saga: "IE3", arco: "FFI" },

    // EXTRAS
    { id: 110, name: "Paul Peabody", team: "Raimon", pos: "DF", elem: "Bosque 🌲", num: 99, gen: "M", season: 1, saga: "IE1", arco: "Extra" },
    { id: 111, name: "Miles Ryan", team: "Raimon Atletismo", pos: "DF", elem: "Aire 🌪️", num: 0, gen: "M", season: 1, saga: "IE1", arco: "Extra" },
    { id: 112, name: "Saggy", team: "Scout", pos: "DL", elem: "Aire 🌪️", num: 10, gen: "M", season: 1, saga: "IE1", arco: "Extra" },
    { id: 113, name: "Canon Evans", team: "Futuro", pos: "DL", elem: "Aire 🌪️", num: 20, gen: "M", season: 3, saga: "IE3", arco: "Extra" },
    { id: 114, name: "Syon Blaze", team: "Futuro", pos: "DL", elem: "Fuego 🔥", num: 18, gen: "M", season: 2, saga: "IE2", arco: "Extra" },
    { id: 115, name: "Lancer", team: "Ogre", pos: "DL", elem: "Bosque 🌲", num: 10, gen: "M", season: 3, saga: "IE3", arco: "Película" },
    { id: 116, name: "Malice", team: "Ogre", pos: "DL", elem: "Aire 🌪️", num: 9, gen: "M", season: 3, saga: "IE3", arco: "Película" },
    { id: 117, name: "Callous", team: "Ogre", pos: "DL", elem: "Aire 🌪️", num: 11, gen: "M", season: 3, saga: "IE3", arco: "Película" },
    { id: 120, name: "Victoria Vanguard", team: "Servicio Secreto", pos: "MD", elem: "Aire 🌪️", num: 0, gen: "F", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 121, name: "Caleb Stonewall (Redux)", team: "Redux", pos: "MD", elem: "Fuego 🔥", num: 10, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },

    // NUEVOS JUGADORES
    { id: 122, name: "Elka Beson", team: "Royal Academy", pos: "DL", elem: "Aire 🌪️", num: 44, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 123, name: "Camello Kun", team: "Raimon", pos: "DL", elem: "Fuego 🔥", num: 91, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 124, name: "Elga Fota", team: "Raimon", pos: "MD", elem: "Bosque 🌲", num: 67, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
    { id: 125, name: "Whan Karlo", team: "Raimon", pos: "DF", elem: "Montaña ⛰️", num: 4, gen: "M", season: 2, saga: "IE2", arco: "Aliea" },
];

// --- 2. CONFIGURACIÓN DEL JUEGO ---
const input = document.getElementById('guessInput');
const suggestionsBox = document.getElementById('suggestions');
const errorMessage = document.getElementById('errorMessage');
const target = db[Math.floor(Math.random() * db.length)];
let guessedIds = [];
let errorTimeout;

// --- CARGA DE SONIDO CORREGIDA ---
const kickSound = new Audio('sonido.mp3');
// Asegúrate de que el archivo en la carpeta se llame EXACTAMENTE "sonido.mp3"

console.log("SOLUCIÓN PARA TESTING: " + target.name);

// Función para mostrar errores
function showError(message) {
    clearTimeout(errorTimeout);
    errorMessage.innerHTML = `❌ ${message}`;
    errorMessage.style.display = 'flex';
    errorTimeout = setTimeout(() => {
        errorMessage.style.display = 'none';
    }, 3000);
}

// --- 3. EVENTOS ---

// Al escribir
input.addEventListener('input', function () {
    errorMessage.style.display = 'none';
    const val = this.value.toLowerCase();
    suggestionsBox.innerHTML = '';

    if (!val) {
        suggestionsBox.style.display = 'none';
        return;
    }

    const matches = db.filter(p => p.name.toLowerCase().includes(val) && !guessedIds.includes(p.id));

    if (matches.length > 0) {
        matches.forEach(match => {
            const li = document.createElement('li');

            const img = document.createElement('img');
            img.src = `images/${match.id}.png`;
            img.className = 'suggestion-thumb';
            img.onerror = function () { this.src = 'https://via.placeholder.com/40x40/333333/ffffff?text=?'; };

            const span = document.createElement('span');
            span.textContent = match.name;

            li.appendChild(img);
            li.appendChild(span);

            li.onclick = () => {
                input.value = match.name;
                suggestionsBox.style.display = 'none';
                input.focus();
            };

            suggestionsBox.appendChild(li);
        });
        suggestionsBox.style.display = 'block';
    } else {
        suggestionsBox.style.display = 'none';
    }
});

// Al pulsar Enter
input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') { checkGuess(); }
});

// Clic en botón
document.getElementById('submitBtn').addEventListener('click', checkGuess);

document.addEventListener('click', function (e) {
    if (e.target !== input && e.target !== suggestionsBox) {
        suggestionsBox.style.display = 'none';
    }
});

// --- 4. LÓGICA PRINCIPAL ---
function checkGuess() {
    let val = input.value.trim();
    if (!val) return;

    // Buscar jugador no usado
    let guess = db.find(p => p.name.toLowerCase() === val.toLowerCase() && !guessedIds.includes(p.id));

    if (!guess) {
        guess = db.find(p => p.name.toLowerCase().includes(val.toLowerCase()) && !guessedIds.includes(p.id));
    }

    if (!guess) {
        input.value = "";
        return;
    }

    // --- REPRODUCIR SONIDO ---
    // Nota: Los navegadores a veces bloquean el sonido si no has interactuado con la página antes.
    // Como esto ocurre al hacer click o enter, debería funcionar.
    kickSound.currentTime = 0;
    kickSound.play().catch(e => console.log("Error al reproducir sonido:", e));
    // -------------------------

    errorMessage.style.display = 'none';

    const grid = document.getElementById('grid');
    const row = document.createElement('div');
    row.className = 'row';

    function createImageCell(id) {
        const div = document.createElement('div');
        div.className = 'cell img-cell';
        const img = document.createElement('img');
        img.src = `images/${id}.png`;
        img.onerror = function () { this.src = 'https://via.placeholder.com/70x70/333333/ffffff?text=?'; };
        div.appendChild(img);
        return div;
    }

    function createCell(text, status) {
        const div = document.createElement('div');
        div.className = `cell ${status}`;
        div.innerHTML = text;
        return div;
    }

    // Columnas
    row.appendChild(createImageCell(guess.id));
    row.appendChild(createCell(guess.name, guess.id === target.id ? 'green' : ''));
    row.appendChild(createCell(guess.team, guess.team === target.team ? 'green' : 'red'));
    row.appendChild(createCell(guess.pos, guess.pos === target.pos ? 'green' : 'red'));
    row.appendChild(createCell(guess.elem, guess.elem === target.elem ? 'green' : 'red'));
    row.appendChild(createCell(guess.saga, guess.saga === target.saga ? 'green' : 'red'));
    row.appendChild(createCell(guess.arco, guess.arco === target.arco ? 'green' : 'red'));

    let numText = guess.num;
    let numStatus = 'red';
    if (guess.num === target.num) { numStatus = 'green'; }
    else if (guess.num < target.num) { numText += " ⬆️"; }
    else { numText += " ⬇️"; }
    row.appendChild(createCell(numText, numStatus));

    grid.insertBefore(row, grid.children[1]);

    guessedIds.push(guess.id);
    input.value = "";
    suggestionsBox.style.display = 'none';
    input.focus();

    // Victoria
    if (guess.id === target.id) {
        const winMsg = document.getElementById('winMessage');
        winMsg.style.display = 'flex';
        input.disabled = true;
        document.getElementById('submitBtn').disabled = true;

        var count = 200;
        var defaults = { origin: { y: 0.7 } };
        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }
        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });

        setTimeout(() => {
            winMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
    }
}