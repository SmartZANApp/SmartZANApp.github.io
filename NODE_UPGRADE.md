# Node.js Upgrade Instructions

Your current Node.js version (v10.19.0) is too old for Vite 5. You need Node.js 18 or higher.

## Option 1: Install Node.js via Conda (Recommended if using conda)

```bash
conda install nodejs=18 -c conda-forge
```

Or for the latest LTS version:
```bash
conda install nodejs -c conda-forge
```

## Option 2: Install Node.js via nvm (Node Version Manager)

1. Install nvm:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. Reload your shell:
```bash
source ~/.bashrc
```

3. Install Node.js 18:
```bash
nvm install 18
nvm use 18
```

## Option 3: Install Node.js via Package Manager

### Ubuntu/Debian:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Or use snap:
```bash
sudo snap install node --classic --channel=18
```

## Verify Installation

After upgrading, verify your Node.js version:
```bash
node --version
```

You should see v18.x.x or higher.

Then reinstall dependencies:
```bash
npm install
npm run dev
```

