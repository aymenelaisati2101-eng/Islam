/* ============================================
   ISLAMQUEST - GAME LOGIC
   ============================================ */

// ==================== DONNÉES ====================

const CARD_DATA = [
    // Exemple de cartes pour la démonstration
    {
        id: 47,
        name: 'La Kaaba',
        category: 'Lieux',
        rarity: 'legendary', // common, rare, epic, legendary, secret
        emoji: '🕋',
        info: 'La Kaaba est un bâtiment cubique situé à La Mecque. Les musulmans du monde entier se tournent vers la Kaaba pour prier. Elle est le lieu le plus sacré de l\'Islam.',
        question: 'Dans quelle ville se trouve la Kaaba ?',
        options: ['Médine', 'La Mecque', 'Jérusalem', 'Bagdad'],
        correctAnswer: 1,
        learning: 'La Kaaba est le centre spirituel de l\'Islam. Le Hajj, l\'un des cinq piliers de l\'Islam, implique un voyage à La Mecque pour tourner autour de la Kaaba.'
    },
    {
        id: 1,
        name: 'Les Cinq Piliers',
        category: 'Pratiques',
        rarity: 'common',
        emoji: '🕌',
        info: 'Les Cinq Piliers de l\'Islam sont les fondations de la foi musulmane : la Shahada (déclaration de foi), la Salat (prière), la Zakat (aumône), le Sawm (jeûne), et le Hajj (pèlerinage).',
        question: 'Combien de piliers fondamentaux l\'Islam possède-t-il ?',
        options: ['Trois', 'Cinq', 'Sept', 'Dix'],
        correctAnswer: 1,
        learning: 'Ces cinq piliers sont les pratiques essentielles qu\'un musulman doit suivre pour vivre une vie religieuse équilibrée.'
    },
    {
        id: 2,
        name: 'Le Prophète Muhammad',
        category: 'Personnages historiques',
        rarity: 'epic',
        emoji: '📖',
        info: 'Muhammad ibn Abdillah est le fondateur de l\'Islam et le dernier prophète selon la croyance musulmane. Il est né en 570 à La Mecque.',
        question: 'En quelle année le Prophète Muhammad est-il né ?',
        options: ['540', '560', '570', '580'],
        correctAnswer: 2,
        learning: 'Le Prophète Muhammad a guidé la communauté musulmane pendant 23 ans et a reçu le Coran du Seigneur par l\'Archange Gabriel.'
    },
    {
        id: 3,
        name: 'Le Coran',
        category: 'Vocabulaire',
        rarity: 'legendary',
        emoji: '📚',
        info: 'Le Coran est le livre sacré de l\'Islam, contenant la parole révélée de Dieu aux musulmans par le Prophète Muhammad. Il compte 114 sourates.',
        question: 'Combien de sourates contient le Coran ?',
        options: ['100', '114', '120', '150'],
        correctAnswer: 1,
        learning: 'Le Coran est divisé en versets appelés "ayahs" et en chapitres appelés "sourates". Les musulmans le récitent pendant la prière.'
    },
    {
        id: 4,
        name: 'Al-Masjid al-Haram',
        category: 'Mosquées',
        rarity: 'epic',
        emoji: '🕋',
        info: 'La mosquée Sacrée est située à La Mecque et est la plus grande mosquée du monde. Elle entoure la Kaaba.',
        question: 'Quelle mosquée entoure la Kaaba ?',
        options: ['Al-Masjid al-Aqsa', 'Al-Masjid al-Haram', 'La Mosquée du Prophète', 'La Mosquée Bleue'],
        correctAnswer: 1,
        learning: 'Al-Masjid al-Haram peut accueillir plus de deux millions de musulmans lors du Hajj. C\'est le cœur spirituel de l\'Islam.'
    },
    {
        id: 5,
        name: 'Le Hajj',
        category: 'Pratiques',
        rarity: 'rare',
        emoji: '🚶',
        info: 'Le Hajj est le pèlerinage à La Mecque, l\'un des cinq piliers de l\'Islam. Environ 2 millions de musulmans effectuent le Hajj chaque année.',
        question: 'Combien de fois un musulman doit-il faire le Hajj ?',
        options: ['Chaque année', 'Une fois dans sa vie', 'Deux fois', 'Autant que possible'],
        correctAnswer: 1,
        learning: 'Le Hajj doit être effectué au mois de Dhul-Hijjah, le dernier mois du calendrier lunaire islamique.'
    },
    {
        id: 6,
        name: 'Médine',
        category: 'Lieux',
        rarity: 'rare',
        emoji: '🏛️',
        info: 'Médine est la deuxième ville sainte de l\'Islam. Le Prophète Muhammad a établi la première communauté musulmane à Médine en 622.',
        question: 'Quel événement important le Prophète Muhammad a-t-il accompli à Médine en 622 ?',
        options: ['Sa naissance', 'L\'Hégire (migration)', 'Sa mort', 'La révélation du Coran'],
        correctAnswer: 1,
        learning: 'L\'Hégire (migration de La Mecque à Médine) marque le début du calendrier islamique (année 1 de l\'Hégire).'
    },
    {
        id: 999,
        name: 'Sagesse Infinie',
        category: 'Valeurs',
        rarity: 'secret',
        emoji: '✨',
        info: 'Une carte secrète révélant les valeurs universelles de l\'Islam : compassion, justice, connaissance et miséricorde envers tous.',
        question: 'Quel concept est au cœur de l\'éthique islamique ?',
        options: ['La vengeance', 'La justice et la miséricorde', 'L\'individualisme', 'Le pouvoir'],
        correctAnswer: 1,
        learning: 'L\'Islam enseigne que la connaissance est une vertu fondamentale, et que chaque musulman doit chercher à apprendre tout au long de sa vie.'
    }
];

