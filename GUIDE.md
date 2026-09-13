# IslamQuest - Jeu Éducatif de Collection de Cartes

## 🎮 À propos

**IslamQuest** est un jeu web moderne, interactif et responsive créé en HTML, CSS et JavaScript pur. C'est un jeu éducatif qui permet d'apprendre des informations fascinantes sur l'Islam tout en construisant une collection de 1 000 cartes numériques.

### Concept
- **Apprends** des faits vérifiés sur l'Islam
- **Réponds** à des questions éducatives
- **Gagne** des cartes à collectionner
- **Complète** ton album de 1 000 cartes

## 📱 Caractéristiques Techniques

### Responsive Design
- ✅ Fonctionne parfaitement sur desktop, tablette et mobile
- ✅ Interface adaptée pour iPad et téléphone
- ✅ Navigation tactile intuitive
- ✅ Performance optimisée

### Design Premium
- 🎨 Palette de couleurs élégante (bleu nuit, or, noir)
- ✨ Effets visuels modernes et fluides
- 🌙 Thème sombre premium
- 💎 Cartes à collectionner au design professionnel

### Sauvegarde Locale
- 💾 localStorage pour la persistance des données
- 📊 Progression sauvegardée automatiquement
- 🎯 Pas d'inscription requise pour commencer

## 🎯 Fonctionnalités Principales

### 1. **Page d'Accueil**
- Affichage du titre "ISLAMQUEST" avec effet de brillance
- Statistiques en direct : cartes obtenues, restantes, progression %
- Barre de progression animée
- Accès rapide aux sections principales

### 2. **Collection (Album)**
- Grille de 1000 emplacements numérotés
- Cartes verrouillées : affichent un cadenas et le numéro
- Cartes déverrouillées : affichent le design complet
- Clic sur une carte pour voir les détails
- Responsive sur tous les écrans

### 3. **Découvrir & Apprendre**
- Section éducative : présentation d'un sujet
- Quiz : question à choix multiple
- Réponse correcte = déverrouille une carte
- Réponse incorrecte = recharge une nouvelle question
- Affichage de l'information en cas d'erreur

### 4. **Système de Raretés**
Les 5 niveaux de rareté avec designs distincts :

1. **Commun** - Design simple, cadre gris
2. **Rare** - Plus de détails, cadre bleu
3. **Épique** - Design impressionnant, cadre violet
4. **Légendaire** - Design premium, cadre doré
5. **Secrète** - Animation spectaculaire exclusive

### 5. **Animation Cartes Secrètes** 🔒
Lorsqu'une carte Secrète est déverrouillée :
- 🌑 L'écran devient sombre
- ✨ Des particules lumineuses apparaissent
- 🔄 La carte tourne et se révèle
- 💫 Effet de lumière dorée
- 📝 Le nom apparaît avec animation spectaculaire
- 🎉 Message "CARTE SECRÈTE DÉCOUVERTE !"

### 6. **Classement**
- Affiche le top 10 des joueurs
- Montre votre rang personnel
- Statistiques : nombre de cartes, progression %
- Médailles 🥇 🥈 🥉 pour le top 3
- Mise à jour automatique avec vos cartes

### 7. **Profil Joueur**
- Avatar personnalisé
- Pseudo du joueur
- Statistiques globales
- Répartition des cartes par rareté
- Barre de progression

### 8. **Échanges** (Interface de démonstration)
- Section dédiée aux échanges futurs
- Sélection de cartes en double
- Architecture prête pour un système sécurisé en ligne

### 9. **Navigation**
- Menu sticky en haut
- 6 sections principales :
  - 🏠 Accueil
  - 📚 Collection
  - ✨ Découvrir
  - 🔄 Échanges
  - 🏆 Classement
  - 👤 Profil

## 📊 Architecture des Données

### Structure des Cartes
Chaque carte contient :
```javascript
{
    id: 1,                          // Numéro unique 1-1000
    name: "Nom de la carte",
    category: "Catégorie",
    rarity: "legendary",            // common, rare, epic, legendary, secret
    emoji: "🕋",                    // Icône/illustration
    info: "Information éducative",
    question: "Question du quiz",
    options: ["Option1", "Option2", "Option3", "Option4"],
    correctAnswer: 1,               // Index de la réponse correcte (0-3)
    learning: "Information détaillée"
}
```

### Cartes de Démonstration (8 cartes)
Le jeu inclut 8 cartes de démonstration vérifiées :
1. La Kaaba (Légendaire)
2. Les Cinq Piliers (Commun)
3. Le Prophète Muhammad (Épique)
4. Le Coran (Légendaire)
5. Al-Masjid al-Haram (Épique)
6. Le Hajj (Rare)
7. Médine (Rare)
8. Sagesse Infinie (Secrète)

