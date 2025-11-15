1️⃣ README.md

# CeloHT

CeloHT se yon inisyativ open-source ki vize ranfòse enklizyon finansye ann Ayiti atravè itilizasyon teknoloji blockchain Celo. Pwojè a mete aksan sou aksè mobil, edikasyon, transparans, ak sekirite.

## 🚀 Objektif
- Fasilite aksè a solisyon finansye pou popilasyon ki pa banke yo.
- Bati zouti verifyab, sekirize, epi aksesib pou itilizatè ayisyen.
- Ankouraje yon ekosistèm kontribisyon ak inovasyon open-source.

## 📚 Dokiman Enpòtan
- **Gouvènans:** [GOVERNANCE.md](./GOVERNANCE.md)
- **Sekirite & Rapò:** [SECURITY.md](./SECURITY.md) | /audits/
- **Transparans Finansye:** [FINANCE_TRANSPARENCY.md](./FINANCE_TRANSPARENCY.md)
- **Gid kontribisyon:** [CONTRIBUTING.md](./CONTRIBUTING.md)

## 🛠 Enstalasyon Devlopman
```bash
git clone https://github.com/USERNAME/CeloHT.git
cd CeloHT
```

## 📄 Lisans
MIT oswa Apache-2.0.



2️⃣ GOVERNANCE.md

# Gouvènans CeloHT
Dokiman sa a defini estrikti gouvènans pwojè a, wòl yo, ak pwosesis pou pran desizyon.

## 🧩 Estrikti
- **Core Team:** Sipèvize vizyon pwojè a
- **Stewards:** Suivi operasyon, sekirite, ak siksè teknik
- **Contributors:** Nenpòt moun ki kontribye volontèman
- **Community Council:** Gwoup ki valide gwo desizyon yo

## 🔄 Pwosesis Pran Desizyon
1. **Pwopozisyon** – Ouvri kòm *issue* oswa *PR*
2. **Diskisyon piblik** – 72–120 èdtan
3. **Vot kominotè** – Transparent & piblik
4. **Ekzekisyon** – Revizyon + Merge + Deploy

## ⚠️ Politik Konfli Enterè
Nenpòt moun ki gen avantaj dirèk/enkonsyan dwe deklare l piblikman.

## 🚨 Pwotokòl Ijans
- Patch sekirite kritik yo ka aplike imedyatman
- Revizyon piblik obligatwa nan 72 èdtan



3️⃣ SECURITY.md

# Sekirite — CeloHT
Nou angaje pou kenbe pwojè a sekirize. Men ki jan pou rapòte pwoblèm sekirite.

## 📬 Kontakte Sekirite
- **Email sekirite:** security@celoht.org
- **PGP Key:** (Antre kle ou la)

## 🛡 Politik Divulgasyon
- Periyòd divilgasyon responsab: **90 jou**
- Nou swete kontribitè yo rapòte vilnerabilite an prive

## 🧪 Pwosesis Rezolisyon
1. Resevwa rapò
2. Fè verifikasyon
3. Fòme patch
4. Pibliye CVE-style advisory



4️⃣ AUDIT_REPORT_TEMPLATE.md

# CeloHT — Modèl Rapò Audit

## 1. Rezime Egzekitif
(Rezime 3–5 fraz sou konklizyon odit la.)

## 2. Metodoloji
- Zouti
- Vèsyon kòd
- Testnet/Mainnet
- Adrès kontra yo

## 3. Rezilta
### 🔴 Risk Kritik
- Deskripsyon
- Prèv
- Solisyon

### 🟡 Risk Mwayen
### 🟢 Risk Fèb

## 4. Rekòmandasyon
(Lis rekòmandasyon teknik ak operasyonèl.)

## 5. Prèv
- Tx hashes
- Diffs
- Logs

## 6. Siyati
**Oditè:** …  
**Dat:** …




5️⃣ TECH_CHECKLIST.md

# Checklist Teknik — CeloHT

## ✅ Sekirite
- [ ] Depandans pini
- [ ] Audit fèt & pibliye
- [ ] Kontra verifye pou piblik la