// Générer les 1000 cartes avec données basiques
function generateAllCards() {
    const allCards = [...CARD_DATA];
    
    // Remplir les cartes manquantes avec des données génériques
    for (let i = allCards.length + 1; i <= 1000; i++) {
        allCards.push({
            id: i,
            name: `Carte ${i}`,
            category: 'À venir',
            rarity: ['common', 'rare', 'epic', 'legendary'][Math.floor(Math.random() * 4)],
            emoji: '?',
            info: 'Contenu éducatif en développement.',
            question: 'Question à venir',
            options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
            correctAnswer: 0,
            learning: 'Du contenu pédagogique sera ajouté progressivement.'
        });
    }
    
    return allCards;
}

// ==================== ÉTAT DU JEU ====================

const CARDS = generateAllCards();

const gameState = {
    playerName: localStorage.getItem('playerName') || 'Joueur',
    playerAvatar: localStorage.getItem('playerAvatar') || '👤',
    unlockedCards: JSON.parse(localStorage.getItem('unlockedCards') || '[]'),
    currentQuestion: null,
    selectedAnswer: null,
    leaderboard: JSON.parse(localStorage.getItem('leaderboard') || '[]')
};

// Initialiser le leaderboard avec des joueurs de démonstration
if (gameState.leaderboard.length === 0) {
    gameState.leaderboard = [
        { name: 'AlchemyMaster', cards: 847, avatar: '🧙' },
        { name: 'QuestSeekerPro', cards: 723, avatar: '🗺️' },
        { name: 'KnowledgeHunter', cards: 695, avatar: '📚' },
        { name: 'VirtueCollector', cards: 612, avatar: '💎' },
        { name: 'HarmonySeeker', cards: 543, avatar: '☮️' }
    ];
}

// ==================== SAUVEGARDE ====================

function saveGameState() {
    localStorage.setItem('playerName', gameState.playerName);
    localStorage.setItem('playerAvatar', gameState.playerAvatar);
    localStorage.setItem('unlockedCards', JSON.stringify(gameState.unlockedCards));
    localStorage.setItem('leaderboard', JSON.stringify(gameState.leaderboard));
}

