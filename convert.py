import re

html = """
<nav>
  <div class="nav-inner">
    <div class="logo">Kleeblatt<span>.space</span></div>
    <ul class="nav-links">
      <li><a href="#api">TileSmith API</a></li>
      <li><a href="#studio">TileSmith Studio</a></li>
      <li><a href="#adventure">KleeBlatt Adventure</a></li>
      <li><a href="https://tilesmith-benchmark-viewer.vercel.app/" target="_blank">Benchmark</a></li>
      <li><a href="#pricing">Pricing</a></li>
    </ul>
    <a href="#" class="nav-cta">Get Started</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-badge">🌿 Tools & Games, built local-first — transparent, fair, ohne Blackbox</div>
  <h1>Wir bauen Tools für <span class="highlight">Game-Pipelines</span><br/>und Spiele mit echter Substanz</h1>
  <p>Eine autonome API für Tile-Qualität und Asset-Konvertierung, eine vollwertige Creator-Suite zur Steuerung und Erstellung, und ein eigenes Browser-Adventure.</p>
  <div class="hero-buttons">
    <a href="#api" class="btn-primary">API entdecken</a>
    <a href="#studio" class="btn-secondary">Studio ansehen</a>
  </div>
</section>

<!-- VALUES -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Unsere Basis</span>
      <h2>Ein Fundament für alle Produkte</h2>
      <p>Transparenz und Datensicherheit sind kein Feature, sondern die Grundlage — bei jedem einzelnen Produkt.</p>
    </div>

    <div class="values-grid">

      <div class="value-card">
        <div class="value-icon" style="background: rgba(125,214,160,0.15); color: var(--accent-2);">🔒</div>
        <h3>Local-First, wo möglich</h3>
        <p class="desc">TileSmith Studio läuft local-first: Wir verarbeiten deine Daten nicht, wenn du es nicht willst.</p>
        <p class="value-quote" style="border-left: 2px solid var(--accent-2);">„We never process data if you don't want to.“</p>
      </div>

      <div class="value-card">
        <div class="value-icon" style="background: rgba(79,158,255,0.15); color: var(--accent);">📊</div>
        <h3>Offene Berechnung & Ground Truth</h3>
        <p class="desc">Beim QC Scoring legen wir die Berechnungsmethodik und unsere Ground-Truth-Daten offen — nachvollziehbar statt Blackbox.</p>
        <a href="https://tilesmith-benchmark-viewer.vercel.app/" target="_blank" class="value-link">Zur Benchmark-Transparenz →</a>
      </div>

      <div class="value-card">
        <div class="value-icon" style="background: rgba(255,180,84,0.15); color: var(--accent-3);">🤝</div>
        <h3>Fair Use statt Payment-Block</h3>
        <p class="desc">TileSmith Studio ist vollständig kostenlos nutzbar — unter einer fairen Nutzungsrichtlinie, ohne künstliche Zahlschranken.</p>
        <p class="value-quote" style="border-left: 2px solid var(--accent-3);">Kein Feature-Lock. Kein Paywall-Zwang.</p>
      </div>

    </div>
  </div>
</section>

<!-- API PRODUCT -->
<section class="section" id="api">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Kernprodukt · API</span>
      <h2>TileSmith API</h2>
      <p>Eine vollständig autonome, programmatische API mit zwei eigenständigen Pipelines — nutzbar ganz ohne Studio, direkt in deiner CI oder deinem Backend.</p>
    </div>

    <div class="api-product">
      <div class="api-product-head">
        <div>
          <h3>TileSmith API</h3>
          <p>Separates, eigenständiges Produkt. Key-Verwaltung erfolgt über TileSmith Studio, der Betrieb läuft komplett unabhängig davon.</p>
        </div>
        <div class="api-badge-col">
          <span class="api-badge">AUTONOM · KEIN STUDIO NÖTIG</span>
          <span class="api-crosslink">Wird u. a. in <a href="#adventure">KleeBlatt Adventure</a> eingesetzt</span>
        </div>
      </div>

      <div class="pipelines-grid">
        <div class="pipeline-card">
          <span class="pipeline-tag tag-score">Pipeline 1</span>
          <h4>QC Score</h4>
          <span class="endpoint">POST /v1/score</span>
          <p class="desc">Analysiert Tiles auf technische Qualität und gibt einen reproduzierbaren Score zurück — kein Bild wird gespeichert.</p>
          <ul>
            <li>6 transparente Metriken (Seam, Border, Artifact, Pattern, Fidelity, Textile)</li>
            <li>Production / Review / Reject Gates</li>
            <li>Versionierte, reproduzierbare Ergebnisse</li>
            <li>Ideal für Asset Stores, Generatoren, CI-Checks</li>
          </ul>
        </div>

        <div class="pipeline-card">
          <span class="pipeline-tag tag-convert">Pipeline 2</span>
          <h4>Autotile Pipeline</h4>
          <span class="endpoint">POST /v1/convert</span>
          <p class="desc">Nimmt beliebige rohe 2D-Pixel-PNGs entgegen und liefert fertige, Phaser-4-ready Dateien zurück.</p>
          <ul>
            <li>Automatisches Trimmen & Bereinigen roher Assets</li>
            <li>Erzeugung nötiger Variationen (Blob-47 Autotile-Sets)</li>
            <li>Direkt einsatzbereite Engine-Dateien (Atlas, JSON, TSX)</li>
            <li>Ideal für schnelle Asset-Pipelines ohne manuelle Nacharbeit</li>
          </ul>
          <div class="pipeline-crosslink">
            <span>🎲</span>
            <span class="label">Geplant für <a href="#adventure">KleeBlatt Adventure</a> — procedural generierte Maps</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- STUDIO PRODUCT -->
<section class="section" id="studio" style="border-top:none; padding-top:0;">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Creator-Suite</span>
      <h2>TileSmith Studio</h2>
      <p>Die zentrale Oberfläche für alles rund um TileSmith: Map-Erstellung, Tileset-Generierung, Cloud-Speicherung und die Administration der API.</p>
    </div>

    <div class="studio-product">
      <div class="studio-head">
        <div>
          <h3>TileSmith Studio</h3>
          <p>Vollwertige Creator-Suite für Tile-basierte Game-Assets — von der Erstellung bis zur Verwaltung deiner API-Zugänge, alles an einem Ort.</p>
        </div>
        <span class="studio-badge">ZENTRALE LÖSUNG</span>
      </div>

      <div class="studio-features">
        <div class="feature-block">
          <span class="feature-icon">🗺️</span>
          <h4>Map Editor</h4>
          <p>Visuelles Erstellen und Bearbeiten von Tile-Maps mit direkter Vorschau in Engine-Auflösung.</p>
        </div>
        <div class="feature-block">
          <span class="feature-icon">🧩</span>
          <h4>Tileset Generator</h4>
          <p>Automatische Erzeugung konsistenter Tilesets inkl. Terrain-Übergängen und Varianten.</p>
        </div>
        <div class="feature-block">
          <span class="feature-icon">☁️</span>
          <h4>Cloud Workspace</h4>
          <p>Persistente, accountgebundene Projekte — arbeite geräteübergreifend an denselben Assets.</p>
        </div>
        <div class="feature-block">
          <span class="feature-icon">🔑</span>
          <h4>API-Administration</h4>
          <p>Key-Erstellung, Nutzungsübersicht und Billing für die eigenständige TileSmith API.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ADVENTURE -->
<section class="section" id="adventure">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Spiel</span>
      <h2>KleeBlatt Adventure</h2>
      <p>Unser eigenes Browser-Adventure — Beweis und Testfeld für die eigene Pipeline.</p>
    </div>

    <div class="product-card" style="margin-bottom: 24px;">
      <div class="product-icon icon-orange">🗺️</div>
      <h3>KleeBlatt Adventure</h3>
      <p class="tagline">2D Browser-Adventure mit optionalem Blockchain-Ownership (Immutable zkEVM) — Gameplay first, NFT optional.</p>
      <ul>
        <li>Hero-System, Karten, Kampf, XP-Progression</li>
        <li>React + Phaser Frontend, Hono API</li>
        <li>Optionale NFT-Sicherung von Assets</li>
        <li>Live auf stage.kleeblatt.space</li>
      </ul>
      <a href="https://github.com/duduspieleklee-create/kleeblatt-adventure" class="card-link">Repository ansehen →</a>
    </div>

    <div class="showcase-box">
      <span class="showcase-tag">Geplant · Eigener Use Case</span>
      <h3>Procedural Maps direkt aus der eigenen API</h3>
      <p class="desc">KleeBlatt Adventure wird exklusiv Teil unserer eigenen Asset-Pipeline: Dynamisch generierte, zufällige Maps für Spieler entstehen direkt aus den Outputs der TileSmith API und TileSmith Studio — kein externes Tool, keine Blackbox.</p>

      <div class="showcase-steps">
        <div class="showcase-step">
          <span class="icon">🧩</span>
          <h4>Autotile Pipeline liefert Assets</h4>
          <p>Rohe Pixel-Assets werden über die Autotile Pipeline in fertige, Blob-47-kompatible Tilesets umgewandelt.</p>
        </div>
        <div class="showcase-step">
          <span class="icon">🗺️</span>
          <h4>Studio generiert Terrain-Sets</h4>
          <p>Der Tileset Generator in TileSmith Studio baut daraus konsistente, kombinierbare Terrain-Bausteine.</p>
        </div>
        <div class="showcase-step">
          <span class="icon">🎲</span>
          <h4>Adventure generiert Maps zur Laufzeit</h4>
          <p>KleeBlatt Adventure kombiniert diese Bausteine zu zufälligen, spielbaren Maps für jeden Spieler-Run.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TRUST + BENCHMARK LINK -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Architektur</span>
      <h2>Gebaut auf soliden Prinzipien</h2>
      <p>Local-first, transparente Metriken, klare Trennung von API und Administration.</p>
    </div>
    <div class="trust-grid">
      <div class="trust-card"><div class="num">2</div><div class="label">Eigenständige API-Pipelines</div></div>
      <div class="trust-card"><div class="num">4</div><div class="label">Studio-Kernfunktionen</div></div>
      <div class="trust-card"><div class="num">6</div><div class="label">Offene Qualitätsmetriken</div></div>
      <div class="trust-card"><div class="num">72h</div><div class="label">Maximale Upload-Speicherung</div></div>
    </div>

    <div class="benchmark-banner">
      <div>
        <span class="benchmark-tag">Ground Truth Transparenz</span>
        <h3>Unser QC Score im offenen Benchmark-Vergleich</h3>
        <p>Alle Scores basieren auf öffentlich nachvollziehbaren Testfällen — keine Blackbox, volle Reproduzierbarkeit.</p>
      </div>
      <a href="https://tilesmith-benchmark-viewer.vercel.app/" target="_blank" class="benchmark-btn">Benchmark ansehen →</a>
    </div>
  </div>
</section>

<!-- PRICING -->
<section class="section pricing-strip" id="pricing">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Pricing</span>
      <h2>TileSmith API — transparente Staffelung</h2>
      <p>Gilt für beide Pipelines gemeinsam. Vom kostenlosen Test bis zur Enterprise-Integration.</p>
    </div>
    <div class="pricing-grid">
      <div class="pricing-card"><div class="plan-name">Free</div><div class="plan-price">0€</div><div class="plan-detail">100 Calls / Monat</div></div>
      <div class="pricing-card"><div class="plan-name">Maker API</div><div class="plan-price">9€</div><div class="plan-detail">1.000 Calls, einmalig</div></div>
      <div class="pricing-card featured"><div class="plan-name">Studio API</div><div class="plan-price">29€/mo</div><div class="plan-detail">10.000 Calls / Monat</div></div>
      <div class="pricing-card"><div class="plan-name">Growth</div><div class="plan-price">199€/mo</div><div class="plan-detail">100.000 Calls / Monat</div></div>
    </div>
    <p class="pricing-note">Calls umfassen sowohl /v1/score als auch /v1/convert Requests. TileSmith Studio (Map Editor, Tileset Generator, Cloud Workspace) ist vollständig kostenlos unter Fair-Use-Policy.</p>
  </div>
</section>

<!-- CTA -->
<section class="cta-band">
  <h2>Bereit, deine Asset-Pipeline zu automatisieren?</h2>
  <p>Erstelle einen API-Key in TileSmith Studio und starte direkt mit Score- oder Convert-Requests.</p>
  <div class="hero-buttons">
    <a href="#" class="btn-primary">Kostenlos starten</a>
    <a href="#" class="btn-secondary">API Docs lesen</a>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-col">
        <div class="logo" style="margin-bottom:12px;">Kleeblatt<span>.space</span></div>
        <p style="color:var(--text-dim); font-size:14px; max-width:280px;">Local-first Tools und Spiele für moderne Game-Dev-Workflows.</p>
      </div>
      <div class="footer-col">
        <h4>Produkte</h4>
        <a href="#api">TileSmith API</a>
        <a href="#studio">TileSmith Studio</a>
        <a href="#adventure">KleeBlatt Adventure</a>
      </div>
      <div class="footer-col">
        <h4>Ressourcen</h4>
        <a href="https://tilesmith-benchmark-viewer.vercel.app/" target="_blank">Benchmark</a>
        <a href="#">API Dokumentation</a>
        <a href="#">Quality Scoring Spec</a>
      </div>
      <div class="footer-col">
        <h4>Unternehmen</h4>
        <a href="#">GitHub</a>
        <a href="#">Kontakt</a>
        <a href="#">Lizenzen</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Kleeblatt Space. Alle Rechte vorbehalten.</span>
      <span>tilesmith.kleeblatt.space · api.kleeblatt.space</span>
    </div>
  </div>
</footer>

<!-- FEATURE: HD ASSET PYRAMID -->
<section class="section" style="border-top: 1px solid var(--border);">
  <div class="container">
    <div class="section-header">
      <span class="section-tag">Zoom ohne Unschärfe</span>
      <h2>Ein Master-Asset, jede Zoomstufe scharf</h2>
      <p>Statt ein einzelnes 64×64-Bild hochzuskalieren, erzeugen wir aus dem KI-Master direkt eine komplette Auflösungs-Pyramide — für echtes HD-Feeling beim Reinzoomen, ohne Pixel-Matsch.</p>
    </div>

    <div style="
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 40px;
    ">
      <div style="display: flex; align-items: flex-end; justify-content: center; gap: 28px; flex-wrap: wrap; margin-bottom: 32px;">

        <div style="text-align: center;">
          <div style="
            width: 64px; height: 64px;
            background: rgba(79,158,255,0.10);
            border: 1px solid var(--border);
            border-radius: 8px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 10px;
            font-size: 11px; color: var(--text-dim); font-weight: 700;
          ">@1x</div>
          <span style="font-size: 12px; color: var(--text-dim);">Standard-Zoom</span>
        </div>

        <div style="text-align: center;">
          <div style="
            width: 96px; height: 96px;
            background: rgba(79,158,255,0.14);
            border: 1px solid var(--accent);
            border-radius: 8px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 10px;
            font-size: 12px; color: var(--accent); font-weight: 700;
          ">@2x</div>
          <span style="font-size: 12px; color: var(--text-dim);">Näherer Zoom</span>
        </div>

        <div style="text-align: center;">
          <div style="
            width: 132px; height: 132px;
            background: rgba(79,158,255,0.18);
            border: 2px solid var(--accent);
            border-radius: 8px;
            display: flex; align-items: center; justify-content: center;
            margin: 0 auto 10px;
            font-size: 13px; color: var(--accent); font-weight: 700;
          ">@4x</div>
          <span style="font-size: 12px; color: var(--text-dim);">Maximaler Zoom</span>
        </div>

      </div>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px;">
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <span style="font-size: 20px; display: block; margin-bottom: 10px;">🧬</span>
          <h4 style="font-size: 14.5px; font-weight: 700; margin-bottom: 6px;">Ein HD-Master, mehrere Ausgaben</h4>
          <p style="color: var(--text-dim); font-size: 13px;">Aus dem bereinigten Firefly-Master entstehen automatisch @1x/@2x/@4x-Varianten — konsistent und aus derselben Quelle.</p>
        </div>
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <span style="font-size: 20px; display: block; margin-bottom: 10px;">🔍</span>
          <h4 style="font-size: 14.5px; font-weight: 700; margin-bottom: 6px;">Scharf bei jedem Spieler-Zoom</h4>
          <p style="color: var(--text-dim); font-size: 13px;">Phaser lädt je nach Zoomstufe automatisch die passende Dichte-Variante — kein verschwommenes Upscaling.</p>
        </div>
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <span style="font-size: 20px; display: block; margin-bottom: 10px;">🧵</span>
          <h4 style="font-size: 14.5px; font-weight: 700; margin-bottom: 6px;">Nahtlos an Density-Seams</h4>
          <p style="color: var(--text-dim); font-size: 13px;">Density-Seam-QC stellt sicher, dass Übergänge zwischen Zoomstufen ohne sichtbare Brüche funktionieren.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- USP: FIREFLY-OPTIMIZED PIPELINE (technical) -->
<section class="section" style="border-top: 1px solid var(--border);">
  <div class="container">
    <div class="section-header" style="text-align: left; max-width: 100%; margin-bottom: 32px;">
      <span class="section-tag">Pipeline-Spezifikation</span>
      <h2>KI-Generator-Input → Engine-Ready Output</h2>
      <p>Einziges bekanntes Tool mit dedizierter Optimierung für Adobe-Firefly-Pixel-Art-Outputs und automatisierter Konvertierung zu Game-Engine-Assets.</p>
    </div>

    <div style="background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 36px;">

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px; font-size: 14px;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border);">
            <th style="text-align: left; padding: 10px 12px; color: var(--text-dim); font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.04em;">Parameter</th>
            <th style="text-align: left; padding: 10px 12px; color: var(--text-dim); font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.04em;">Input (Firefly)</th>
            <th style="text-align: left; padding: 10px 12px; color: var(--text-dim); font-size: 12.5px; text-transform: uppercase; letter-spacing: 0.04em;">Output (Engine)</th>
          </tr>
        </thead>
        <tbody style="font-family: 'SF Mono', Monaco, monospace; font-size: 13px;">
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 10px 12px; color: var(--text);">Auflösung</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">1024×1024 px</td>
            <td style="padding: 10px 12px; color: var(--accent);">8 / 16 / 32 / 64 / 128 px</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 10px 12px; color: var(--text);">Firefly-8×8-Sheet</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">1152×896 px</td>
            <td style="padding: 10px 12px; color: var(--accent);">Automatische Zellzerlegung</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 10px 12px; color: var(--text);">Intake-Limit</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">2048×2048 px / 20 MB</td>
            <td style="padding: 10px 12px; color: var(--accent);">96 Tiles / Batch</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; color: var(--text);">Downscale-Methode</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">Nearest-Neighbor kollabiert</td>
            <td style="padding: 10px 12px; color: var(--accent);">Gestuft, kontrasterhaltend</td>
          </tr>
        </tbody>
      </table>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px;">
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px; font-family: 'SF Mono', Monaco, monospace;">Source-Profil-Erkennung</h4>
          <p style="color: var(--text-dim); font-size: 13px;">Klassifikation in <code style="color: var(--accent-2);">hd-master</code>, <code style="color: var(--accent-2);">native-pixel-art</code>, <code style="color: var(--accent-2);">upscaled-pixel-art</code>, <code style="color: var(--accent-2);">standard-raster</code> oder <code style="color: var(--accent-3);">reject</code> — inkl. effektiver Auflösungsberechnung bei Nearest-Neighbor-Upscales.</p>
        </div>
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px; font-family: 'SF Mono', Monaco, monospace;">Artefakt-Erkennung</h4>
          <p style="color: var(--text-dim); font-size: 13px;">Farb-, Helligkeits- und Alpha-unabhängige Rahmenerkennung; konservative Maskierung für Corner-Badges und seitliche Texte, typisch für Generator-Outputs.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURE: DENSITY PYRAMID (technical) -->
<section class="section" style="border-top: 1px solid var(--border);">
  <div class="container">
    <div class="section-header" style="text-align: left; max-width: 100%; margin-bottom: 32px;">
      <span class="section-tag">Multi-Resolution Export</span>
      <h2>Density Pyramide: @1x / @2x / @4x aus einem Master</h2>
      <p>Ein bereinigtes HD-Master-Asset wird in mehrere Zieldichten exportiert — die Engine wählt je nach Kamera-Zoom die passende Auflösung, statt ein einzelnes Low-Res-Asset hochzuskalieren.</p>
    </div>

    <div style="background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 36px;">

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin-bottom: 28px;">
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px; font-family: 'SF Mono', Monaco, monospace;">
          <div style="color: var(--text-dim); font-size: 12px; margin-bottom: 6px;">density: 1</div>
          <div style="color: var(--text); font-size: 18px; font-weight: 700;">@1x</div>
          <div style="color: var(--accent); font-size: 13px; margin-top: 8px;">64×64 px</div>
        </div>
        <div style="background: var(--bg-alt); border: 1px solid var(--accent); border-radius: 10px; padding: 20px; font-family: 'SF Mono', Monaco, monospace;">
          <div style="color: var(--text-dim); font-size: 12px; margin-bottom: 6px;">density: 2</div>
          <div style="color: var(--text); font-size: 18px; font-weight: 700;">@2x</div>
          <div style="color: var(--accent); font-size: 13px; margin-top: 8px;">128×128 px</div>
        </div>
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px; font-family: 'SF Mono', Monaco, monospace;">
          <div style="color: var(--text-dim); font-size: 12px; margin-bottom: 6px;">density: 4</div>
          <div style="color: var(--text); font-size: 18px; font-weight: 700;">@4x</div>
          <div style="color: var(--accent); font-size: 13px; margin-top: 8px;">256×256 px</div>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px;">
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px;">Phaser-Zoom-Simulator</h4>
          <p style="color: var(--text-dim); font-size: 13px;">Testet Density, Render-Scale, Filter-Modus und Pointer-to-Tile-Mapping direkt in der Pipeline, vor dem Export.</p>
        </div>
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px;">Density-Seam-QC</h4>
          <p style="color: var(--text-dim); font-size: 13px;">Automatische Prüfung auf sichtbare Kantenbrüche zwischen den Auflösungsstufen desselben Assets.</p>
        </div>
      </div>

      <p style="color: var(--text-dim); font-size: 12.5px; margin-top: 24px; font-style: italic;">
        Vergleichbares Prinzip zu Multi-Resolution-Sprite-Pipelines in kommerziellen 2D-Engines — hier vollautomatisiert aus einem einzigen KI-generierten Master-Asset abgeleitet.
      </p>
    </div>
  </div>
</section>

<!-- STUDIO FEATURE: TERRAIN SYNTHESIS (technical, science-backed) -->
<section class="section" style="border-top: 1px solid var(--border);">
  <div class="container">
    <div class="section-header" style="text-align: left; max-width: 100%; margin-bottom: 32px;">
      <span class="section-tag">Tileset Generator · Terrain Synthesis</span>
      <h2>Wang-Tile-Synthese statt naiver Interpolation</h2>
      <p>Aus zwei Basis-Tiles werden vollständige, kantenkompatible Terrain-Sets für drei unterschiedliche Autotile-Systeme erzeugt — basierend auf publizierten Verfahren aus der Textur-Synthese-Forschung, nicht auf einfacher Pixel-Interpolation.</p>
    </div>

    <div style="background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 36px;">

      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 28px; flex-wrap: wrap;">
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 16px 22px; font-family: 'SF Mono', Monaco, monospace; text-align: center;">
          <div style="color: var(--text-dim); font-size: 11.5px; margin-bottom: 4px;">Input</div>
          <div style="color: var(--text); font-size: 16px; font-weight: 700;">2 Tiles</div>
        </div>
        <div style="font-size: 22px; color: var(--accent);">→</div>
        <div style="flex: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
          <div style="background: var(--bg-alt); border: 1px solid var(--accent); border-radius: 10px; padding: 14px; text-align: center;">
            <div style="font-family: 'SF Mono', Monaco, monospace; font-size: 14px; font-weight: 700; color: var(--accent);">Blob-47</div>
            <div style="font-size: 11.5px; color: var(--text-dim); margin-top: 4px;">47 Slots</div>
          </div>
          <div style="background: var(--bg-alt); border: 1px solid var(--accent-2); border-radius: 10px; padding: 14px; text-align: center;">
            <div style="font-family: 'SF Mono', Monaco, monospace; font-size: 14px; font-weight: 700; color: var(--accent-2);">Edge-16</div>
            <div style="font-size: 11.5px; color: var(--text-dim); margin-top: 4px;">16 Slots</div>
          </div>
          <div style="background: var(--bg-alt); border: 1px solid var(--accent-3); border-radius: 10px; padding: 14px; text-align: center;">
            <div style="font-family: 'SF Mono', Monaco, monospace; font-size: 14px; font-weight: 700; color: var(--accent-3);">Dual-Grid-16</div>
            <div style="font-size: 11.5px; color: var(--text-dim); margin-top: 4px;">16 Slots</div>
          </div>
        </div>
      </div>

      <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13.5px;">
        <thead>
          <tr style="border-bottom: 1px solid var(--border);">
            <th style="text-align: left; padding: 10px 12px; color: var(--text-dim); font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em;">System</th>
            <th style="text-align: left; padding: 10px 12px; color: var(--text-dim); font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em;">Slots</th>
            <th style="text-align: left; padding: 10px 12px; color: var(--text-dim); font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em;">Nachbarschafts-Modell</th>
            <th style="text-align: left; padding: 10px 12px; color: var(--text-dim); font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em;">Output</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 10px 12px; color: var(--text); font-family: 'SF Mono', Monaco, monospace;">Blob-47</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">47</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">8-Richtungen (Moore-Nachbarschaft)</td>
            <td style="padding: 10px 12px; color: var(--accent);">Engine-ready Atlas + JSON</td>
          </tr>
          <tr style="border-bottom: 1px solid var(--border);">
            <td style="padding: 10px 12px; color: var(--text); font-family: 'SF Mono', Monaco, monospace;">Edge-16</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">16</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">4-Richtungen (Von-Neumann-Nachbarschaft)</td>
            <td style="padding: 10px 12px; color: var(--accent);">Engine-ready Atlas + JSON</td>
          </tr>
          <tr>
            <td style="padding: 10px 12px; color: var(--text); font-family: 'SF Mono', Monaco, monospace;">Dual-Grid-16</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">16</td>
            <td style="padding: 10px 12px; color: var(--text-dim);">Versetztes Dual-Grid-Sampling</td>
            <td style="padding: 10px 12px; color: var(--accent);">Engine-ready Atlas + JSON</td>
          </tr>
        </tbody>
      </table>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-bottom: 24px;">
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px; font-family: 'SF Mono', Monaco, monospace;">Zugrunde liegende Verfahren</h4>
          <p style="color: var(--text-dim); font-size: 13px;">
            <strong style="color: var(--text);">Image Quilting</strong> (Efros & Freeman, 2001) für patch-basierte Übergangssynthese, kombiniert mit
            <strong style="color: var(--text);">Graphcut Textures</strong> (Kwatra et al., 2003) für Minimum-Cost-Seam-Berechnung an allen Kantenübergängen.
          </p>
        </div>
        <div style="background: var(--bg-alt); border: 1px solid var(--border); border-radius: 10px; padding: 20px;">
          <h4 style="font-size: 14px; font-weight: 700; margin-bottom: 8px;">Harte Qualitäts-Gates</h4>
          <p style="color: var(--text-dim); font-size: 13px;">Topology-IoU-, Material-Purity- und Worst-Case-Edge-Gates pro Slot; fehlgeschlagene Slots bleiben explizit <code style="color: var(--accent-3);">missing</code> statt fehlerhaft gefüllt.</p>
        </div>
      </div>

      <div style="padding-top: 24px; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px;">
        <p style="color: var(--text-dim); font-size: 13px; max-width: 480px;">
          Vergleichbare Einzelfunktionen werden bei anderen Tools separat kostenpflichtig angeboten und nutzen dort meist einfache lineare Interpolation ohne Seam-Optimierung.
        </p>
        <span style="background: rgba(125,214,160,0.12); color: var(--accent-2); font-size: 12.5px; font-weight: 700; padding: 6px 14px; border-radius: 20px; white-space: nowrap;">Teil des kostenlosen Studio-Plans</span>
      </div>

    </div>
  </div>
</section>
"""