## 🧪 Tès
- [ ] Unit tests ≥ 90% pou fonksyon kritik yo
- [ ] Integration tests konplè

## 🚀 Deploy
- [ ] CI/CD aktif (GitHub Actions)
- [ ] Testnet → Mainnet workflow dokimante




6️⃣ FINANCE_TRANSPARENCY.md

# Transparans Finansye — CeloHT

## 💰 Model Kontab
Nou itilize prensip **Double-entry Accounting**.

## 📊 Rapò Regilye
- **Mwa / Trimès**: Revni, depans, fon k ap fonksyone

## 🏦 Adrès Treasury On-chain
- CELO: …
- cUSD: …

## 📈 KPI
- # Ajan aktif
- # Itilizatè
- Volim tranzaksyon




7️⃣ CONTRIBUTING.md

# Gid Kontribisyon — CeloHT

## 👋 Ki moun ki ka kontribye?
Tout moun!

## 🛠 Ki jan pou kontribye
1. Fòke repo a
2. Kreye yon branch
3. Fè chanjman ou
4. Soumèt yon PR

## 📐 Konvansyon Commit
Nou itilize **Conventional Commits**:
- feat:
- fix:
- docs:
- refactor:



8️⃣ CODE_OF_CONDUCT.md

# Kod Konduit – CeloHT
Nou suiv règleman **Contributor Covenant v2.1**.

## Règleman Debaz
- Respè mityèl
- Pa gen diskriminasyon
- Kominikasyon pwofesyonèl

## Rapò Abi
contact@celoht.org



9️⃣ ISSUE_TEMPLATE.md

# 🐞 Bug Report
**Deskripsyon:** …  
**Etap pou repwodui:** …  
**Rezilta espere:** …  
**Sistèm:** OS / vèsyon / navigateur


---

🔟 PULL_REQUEST_TEMPLATE.md

# Pull Request — CeloHT

## 🔍 Rezime
(Explike sa PR a fè.)

## 🔧 Chanjman prensipal yo
- …
- …

## 🧪 Tès
(list tès ou te fè)

## ✔ Checklist
- [ ] Tès kouri san erè
- [ ] Dokiman mete ajou
- [ ] Kòd swiv style-projè a


more +

1️⃣ .gitignore

# Node
node_modules/
dist/
build/
.env
.env.local

# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# OS Files
.DS_Store
Thumbs.db

# Editor
.vscode/
.idea/




2️⃣ LICENSE (Apache-2.0)

Apache License 2.0
Copyright 2025 CeloHT Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0




3️⃣ Estrikti Folder Rekòmande

CeloHT/
├── .github/
│   ├── workflows/
│   │   ├── ci.yml
│   │   └── security.yml
│   ├── ISSUE_TEMPLATE.md
│   └── PULL_REQUEST_TEMPLATE.md
├── contracts/
├── docs/
│   ├── audits/
│   ├── governance/
│   └── finance/
├── scripts/
├── src/
├── tests/
├── README.md
├── SECURITY.md
├── GOVERNANCE.md
├── CONTRIBUTING.md
├── TECH_CHECKLIST.md
├── FINANCE_TRANSPARENCY.md
└── LICENSE




4️⃣ GitHub Actions: CI (ci.yml)

name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      - name: Install deps
        run: npm install
      - name: Run tests
        run: npm test



5️⃣ GitHub Actions: Security Scan (security.yml)

name: Security Scan

on:
  schedule:
    - cron: "0 0 * * 0"  # chak dimanch
  workflow_dispatch:

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install deps
        run: npm install
      - name: Run audit
        run: npm audit --audit-level=moderate




✔️ Repo ou kounye a gen workflows, lisans, gitignore & estrikti pwofesyonèl.

Si ou vle, mwen ka kreye yon ZIP telechajab ki gen TOUT fichye yo.



6️⃣ GitHub Actions: Deploy (deploy.yml)