function unlockCard(cardId) {
    if (!gameState.unlockedCards.includes(cardId)) {
        gameState.unlockedCards.push(cardId);
        saveGameState();
        return true;
    }
    return false;
}

function isCardUnlocked(cardId) {
    return gameState.unlockedCards.includes(cardId);
}

// ==================== CRÉATION DE CARTES ====================

function createCardElement(cardId, isLarge = false) {
    const card = CARDS.find(c => c.id === cardId);
    if (!card) return null;

    const isUnlocked = isCardUnlocked(cardId);

    if (isLarge) {
        return createLargeCard(card, isUnlocked);
    }

    if (!isUnlocked) {
        return createLockedCard(card);
    }

    return createUnlockedCard(card);
}

function createLockedCard(card) {
    const div = document.createElement('div');
    div.className = `card card-locked`;
    div.innerHTML = `
        <div class="card-locked-symbol">?</div>
        <div class="card-locked-lock">🔒</div>
        <div class="card-locked-number">#${String(card.id).padStart(3, '0')} / 1000</div>
    `;
    return div;
}

function createUnlockedCard(card) {
    const div = document.createElement('div');
    div.className = `card card-unlocked ${card.rarity}`;
    div.innerHTML = `
        <div class="card-header">
            <div class="card-number">#${String(card.id).padStart(3, '0')} / 1000</div>
            <div class="card-rarity-icon">${getRarityIcon(card.rarity)}</div>
        </div>
        <div class="card-image">${card.emoji}</div>
        <div class="card-name">${card.name}</div>
        <div class="card-category">${card.category}</div>
        <div class="card-info">${truncateText(card.info, 50)}</div>
    `;
    
    div.addEventListener('click', () => showCardModal(card.id));
    return div;
}

function createLargeCard(card, isUnlocked) {
    const div = document.createElement('div');
    div.className = `card card-large ${card.rarity}`;
    
    if (isUnlocked) {
        div.innerHTML = `
            <div class="card-large-image">${card.emoji}</div>
            <div class="card-large-header">
                <div class="card-large-number">#${String(card.id).padStart(3, '0')} / 1000</div>
                <div class="card-large-name">${card.name}</div>
                <div class="card-large-category">${card.category}</div>
                <div class="card-large-rarity">
                    <span class="card-large-rarity-icon">${getRarityIcon(card.rarity)}</span>
                    ${getRarityLabel(card.rarity)}
                </div>
            </div>
            <div class="card-large-info">${card.info}</div>
        `;
    } else {
        div.innerHTML = `
            <div class="card-large-image">?</div>
            <div class="card-large-header">
                <div class="card-large-number">#${String(card.id).padStart(3, '0')} / 1000</div>
                <div class="card-large-name">Carte Mystérieuse</div>
                <div class="card-large-rarity">
                    <span class="card-large-rarity-icon">❓</span>
                    Rareté inconnue
                </div>
            </div>
            <div class="card-large-info">Déverouille cette carte en répondant correctement aux questions éducatives.</div>
        `;
    }
    
    return div;
}

function createCollectorCard() {
    const div = document.createElement('div');
    div.className = 'card card-large legendary';
    div.innerHTML = `
        <div class="card-large-image">🏆</div>
        <div class="card-large-header">
            <div class="card-large-number">#1000 / 1000</div>
            <div class="card-large-name">Collector Suprême</div>
            <div class="card-large-category">Collection Complète</div>
            <div class="card-large-rarity">
                <span class="card-large-rarity-icon">👑</span>
                COLLECTOR
            </div>
        </div>
        <div class="card-large-info">Tu as collecté toutes les 1000 cartes ! C\'est un exploit extraordinaire. Ton dévouement envers l\'apprentissage de l\'Islam est remarquable.</div>
    `;
    return div;
}