Les 992 autres cartes sont des emplacements en attente pour expansion du contenu.

### Contenus Éducatifs
Tous les contenus religieux sont :
- ✅ Vérifiés et factuels
- ✅ Présentés de manière respectueuse
- ✅ Non inventés
- ✅ Éducatifs et informatifs

## 💾 Sauvegarde et Persistance

Les données suivantes sont sauvegardées en **localStorage** :
- 📛 Nom du joueur (pseudo)
- 🎭 Avatar sélectionné
- 🎴 Liste des cartes déverrouillées
- 🏆 Leaderboard avec scores

**Aucun compte n'est requis** - le jeu fonctionne entièrement hors ligne.

Architecture prête pour :
- 🔐 Authentification futures
- 🗄️ Base de données cloud
- 👥 Synchronisation multi-appareils

## 🎨 Design et Styles

### Palette de Couleurs
- **Bleu Nuit** : #0a1428 - Couleur primaire
- **Or** : #d4af37 - Accents premium
- **Noir** : #000000 - Fond
- **Blanc** : #ffffff - Texte principal
- **Vert Foncé** : #1a3a2a - Touches subtiles

### Motifs Islamiques
- Arrière-plan avec gradients géométriques
- Pas de surcharge visuelle
- Inspiration artistique islamique subtile

### Animations
- Transitions fluides (0.3s)
- Effets de flottement
- Animations de révélation pour les modales
- Effets de scintillement pour les cartes légendaires

## 📱 Optimisation Mobile

- **Grille responsive** : 4 colonnes (desktop) → 1 colonne (mobile)
- **Taille des cartes** : Adaptée automatiquement
- **Police** : Lisible sur petits écrans
- **Navigation** : Tactile et intuitive
- **Espace** : Optimisé pour le doigt
- **Performance** : Rapide même sur 3G

## 🚀 Comment Démarrer

### Installation
1. Ouvrir `html/index.html` dans un navigateur web
2. Aucune installation requise
3. Aucune dépendance externe

### Premier Lancement
1. Un avatar aléatoire vous est assigné
2. Votre progression est sauvegardée localement
3. Commencez à répondre aux questions
4. Débloquez votre première carte

### Jouer
1. Allez dans "✨ Découvrir"
2. Lisez l'information éducative
3. Répondez à la question de quiz
4. Réponse correcte = nouvelle carte déverrouillée !

## 🔧 Développement et Extension

### Ajouter Nouvelles Cartes
Modifiez `CARD_DATA` dans `script.js` :

```javascript
{
    id: 50,
    name: 'Nom de la carte',
    category: 'Catégorie',
    rarity: 'rare',  // Choisir la rareté
    emoji: '🌙',
    info: 'Description courte',
    question: 'Votre question ?',
    options: ['Option A', 'Option B', 'Option C', 'Option D'],
    correctAnswer: 0,  // Index de la réponse correcte
    learning: 'Explication détaillée'
}
```

### Personnaliser les Couleurs
Modifiez les variables CSS dans `styles.css` :
```css
:root {
    --dark-navy: #0a1428;
    --gold: #d4af37;
    /* etc... */
}
```

### Connecter une Base de Données
Le code est structuré pour permettre :
1. Remplacer `localStorage` par API
2. Ajouter authentification utilisateur
3. Synchroniser données entre appareils
4. Implémenter système d'échanges sécurisé

## 📊 Statistiques du Jeu

- **Total cartes** : 1000
- **Cartes de démo** : 8 (vérifiées)
- **Raretés** : 5 niveaux distincts
- **Catégories** : 10+ (Lieux, Histoire, Vocabulaire, etc.)
- **Questions** : Progressives et éducatives
- **Animations** : Cartes secrètes exclusives

## 🎯 Objectifs Futurs

- [ ] Ajouter 100+ cartes avec contenu éducatif
- [ ] Système d'échanges en ligne sécurisé
- [ ] Comptes utilisateurs et authentification
- [ ] Base de données backend
- [ ] Achievements et badges
- [ ] Mode multijoueur
- [ ] Événements spéciaux
- [ ] Modes de jeu avancés

## 📝 Notes Importantes

### Contenu Éducatif
- Tous les faits sont vérifiés
- Présentation respectueuse
- Pas de propagande ou d'endoctrinement
- Objectif : apprentissage authentique

### Performance
- Aucune dépendance externe
- Chargement rapide
- Fonctionne hors ligne (après chargement initial)
- Compatible navigateurs modernes

### Navigateurs Supportés
- ✅ Chrome/Edge (89+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Mobile browsers

## 📞 Support

Le jeu est entièrement autonome et ne nécessite pas de serveur. Tout fonctionne en local via localStorage.

---

**Apprends • Découvre • Collectionne.**

*IslamQuest* - Jeu éducatif © 2024