name: Deploy

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Build project
        run: npm run build

      - name: Deploy to Production
        env:
          API_KEY: ${{ secrets.DEPLOY_API_KEY }}
        run: |
          echo "Deploying..."
          # Antre script deploy ou isit




7️⃣ GitHub Actions: Test Coverage (coverage.yml)

name: Test Coverage

on:
  pull_request:
    branches: [ main ]
  workflow_dispatch:

jobs:
  coverage:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run tests with coverage
        run: npm run test:coverage

      - name: Upload coverage report
        uses: actions/upload-artifact@v3
        with:
          name: coverage-report
          path: coverage/




8️⃣ GitHub Actions: Lint + Format (lint.yml)

name: Lint & Format

on:
  pull_request:
    branches: [ main ]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Run ESLint
        run: npm run lint

      - name: Run Prettier Check
        run: npm run format:check




9️⃣ GitHub Actions: Docker Build (docker.yml)

name: Docker Build

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  docker:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Login to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build Docker image
        run: |
          docker build -t celoht/app:latest .

      - name: Push image
        run: |
          docker push celoht/app:latest




🔟 GitHub Actions: Smart Contract CI (contracts.yml)

name: Smart Contract CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  contract-tests:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Compile contracts
        run: npx hardhat compile

      - name: Run contract tests
        run: npx hardhat test

more+



1️⃣ Semantic Versioning + Auto Release (release.yml)

name: Auto Release

on:
  push:
    branches: [ main ]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18

      - name: Install dependencies
        run: npm install

      - name: Create Release
        uses: google-github-actions/release-please-action@v3
        with:
          release-type: node
          token: ${{ secrets.GITHUB_TOKEN }}




2️⃣ Automatic Changelog Generator (changelog.yml)

name: Changelog Generator

on:
  workflow_dispatch:
  push:
    branches: [ main ]

jobs:
  changelog:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Generate Changelog
        uses: orhun/git-cliff-action@v2
        with:
          config: cliff.toml
          args: -o CHANGELOG.md

      - name: Commit Changelog
        run: |
          git config user.email "bot@github.com"
          git config user.name "GitHub Bot"
          git add CHANGELOG.md
          git commit -m "chore: update changelog" || echo "No changes"
          git push




3️⃣ Sentry Monitoring Deploy Hooks (sentry-deploy.yml)

name: Sentry Deploy

on:
  push:
    branches: [ main ]

jobs:
  sentry:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Notify Sentry
        run: |
          curl https://sentry.io/api/0/organizations/${{ secrets.SENTRY_ORG }}/releases/ \
            -X POST \
            -H "Authorization: Bearer ${{ secrets.SENTRY_AUTH_TOKEN }}" \
            -H "Content-Type: application/json" \
            -d '{"version": "${GITHUB_SHA}", "projects": ["celoht"]}'



4️⃣ Gas Usage Reporter for Smart Contracts (gas-report.yml)

name: Gas Usage Report

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  gas:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install Deps
        run: npm install

      - name: Run Gas Report
        run: npx hardhat test --network hardhat

      - name: Upload Gas Report
        uses: actions/upload-artifact@v3
        with:
          name: gas-report
          path: gas-report.txt



5️⃣ Dependabot – Automatic Dependency Updates

Fichye sa a ale nan: .github/dependabot.yml

version: 2
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule:
      interval: weekly
  - package-ecosystem: github-actions
    directory: "/"
    schedule:
      interval: weekly



6️⃣ CodeQL Security Scan (codeql.yml)

name: CodeQL Analysis

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
  schedule:
    - cron: "0 2 * * 1"

jobs:
  analyze:
    name: Analyze
    runs-on: ubuntu-latest
    permissions:
      actions: read
      contents: read
      security-events: write

    strategy:
      fail-fast: false
      matrix:
        language: [ 'javascript' ]

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Initialize CodeQL
        uses: github/codeql-action/init@v3
        with:
          languages: ${{ matrix.language }}

      - name: Autobuild
        uses: github/codeql-action/autobuild@v3

      - name: Perform Analysis
        uses: github/codeql-action/analyze@v3