function getRarityIcon(rarity) {
    const icons = {
        common: '◆',
        rare: '◆◆',
        epic: '◆◆◆',
        legendary: '◆◆◆◆',
        secret: '✨'
    };
    return icons[rarity] || '◆';
}

function getRarityLabel(rarity) {
    const labels = {
        common: 'Commun',
        rare: 'Rare',
        epic: 'Épique',
        legendary: 'Légendaire',
        secret: 'Secrète'
    };
    return labels[rarity] || 'Inconnue';
}

function truncateText(text, length) {
    return text.length > length ? text.substring(0, length) + '...' : text;
}

// ==================== MODALES ====================

function showCardModal(cardId) {
    const modal = document.getElementById('card-modal');
    const container = document.getElementById('card-detail-container');
    
    const card = createCardElement(cardId, true);
    if (card) {
        container.innerHTML = '';
        container.appendChild(card);
        modal.classList.add('active');
    }
}

function closeCardModal() {
    document.getElementById('card-modal').classList.remove('active');
}

function showSecretCardAnimation(cardId) {
    const card = CARDS.find(c => c.id === cardId);
    if (!card || card.rarity !== 'secret') return;

    const modal = document.getElementById('secret-card-modal');
    const revealContainer = document.getElementById('secret-card-reveal');
    
    // Créer les particules
    const particles = document.querySelector('.secret-particles');
    particles.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'secret-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.setProperty('--tx', (Math.random() - 0.5) * 100 + 'px');
        particle.style.animationDelay = Math.random() * 0.5 + 's';
        particles.appendChild(particle);
    }
    
    // Afficher la carte révélée
    const largeCard = createCardElement(cardId, true);
    revealContainer.innerHTML = '';
    revealContainer.appendChild(largeCard);
    
    modal.classList.add('active');
}

function closeSecretCardModal() {
    document.getElementById('secret-card-modal').classList.remove('active');
}

// ==================== NAVIGATION ====================

function showPage(pageName) {
    // Cacher toutes les pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Afficher la page demandée
    const page = document.getElementById(pageName);
    if (page) {
        page.classList.add('active');
    }
    
    // Mettre à jour les boutons de navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-page="${pageName}"]`).classList.add('active');
    
    // Actions spécifiques à chaque page
    switch(pageName) {
        case 'collection':
            renderCollection();
            break;
        case 'discover':
            loadNewQuestion();
            break;
        case 'leaderboard':
            renderLeaderboard();
            break;
        case 'profile':
            renderProfile();
            break;
        case 'home':
            updateHomeStats();
            break;
    }
}

// ==================== PAGE ACCUEIL ====================

function updateHomeStats() {
    const obtained = gameState.unlockedCards.length;
    const total = 1000;
    const remaining = total - obtained;
    const progress = Math.round((obtained / total) * 100);

    document.getElementById('home-cards-obtained').textContent = obtained;
    document.getElementById('home-cards-remaining').textContent = remaining;
    document.getElementById('home-progress').textContent = progress + '%';
    document.getElementById('home-progress-fill').style.width = progress + '%';
    
    if (progress > 0) {
        document.getElementById('home-progress-fill').textContent = progress + '%';
    }
}

// ==================== PAGE COLLECTION ====================

function renderCollection() {
    const grid = document.getElementById('collection-grid');
    grid.innerHTML = '';

    for (let i = 1; i <= 1000; i++) {
        const card = createCardElement(i);
        if (card) {
            grid.appendChild(card);
        }
    }

    const obtained = gameState.unlockedCards.length;
    document.getElementById('collection-obtained').textContent = obtained;
}

// ==================== PAGE DÉCOUVRIR ====================

function getRandomCard() {
    // Essayer de trouver une carte avec des données de quiz
    const availableCards = CARD_DATA.filter(c => c.question && c.question !== 'Question à venir');
    if (availableCards.length === 0) return CARD_DATA[0];
    
    return availableCards[Math.floor(Math.random() * availableCards.length)];
}