# Replace class= with className=
html = html.replace('class="', 'className="')

# Replace inline styles with React style objects
def style_to_dict(match):
    style_str = match.group(1)
    # Split by semicolon, filter empty
    rules = [r.strip() for r in style_str.split(';') if r.strip()]
    
    dict_parts = []
    for r in rules:
        if ':' not in r: continue
        key, val = r.split(':', 1)
        key = key.strip()
        val = val.strip()
        
        # Convert kebab-case to camelCase
        parts = key.split('-')
        key_camel = parts[0] + ''.join(p.capitalize() for p in parts[1:])
        
        dict_parts.append(f"'{key_camel}': '{val}'")
        
    return 'style={{ ' + ', '.join(dict_parts) + ' }}'

html = re.sub(r'style="([^"]*)"', style_to_dict, html)

# Replace HTML comments
html = re.sub(r'<!--(.*?)-->', r'{/* \1 */}', html)

# Escape single braces not part of style attributes (none expected in standard HTML aside from styles we just fixed, wait, what about text? no braces in text)
# Actually, no bare braces in the HTML, we are fine.
# Need to make sure self-closing tags are correct.
# br -> <br /> is already handled in regex or we can do it manually.
html = html.replace('<br>', '<br/>')

# The code will be wrapped in a functional component.
jsx_file = f"""import React from 'react';

export default function Home() {{
  return (
    <>
{html}
    </>
  );
}}
"""

with open('src/app/page.tsx', 'w') as f:
    f.write(jsx_file)
