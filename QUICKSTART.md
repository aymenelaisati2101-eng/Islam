# 🚀 IslamQuest - Guide de Démarrage Rapide

## ⚡ Lancer le Jeu en 10 Secondes

### Méthode 1 : Double-clic directe
```
Clic droit sur : html/index.html
→ Ouvrir avec → Navigateur par défaut
```

### Méthode 2 : Glisser-déposer
```
Glissez html/index.html vers votre navigateur
```

### Méthode 3 : Live Server (VS Code)
```
1. Clic droit sur html/index.html
2. "Open with Live Server"
3. http://localhost:5500 s'ouvre
```

### Méthode 4 : Ligne de commande
```bash
cd /workspaces/Islam/html
# Puis ouvrir le navigateur avec index.html
# ou utiliser : python -m http.server 8000
# puis visiter : http://localhost:8000
```

---

## 🎮 Première Partie (2 minutes)

1. **La page d'accueil charge** - vous voyez le logo "ISLAMQUEST"
2. **Cliquez sur "✨ Découvrir"**
3. **Lisez l'information** éducative sur le sujet
4. **Répondez à la question** de quiz
5. **Réponse correcte** → 🎉 Vous débloquez une carte !
6. **Voir votre carte** dans la modal qui s'ouvre
7. **Cliquez "Suivant"** pour une nouvelle question

---

## 📚 Explorer le Jeu

### 🏠 Accueil
- Vos statistiques en direct
- Nombre de cartes obtenues
- Progression en %

### 📚 Collection
- Toutes les 1000 cartes de l'album
- Cartes verrouillées : affichent cadenas
- Cartes déverrouillées : design complet
- Clic pour voir les détails

### ✨ Découvrir
- Lisez l'info éducative
- Répondez à 4 options
- Débloquez une carte
- Apprenez en jouant !

### 🏆 Classement
- Top 10 des joueurs
- Votre rang personnel
- Médailles 🥇 🥈 🥉

### 👤 Profil
- Votre avatar unique
- Vos statistiques
- Répartition par rareté

### 🔄 Échanges
- Interface pour échanger cartes
- Système sécurisé à venir

---

## 🎯 Objectifs du Jeu

### 🎯 Primaire
Collecter toutes les **1 000 cartes**

### 🏆 Secondaire
- Monter dans le classement
- Débloquer toutes les cartes Secrètes
- Apprendre sur l'Islam

### 👑 Ultime
Être le premier à compléter les 1 000 cartes et obtenir la **Carte Collector** exclusive !

---

## 🎴 Les 5 Raretés

| Rareté | Symbole | Design | Apparence |
|--------|---------|--------|-----------|
| **Commun** | ◆ | Simple | Gris-bleu |
| **Rare** | ◆◆ | Détaillé | Bleu |
| **Épique** | ◆◆◆ | Impressionnant | Violet |
| **Légendaire** | ◆◆◆◆ | Premium | Or |
| **Secrète** | ✨ | **Spécial** | **Animation !** |

### ⭐ Cartes Secrètes
- Animation exclusive à la révélation
- Particules lumineuses dorées
- Rotation 3D spectaculaire
- Message "🔒 CARTE SECRÈTE DÉCOUVERTE !"
- Les plus rares et précieuses !

---

## 🎓 Cartes de Démo Disponibles

Vous pouvez débloquer immédiatement ces 8 cartes vérifiées :