function loadNewQuestion() {
    const card = getRandomCard();
    gameState.currentQuestion = card;
    gameState.selectedAnswer = null;

    // Afficher l'apprentissage
    document.getElementById('learn-title').textContent = card.name;
    document.getElementById('learn-content').textContent = card.learning;
    document.getElementById('learn-category').textContent = card.category;

    // Afficher le quiz
    document.getElementById('quiz-question').textContent = card.question;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';

    card.options.forEach((option, index) => {
        const div = document.createElement('div');
        div.className = 'quiz-option';
        div.textContent = option;
        div.addEventListener('click', () => selectAnswer(index));
        optionsContainer.appendChild(div);
    });

    document.getElementById('btn-validate-answer').disabled = true;

    // Cacher la section déverrouillage
    document.getElementById('card-unlock-section').style.display = 'none';
    document.getElementById('learn-section').style.display = 'block';
    document.getElementById('quiz-section').style.display = 'block';
}

function selectAnswer(index) {
    gameState.selectedAnswer = index;

    // Mettre à jour l'UI
    document.querySelectorAll('.quiz-option').forEach((opt, i) => {
        if (i === index) {
            opt.classList.add('selected');
        } else {
            opt.classList.remove('selected');
        }
    });

    document.getElementById('btn-validate-answer').disabled = false;
}

function validateAnswer() {
    if (gameState.selectedAnswer === null) return;

    const isCorrect = gameState.selectedAnswer === gameState.currentQuestion.correctAnswer;

    // Afficher le résultat
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, i) => {
        if (i === gameState.currentQuestion.correctAnswer) {
            opt.classList.add('correct');
        } else if (i === gameState.selectedAnswer && !isCorrect) {
            opt.classList.add('incorrect');
        }
        opt.style.pointerEvents = 'none';
    });

    document.getElementById('btn-validate-answer').disabled = true;

    if (isCorrect) {
        setTimeout(() => {
            unlockCardUI();
        }, 1500);
    } else {
        setTimeout(() => {
            loadNewQuestion();
        }, 2000);
    }
}

function unlockCardUI() {
    const card = gameState.currentQuestion;
    const isNewUnlock = unlockCard(card.id);

    if (!isNewUnlock) {
        loadNewQuestion();
        return;
    }

    // Cacher quiz et apprentissage
    document.getElementById('learn-section').style.display = 'none';
    document.getElementById('quiz-section').style.display = 'none';

    // Afficher la section déverrouillage
    const unlockSection = document.getElementById('card-unlock-section');
    const cardContainer = document.getElementById('unlocked-card-container');
    
    // Vérifier si c'est une carte secrète
    if (card.rarity === 'secret') {
        unlockSection.style.display = 'none';
        setTimeout(() => {
            showSecretCardAnimation(card.id);
        }, 500);
    } else {
        const largeCard = createCardElement(card.id, true);
        cardContainer.innerHTML = '';
        cardContainer.appendChild(largeCard);
        unlockSection.style.display = 'block';
    }
}

// ==================== PAGE CLASSEMENT ====================

