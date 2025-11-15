# Déploiement sur GitHub Pages

## Étapes pour déployer votre site sur GitHub Pages

### 1. Créer un dépôt GitHub

1. Allez sur [GitHub](https://github.com) et créez un nouveau dépôt
2. Nommez-le `zaneo-website` (ou un autre nom de votre choix)
3. **Ne cochez PAS** "Initialize this repository with a README"

### 2. Initialiser Git dans votre projet

```bash
cd "/home/kevin-riou/Documents/zaneo website"
git init
git add .
git commit -m "Initial commit"
```

### 3. Connecter au dépôt GitHub

```bash
# Remplacez USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/USERNAME/zaneo-website.git
git branch -M main
git push -u origin main
```

### 4. Activer GitHub Pages

1. Allez sur votre dépôt GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez **GitHub Actions**
5. Le workflow se déclenchera automatiquement

### 5. Accéder à votre site

Une fois le déploiement terminé (quelques minutes), votre site sera accessible à :
- `https://USERNAME.github.io/zaneo-website/`

### Configuration actuelle

- **Base path** : `/zaneo-website/` (configuré dans `vite.config.js`)
- **Workflow** : Déploiement automatique à chaque push sur `main`
- **Build** : Automatique via GitHub Actions

### Notes importantes

- Si vous changez le nom du dépôt, mettez à jour le `base` dans `vite.config.js`
- Si vous voulez déployer à la racine (`username.github.io`), changez le `base` à `'/'` dans `vite.config.js`
- Le workflow se déclenche automatiquement à chaque push sur la branche `main`