1. **La Kaaba** (#047) - Lieu sacré, Légendaire
2. **Les Cinq Piliers** (#001) - Fondamentaux, Commun
3. **Le Prophète Muhammad** (#002) - Histoire, Épique
4. **Le Coran** (#003) - Livre sacré, Légendaire
5. **Al-Masjid al-Haram** (#004) - Mosquée sacrée, Épique
6. **Le Hajj** (#005) - Pratique, Rare
7. **Médine** (#006) - Ville sainte, Rare
8. **Sagesse Infinie** (#999) - Valeurs, **Secrète**

Les autres 992 cartes attendent du contenu.

---

## 💾 Vos Données

### Sauvegardées Automatiquement
- ✅ Votre pseudo
- ✅ Votre avatar
- ✅ Cartes déverrouillées
- ✅ Votre progression

### Stockage
- 📱 Stockées localement dans votre navigateur
- 🔒 Privées sur votre appareil
- 💾 Persistantes entre les sessions
- 🔌 Fonctionne hors ligne

### Effacer Vos Données
Pour réinitialiser complètement :
```javascript
// Dans la console du navigateur (F12) :
localStorage.clear();
location.reload();
```

---

## 🐛 Dépannage

### Le jeu ne charge pas
- ✅ Vérifiez que vous ouvrez `html/index.html`
- ✅ Essayez un autre navigateur
- ✅ Vérifiez votre connexion internet

### Les images n'apparaissent pas
- Les cartes utilisent des **emojis Unicode** (pas d'images externes)
- Si vous ne voyez que ?, votre système ne supporte peut-être pas les emojis
- Essayez Chrome ou Firefox

### Rien ne se sauvegarde
- Vérifiez que le localStorage est activé
- En navigation privée, localStorage peut être désactivé
- Utilisez une session normale

### La page est cassée visuellement
- Rafraîchissez avec Ctrl+F5 (videz le cache)
- Essayez un autre navigateur

---

## 🎨 Personnaliser le Jeu

### Changer le Pseudo
Dans le jeu, votre pseudo est sauvegardé automatiquement. Pour le changer :
```javascript
localStorage.setItem('playerName', 'Votre Pseudo');
location.reload();
```

### Changer les Couleurs
Modifiez `styles.css`, section `:root` :
```css
:root {
    --gold: #e5c158;      /* Plus clair */
    --dark-navy: #1a2a4a;  /* Plus bleu */
}
```

### Ajouter des Cartes
Modifiez `CARD_DATA` dans `script.js` :
```javascript
{
    id: 50,
    name: 'Ma Carte',
    category: 'Catégorie',
    rarity: 'rare',
    emoji: '🌙',
    info: 'Description...',
    question: 'Question ?',
    options: ['A', 'B', 'C', 'D'],
    correctAnswer: 1,
    learning: 'Explication...'
}
```

---

## 📱 Recommandations

### Meilleure Expérience
- 🖥️ **Desktop** : Pleine résolution, tous les détails visibles
- 📱 **Mobile** : Interface optimisée, tactile facile
- 📱 **iPad** : Excellente expérience, format paysage recommandé

### Navigateurs Recommandés
1. 🟢 Chrome (meilleur)
2. 🟢 Firefox (parfait)
3. 🟢 Safari (très bien)
4. 🟡 Edge (bon)

---

## 🎯 Pro Tips

### 💡 Astuce 1
Répondez correctement pour débloquer une carte à chaque fois. Vous pouvez rejouer la même question si vous faillez.

### 💡 Astuce 2
Les cartes Secrètes sont très rares. Complétez d'abord les cartes Communes, Rares et Épiques pour un meilleur ratio.

### 💡 Astuce 3
Consultez votre Profil pour voir votre répartition par rareté et suivre votre progression.

### 💡 Astuce 4
Le Classement vous montre où vous vous situez. Vous pouvez ajouter d'autres joueurs en changeant le leaderboard.

### 💡 Astuce 5
Vous pouvez cliquer sur les cartes pour voir tous leurs détails en grand dans la modal.

---

## 📞 Besoin d'Aide ?

### Documentation Complète
→ Lisez **GUIDE.md**

### Résumé de l'Implémentation
→ Lisez **IMPLEMENTATION.md**

### Code Source
- `index.html` - Structure HTML
- `styles.css` - Styles et design
- `script.js` - Logique du jeu

---

## ✨ Bon Jeu !

**Apprends • Découvre • Collectionne**

Commence par "✨ Découvrir" et débloquez votre première carte maintenant ! 🎴

---

*IslamQuest - Jeu Éducatif v1.0*
Amusez-vous bien et apprenez ! 🌙✨