function renderLeaderboard() {
    const list = document.getElementById('leaderboard-list');
    list.innerHTML = '';

    // Ajouter le joueur actuel au classement
    const playerIndex = gameState.leaderboard.findIndex(p => p.name === gameState.playerName);
    if (playerIndex === -1) {
        gameState.leaderboard.push({
            name: gameState.playerName,
            cards: gameState.unlockedCards.length,
            avatar: gameState.playerAvatar
        });
    } else {
        gameState.leaderboard[playerIndex].cards = gameState.unlockedCards.length;
    }

    // Trier par nombre de cartes
    const sorted = [...gameState.leaderboard].sort((a, b) => b.cards - a.cards);

    sorted.slice(0, 10).forEach((player, index) => {
        const rank = index + 1;
        const rankEmoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}`;
        
        const div = document.createElement('div');
        div.className = 'leaderboard-item';
        div.innerHTML = `
            <div class="leaderboard-rank rank-${rank}">${rankEmoji}</div>
            <div class="leaderboard-avatar">${player.avatar}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${player.name}</div>
                <div class="leaderboard-stats">
                    <span>${player.cards}/1000 cartes</span>
                    <span>${Math.round((player.cards / 1000) * 100)}%</span>
                </div>
            </div>
        `;
        list.appendChild(div);
    });

    // Afficher le joueur actuel s'il ne figure pas dans le top 10
    const currentPlayerInTop10 = sorted.slice(0, 10).some(p => p.name === gameState.playerName);
    if (!currentPlayerInTop10) {
        const playerRank = sorted.findIndex(p => p.name === gameState.playerName) + 1;
        const div = document.createElement('div');
        div.className = 'leaderboard-item';
        div.style.borderColor = 'var(--gold)';
        div.innerHTML = `
            <div class="leaderboard-rank">${playerRank}</div>
            <div class="leaderboard-avatar">${gameState.playerAvatar}</div>
            <div class="leaderboard-info">
                <div class="leaderboard-name">${gameState.playerName} (Vous)</div>
                <div class="leaderboard-stats">
                    <span>${gameState.unlockedCards.length}/1000 cartes</span>
                    <span>${Math.round((gameState.unlockedCards.length / 1000) * 100)}%</span>
                </div>
            </div>
        `;
        list.appendChild(div);
    }

    saveGameState();
}

// ==================== PAGE PROFIL ====================

function renderProfile() {
    const obtained = gameState.unlockedCards.length;
    const total = 1000;
    const progress = Math.round((obtained / total) * 100);

    // Infos générales
    document.getElementById('profile-avatar').textContent = gameState.playerAvatar;
    document.getElementById('profile-name').textContent = gameState.playerName;
    document.getElementById('profile-cards-obtained').textContent = obtained;
    document.getElementById('profile-progress').textContent = progress + '%';
    document.getElementById('profile-progress-fill').style.width = progress + '%';

    // Répartition par rareté
    const rarityCount = {
        common: 0,
        rare: 0,
        epic: 0,
        legendary: 0,
        secret: 0
    };

    gameState.unlockedCards.forEach(cardId => {
        const card = CARDS.find(c => c.id === cardId);
        if (card && rarityCount.hasOwnProperty(card.rarity)) {
            rarityCount[card.rarity]++;
        }
    });

    document.getElementById('profile-rarity-common').textContent = rarityCount.common;
    document.getElementById('profile-rarity-rare').textContent = rarityCount.rare;
    document.getElementById('profile-rarity-epic').textContent = rarityCount.epic;
    document.getElementById('profile-rarity-legendary').textContent = rarityCount.legendary;
    document.getElementById('profile-rarity-secret').textContent = rarityCount.secret;
}

// ==================== INITIALISATION ====================

function initGame() {
    // Configuration du joueur si c'est la première visite
    if (!localStorage.getItem('playerName')) {
        const randomAvatar = ['👨', '👩', '🧑', '👱', '👳', '🧔'][Math.floor(Math.random() * 6)];
        gameState.playerAvatar = randomAvatar;
        saveGameState();
    }

    // Événements de navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            showPage(btn.dataset.page);
        });
    });

    // Événements page accueil
    document.getElementById('btn-discover-home').addEventListener('click', () => showPage('discover'));
    document.getElementById('btn-collection-home').addEventListener('click', () => showPage('collection'));

    // Événements page découvrir
    document.getElementById('btn-validate-answer').addEventListener('click', validateAnswer);
    document.getElementById('btn-next-question').addEventListener('click', loadNewQuestion);

    // Événements modales
    document.getElementById('modal-close').addEventListener('click', closeCardModal);
    document.getElementById('btn-secret-close').addEventListener('click', closeSecretCardModal);

    // Afficher la page accueil par défaut
    showPage('home');
}

// Lancer le jeu quand le DOM est chargé
document.addEventListener('DOMContentLoaded', initGame);
