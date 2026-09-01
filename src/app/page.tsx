import React from 'react';

export default function Home() {
  return (
    <>

<nav>
  <div className="nav-inner">
    <div className="logo">Kleeblatt<span>.space</span></div>
    <ul className="nav-links">
      <li><a href="#api">TileSmith API</a></li>
      <li><a href="#studio">TileSmith Studio</a></li>
      <li><a href="#adventure">KleeBlatt Adventure</a></li>
      <li><a href="https://tilesmith-benchmark-viewer.vercel.app/" target="_blank">Benchmark</a></li>
      <li><a href="#pricing">Pricing</a></li>
    </ul>
    <a href="#" className="nav-cta">Get Started</a>
  </div>
</nav>

<section className="hero">
  <div className="hero-badge">🌿 Tools & Games, built local-first — transparent, fair, ohne Blackbox</div>
  <h1>Wir bauen Tools für <span className="highlight">Game-Pipelines</span><br/>und Spiele mit echter Substanz</h1>
  <p>Eine autonome API für Tile-Qualität und Asset-Konvertierung, eine vollwertige Creator-Suite zur Steuerung und Erstellung, und ein eigenes Browser-Adventure.</p>
  <div className="hero-buttons">
    <a href="#api" className="btn-primary">API entdecken</a>
    <a href="#studio" className="btn-secondary">Studio ansehen</a>
  </div>
</section>

{/*  VALUES  */}
<section className="section">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Unsere Basis</span>
      <h2>Ein Fundament für alle Produkte</h2>
      <p>Transparenz und Datensicherheit sind kein Feature, sondern die Grundlage — bei jedem einzelnen Produkt.</p>
    </div>

    <div className="values-grid">

      <div className="value-card">
        <div className="value-icon" style={{ 'background': 'rgba(125,214,160,0.15)', 'color': 'var(--accent-2)' }}>🔒</div>
        <h3>Local-First, wo möglich</h3>
        <p className="desc">TileSmith Studio läuft local-first: Wir verarbeiten deine Daten nicht, wenn du es nicht willst.</p>
        <p className="value-quote" style={{ 'borderLeft': '2px solid var(--accent-2)' }}>„We never process data if you don't want to.“</p>
      </div>

      <div className="value-card">
        <div className="value-icon" style={{ 'background': 'rgba(79,158,255,0.15)', 'color': 'var(--accent)' }}>📊</div>
        <h3>Offene Berechnung & Ground Truth</h3>
        <p className="desc">Beim QC Scoring legen wir die Berechnungsmethodik und unsere Ground-Truth-Daten offen — nachvollziehbar statt Blackbox.</p>
        <a href="https://tilesmith-benchmark-viewer.vercel.app/" target="_blank" className="value-link">Zur Benchmark-Transparenz →</a>
      </div>

      <div className="value-card">
        <div className="value-icon" style={{ 'background': 'rgba(255,180,84,0.15)', 'color': 'var(--accent-3)' }}>🤝</div>
        <h3>Fair Use statt Payment-Block</h3>
        <p className="desc">TileSmith Studio ist vollständig kostenlos nutzbar — unter einer fairen Nutzungsrichtlinie, ohne künstliche Zahlschranken.</p>
        <p className="value-quote" style={{ 'borderLeft': '2px solid var(--accent-3)' }}>Kein Feature-Lock. Kein Paywall-Zwang.</p>
      </div>

    </div>
  </div>
</section>

{/*  API PRODUCT  */}
<section className="section" id="api">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Kernprodukt · API</span>
      <h2>TileSmith API</h2>
      <p>Eine vollständig autonome, programmatische API mit zwei eigenständigen Pipelines — nutzbar ganz ohne Studio, direkt in deiner CI oder deinem Backend.</p>
    </div>

    <div className="api-product">
      <div className="api-product-head">
        <div>
          <h3>TileSmith API</h3>
          <p>Separates, eigenständiges Produkt. Key-Verwaltung erfolgt über TileSmith Studio, der Betrieb läuft komplett unabhängig davon.</p>
        </div>
        <div className="api-badge-col">
          <span className="api-badge">AUTONOM · KEIN STUDIO NÖTIG</span>
          <span className="api-crosslink">Wird u. a. in <a href="#adventure">KleeBlatt Adventure</a> eingesetzt</span>
        </div>
      </div>

      <div className="pipelines-grid">
        <div className="pipeline-card">
          <span className="pipeline-tag tag-score">Pipeline 1</span>
          <h4>QC Score</h4>
          <span className="endpoint">POST /v1/score</span>
          <p className="desc">Analysiert Tiles auf technische Qualität und gibt einen reproduzierbaren Score zurück — kein Bild wird gespeichert.</p>
          <ul>
            <li>6 transparente Metriken (Seam, Border, Artifact, Pattern, Fidelity, Textile)</li>
            <li>Production / Review / Reject Gates</li>
            <li>Versionierte, reproduzierbare Ergebnisse</li>
            <li>Ideal für Asset Stores, Generatoren, CI-Checks</li>
          </ul>
        </div>

        <div className="pipeline-card">
          <span className="pipeline-tag tag-convert">Pipeline 2</span>
          <h4>Autotile Pipeline</h4>
          <span className="endpoint">POST /v1/convert</span>
          <p className="desc">Nimmt beliebige rohe 2D-Pixel-PNGs entgegen und liefert fertige, Phaser-4-ready Dateien zurück.</p>
          <ul>
            <li>Automatisches Trimmen & Bereinigen roher Assets</li>
            <li>Erzeugung nötiger Variationen (Blob-47 Autotile-Sets)</li>
            <li>Direkt einsatzbereite Engine-Dateien (Atlas, JSON, TSX)</li>
            <li>Ideal für schnelle Asset-Pipelines ohne manuelle Nacharbeit</li>
          </ul>
          <div className="pipeline-crosslink">
            <span>🎲</span>
            <span className="label">Geplant für <a href="#adventure">KleeBlatt Adventure</a> — procedural generierte Maps</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  STUDIO PRODUCT  */}
<section className="section" id="studio" style={{ 'borderTop': 'none', 'paddingTop': '0' }}>
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Creator-Suite</span>
      <h2>TileSmith Studio</h2>
      <p>Die zentrale Oberfläche für alles rund um TileSmith: Map-Erstellung, Tileset-Generierung, Cloud-Speicherung und die Administration der API.</p>
    </div>

    <div className="studio-product">
      <div className="studio-head">
        <div>
          <h3>TileSmith Studio</h3>
          <p>Vollwertige Creator-Suite für Tile-basierte Game-Assets — von der Erstellung bis zur Verwaltung deiner API-Zugänge, alles an einem Ort.</p>
        </div>
        <span className="studio-badge">ZENTRALE LÖSUNG</span>
      </div>

      <div className="studio-features">
        <div className="feature-block">
          <span className="feature-icon">🗺️</span>
          <h4>Map Editor</h4>
          <p>Visuelles Erstellen und Bearbeiten von Tile-Maps mit direkter Vorschau in Engine-Auflösung.</p>
        </div>
        <div className="feature-block">
          <span className="feature-icon">🧩</span>
          <h4>Tileset Generator</h4>
          <p>Automatische Erzeugung konsistenter Tilesets inkl. Terrain-Übergängen und Varianten.</p>
        </div>
        <div className="feature-block">
          <span className="feature-icon">☁️</span>
          <h4>Cloud Workspace</h4>
          <p>Persistente, accountgebundene Projekte — arbeite geräteübergreifend an denselben Assets.</p>
        </div>
        <div className="feature-block">
          <span className="feature-icon">🔑</span>
          <h4>API-Administration</h4>
          <p>Key-Erstellung, Nutzungsübersicht und Billing für die eigenständige TileSmith API.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  ADVENTURE  */}
<section className="section" id="adventure">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Spiel</span>
      <h2>KleeBlatt Adventure</h2>
      <p>Unser eigenes Browser-Adventure — Beweis und Testfeld für die eigene Pipeline.</p>
    </div>

    <div className="product-card" style={{ 'marginBottom': '24px' }}>
      <div className="product-icon icon-orange">🗺️</div>
      <h3>KleeBlatt Adventure</h3>
      <p className="tagline">2D Browser-Adventure mit optionalem Blockchain-Ownership (Immutable zkEVM) — Gameplay first, NFT optional.</p>
      <ul>
        <li>Hero-System, Karten, Kampf, XP-Progression</li>
        <li>React + Phaser Frontend, Hono API</li>
        <li>Optionale NFT-Sicherung von Assets</li>
        <li>Live auf stage.kleeblatt.space</li>
      </ul>
      <a href="https://github.com/duduspieleklee-create/kleeblatt-adventure" className="card-link">Repository ansehen →</a>
    </div>

    <div className="showcase-box">
      <span className="showcase-tag">Geplant · Eigener Use Case</span>
      <h3>Procedural Maps direkt aus der eigenen API</h3>
      <p className="desc">KleeBlatt Adventure wird exklusiv Teil unserer eigenen Asset-Pipeline: Dynamisch generierte, zufällige Maps für Spieler entstehen direkt aus den Outputs der TileSmith API und TileSmith Studio — kein externes Tool, keine Blackbox.</p>

      <div className="showcase-steps">
        <div className="showcase-step">
          <span className="icon">🧩</span>
          <h4>Autotile Pipeline liefert Assets</h4>
          <p>Rohe Pixel-Assets werden über die Autotile Pipeline in fertige, Blob-47-kompatible Tilesets umgewandelt.</p>
        </div>
        <div className="showcase-step">
          <span className="icon">🗺️</span>
          <h4>Studio generiert Terrain-Sets</h4>
          <p>Der Tileset Generator in TileSmith Studio baut daraus konsistente, kombinierbare Terrain-Bausteine.</p>
        </div>
        <div className="showcase-step">
          <span className="icon">🎲</span>
          <h4>Adventure generiert Maps zur Laufzeit</h4>
          <p>KleeBlatt Adventure kombiniert diese Bausteine zu zufälligen, spielbaren Maps für jeden Spieler-Run.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  TRUST + BENCHMARK LINK  */}
<section className="section">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Architektur</span>
      <h2>Gebaut auf soliden Prinzipien</h2>
      <p>Local-first, transparente Metriken, klare Trennung von API und Administration.</p>
    </div>
    <div className="trust-grid">
      <div className="trust-card"><div className="num">2</div><div className="label">Eigenständige API-Pipelines</div></div>
      <div className="trust-card"><div className="num">4</div><div className="label">Studio-Kernfunktionen</div></div>
      <div className="trust-card"><div className="num">6</div><div className="label">Offene Qualitätsmetriken</div></div>
      <div className="trust-card"><div className="num">72h</div><div className="label">Maximale Upload-Speicherung</div></div>
    </div>

    <div className="benchmark-banner">
      <div>
        <span className="benchmark-tag">Ground Truth Transparenz</span>
        <h3>Unser QC Score im offenen Benchmark-Vergleich</h3>
        <p>Alle Scores basieren auf öffentlich nachvollziehbaren Testfällen — keine Blackbox, volle Reproduzierbarkeit.</p>
      </div>
      <a href="https://tilesmith-benchmark-viewer.vercel.app/" target="_blank" className="benchmark-btn">Benchmark ansehen →</a>
    </div>
  </div>
</section>

{/*  PRICING  */}
<section className="section pricing-strip" id="pricing">
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Pricing</span>
      <h2>TileSmith API — transparente Staffelung</h2>
      <p>Gilt für beide Pipelines gemeinsam. Vom kostenlosen Test bis zur Enterprise-Integration.</p>
    </div>
    <div className="pricing-grid">
      <div className="pricing-card"><div className="plan-name">Free</div><div className="plan-price">0€</div><div className="plan-detail">100 Calls / Monat</div></div>
      <div className="pricing-card"><div className="plan-name">Maker API</div><div className="plan-price">9€</div><div className="plan-detail">1.000 Calls, einmalig</div></div>
      <div className="pricing-card featured"><div className="plan-name">Studio API</div><div className="plan-price">29€/mo</div><div className="plan-detail">10.000 Calls / Monat</div></div>
      <div className="pricing-card"><div className="plan-name">Growth</div><div className="plan-price">199€/mo</div><div className="plan-detail">100.000 Calls / Monat</div></div>
    </div>
    <p className="pricing-note">Calls umfassen sowohl /v1/score als auch /v1/convert Requests. TileSmith Studio (Map Editor, Tileset Generator, Cloud Workspace) ist vollständig kostenlos unter Fair-Use-Policy.</p>
  </div>
</section>

{/*  CTA  */}
<section className="cta-band">
  <h2>Bereit, deine Asset-Pipeline zu automatisieren?</h2>
  <p>Erstelle einen API-Key in TileSmith Studio und starte direkt mit Score- oder Convert-Requests.</p>
  <div className="hero-buttons">
    <a href="#" className="btn-primary">Kostenlos starten</a>
    <a href="#" className="btn-secondary">API Docs lesen</a>
  </div>
</section>

<footer>
  <div className="container">
    <div className="footer-grid">
      <div className="footer-col">
        <div className="logo" style={{ 'marginBottom': '12px' }}>Kleeblatt<span>.space</span></div>
        <p style={{ 'color': 'var(--text-dim)', 'fontSize': '14px', 'maxWidth': '280px' }}>Local-first Tools und Spiele für moderne Game-Dev-Workflows.</p>
      </div>
      <div className="footer-col">
        <h4>Produkte</h4>
        <a href="#api">TileSmith API</a>
        <a href="#studio">TileSmith Studio</a>
        <a href="#adventure">KleeBlatt Adventure</a>
      </div>
      <div className="footer-col">
        <h4>Ressourcen</h4>
        <a href="https://tilesmith-benchmark-viewer.vercel.app/" target="_blank">Benchmark</a>
        <a href="#">API Dokumentation</a>
        <a href="#">Quality Scoring Spec</a>
      </div>
      <div className="footer-col">
        <h4>Unternehmen</h4>
        <a href="#">GitHub</a>
        <a href="#">Kontakt</a>
        <a href="#">Lizenzen</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Kleeblatt Space. Alle Rechte vorbehalten.</span>
      <span>tilesmith.kleeblatt.space · api.kleeblatt.space</span>
    </div>
  </div>
</footer>

{/*  FEATURE: HD ASSET PYRAMID  */}
<section className="section" style={{ 'borderTop': '1px solid var(--border)' }}>
  <div className="container">
    <div className="section-header">
      <span className="section-tag">Zoom ohne Unschärfe</span>
      <h2>Ein Master-Asset, jede Zoomstufe scharf</h2>
      <p>Statt ein einzelnes 64×64-Bild hochzuskalieren, erzeugen wir aus dem KI-Master direkt eine komplette Auflösungs-Pyramide — für echtes HD-Feeling beim Reinzoomen, ohne Pixel-Matsch.</p>
    </div>

    <div style={{ 'background': 'var(--card)', 'border': '1px solid var(--border)', 'borderRadius': 'var(--radius)', 'padding': '40px' }}>
      <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'justifyContent': 'center', 'gap': '28px', 'flexWrap': 'wrap', 'marginBottom': '32px' }}>

        <div style={{ 'textAlign': 'center' }}>
          <div style={{ 'width': '64px', 'height': '64px', 'background': 'rgba(79,158,255,0.10)', 'border': '1px solid var(--border)', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'margin': '0 auto 10px', 'fontSize': '11px', 'color': 'var(--text-dim)', 'fontWeight': '700' }}>@1x</div>
          <span style={{ 'fontSize': '12px', 'color': 'var(--text-dim)' }}>Standard-Zoom</span>
        </div>

        <div style={{ 'textAlign': 'center' }}>
          <div style={{ 'width': '96px', 'height': '96px', 'background': 'rgba(79,158,255,0.14)', 'border': '1px solid var(--accent)', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'margin': '0 auto 10px', 'fontSize': '12px', 'color': 'var(--accent)', 'fontWeight': '700' }}>@2x</div>
          <span style={{ 'fontSize': '12px', 'color': 'var(--text-dim)' }}>Näherer Zoom</span>
        </div>

        <div style={{ 'textAlign': 'center' }}>
          <div style={{ 'width': '132px', 'height': '132px', 'background': 'rgba(79,158,255,0.18)', 'border': '2px solid var(--accent)', 'borderRadius': '8px', 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center', 'margin': '0 auto 10px', 'fontSize': '13px', 'color': 'var(--accent)', 'fontWeight': '700' }}>@4x</div>
          <span style={{ 'fontSize': '12px', 'color': 'var(--text-dim)' }}>Maximaler Zoom</span>
        </div>

      </div>

      <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(3, 1fr)', 'gap': '18px' }}>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <span style={{ 'fontSize': '20px', 'display': 'block', 'marginBottom': '10px' }}>🧬</span>
          <h4 style={{ 'fontSize': '14.5px', 'fontWeight': '700', 'marginBottom': '6px' }}>Ein HD-Master, mehrere Ausgaben</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>Aus dem bereinigten Firefly-Master entstehen automatisch @1x/@2x/@4x-Varianten — konsistent und aus derselben Quelle.</p>
        </div>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <span style={{ 'fontSize': '20px', 'display': 'block', 'marginBottom': '10px' }}>🔍</span>
          <h4 style={{ 'fontSize': '14.5px', 'fontWeight': '700', 'marginBottom': '6px' }}>Scharf bei jedem Spieler-Zoom</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>Phaser lädt je nach Zoomstufe automatisch die passende Dichte-Variante — kein verschwommenes Upscaling.</p>
        </div>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <span style={{ 'fontSize': '20px', 'display': 'block', 'marginBottom': '10px' }}>🧵</span>
          <h4 style={{ 'fontSize': '14.5px', 'fontWeight': '700', 'marginBottom': '6px' }}>Nahtlos an Density-Seams</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>Density-Seam-QC stellt sicher, dass Übergänge zwischen Zoomstufen ohne sichtbare Brüche funktionieren.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  USP: FIREFLY-OPTIMIZED PIPELINE (technical)  */}
<section className="section" style={{ 'borderTop': '1px solid var(--border)' }}>
  <div className="container">
    <div className="section-header" style={{ 'textAlign': 'left', 'maxWidth': '100%', 'marginBottom': '32px' }}>
      <span className="section-tag">Pipeline-Spezifikation</span>
      <h2>KI-Generator-Input → Engine-Ready Output</h2>
      <p>Einziges bekanntes Tool mit dedizierter Optimierung für Adobe-Firefly-Pixel-Art-Outputs und automatisierter Konvertierung zu Game-Engine-Assets.</p>
    </div>

    <div style={{ 'background': 'var(--card)', 'border': '1px solid var(--border)', 'borderRadius': 'var(--radius)', 'padding': '36px' }}>

      <table style={{ 'width': '100%', 'borderCollapse': 'collapse', 'marginBottom': '28px', 'fontSize': '14px' }}>
        <thead>
          <tr style={{ 'borderBottom': '1px solid var(--border)' }}>
            <th style={{ 'textAlign': 'left', 'padding': '10px 12px', 'color': 'var(--text-dim)', 'fontSize': '12.5px', 'textTransform': 'uppercase', 'letterSpacing': '0.04em' }}>Parameter</th>
            <th style={{ 'textAlign': 'left', 'padding': '10px 12px', 'color': 'var(--text-dim)', 'fontSize': '12.5px', 'textTransform': 'uppercase', 'letterSpacing': '0.04em' }}>Input (Firefly)</th>
            <th style={{ 'textAlign': 'left', 'padding': '10px 12px', 'color': 'var(--text-dim)', 'fontSize': '12.5px', 'textTransform': 'uppercase', 'letterSpacing': '0.04em' }}>Output (Engine)</th>
          </tr>
        </thead>
        <tbody style={{ 'fontFamily': "'SF Mono', Monaco, monospace", 'fontSize': '13px' }}>
          <tr style={{ 'borderBottom': '1px solid var(--border)' }}>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text)' }}>Auflösung</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>1024×1024 px</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--accent)' }}>8 / 16 / 32 / 64 / 128 px</td>
          </tr>
          <tr style={{ 'borderBottom': '1px solid var(--border)' }}>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text)' }}>Firefly-8×8-Sheet</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>1152×896 px</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--accent)' }}>Automatische Zellzerlegung</td>
          </tr>
          <tr style={{ 'borderBottom': '1px solid var(--border)' }}>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text)' }}>Intake-Limit</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>2048×2048 px / 20 MB</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--accent)' }}>96 Tiles / Batch</td>
          </tr>
          <tr>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text)' }}>Downscale-Methode</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>Nearest-Neighbor kollabiert</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--accent)' }}>Gestuft, kontrasterhaltend</td>
          </tr>
        </tbody>
      </table>

      <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(2, 1fr)', 'gap': '18px' }}>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <h4 style={{ 'fontSize': '14px', 'fontWeight': '700', 'marginBottom': '8px', 'fontFamily': "'SF Mono', Monaco, monospace" }}>Source-Profil-Erkennung</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>Klassifikation in <code style={{ 'color': 'var(--accent-2)' }}>hd-master</code>, <code style={{ 'color': 'var(--accent-2)' }}>native-pixel-art</code>, <code style={{ 'color': 'var(--accent-2)' }}>upscaled-pixel-art</code>, <code style={{ 'color': 'var(--accent-2)' }}>standard-raster</code> oder <code style={{ 'color': 'var(--accent-3)' }}>reject</code> — inkl. effektiver Auflösungsberechnung bei Nearest-Neighbor-Upscales.</p>
        </div>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <h4 style={{ 'fontSize': '14px', 'fontWeight': '700', 'marginBottom': '8px', 'fontFamily': "'SF Mono', Monaco, monospace" }}>Artefakt-Erkennung</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>Farb-, Helligkeits- und Alpha-unabhängige Rahmenerkennung; konservative Maskierung für Corner-Badges und seitliche Texte, typisch für Generator-Outputs.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  FEATURE: DENSITY PYRAMID (technical)  */}
<section className="section" style={{ 'borderTop': '1px solid var(--border)' }}>
  <div className="container">
    <div className="section-header" style={{ 'textAlign': 'left', 'maxWidth': '100%', 'marginBottom': '32px' }}>
      <span className="section-tag">Multi-Resolution Export</span>
      <h2>Density Pyramide: @1x / @2x / @4x aus einem Master</h2>
      <p>Ein bereinigtes HD-Master-Asset wird in mehrere Zieldichten exportiert — die Engine wählt je nach Kamera-Zoom die passende Auflösung, statt ein einzelnes Low-Res-Asset hochzuskalieren.</p>
    </div>

    <div style={{ 'background': 'var(--card)', 'border': '1px solid var(--border)', 'borderRadius': 'var(--radius)', 'padding': '36px' }}>

      <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(3, 1fr)', 'gap': '18px', 'marginBottom': '28px' }}>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px', 'fontFamily': "'SF Mono', Monaco, monospace" }}>
          <div style={{ 'color': 'var(--text-dim)', 'fontSize': '12px', 'marginBottom': '6px' }}>density: 1</div>
          <div style={{ 'color': 'var(--text)', 'fontSize': '18px', 'fontWeight': '700' }}>@1x</div>
          <div style={{ 'color': 'var(--accent)', 'fontSize': '13px', 'marginTop': '8px' }}>64×64 px</div>
        </div>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--accent)', 'borderRadius': '10px', 'padding': '20px', 'fontFamily': "'SF Mono', Monaco, monospace" }}>
          <div style={{ 'color': 'var(--text-dim)', 'fontSize': '12px', 'marginBottom': '6px' }}>density: 2</div>
          <div style={{ 'color': 'var(--text)', 'fontSize': '18px', 'fontWeight': '700' }}>@2x</div>
          <div style={{ 'color': 'var(--accent)', 'fontSize': '13px', 'marginTop': '8px' }}>128×128 px</div>
        </div>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px', 'fontFamily': "'SF Mono', Monaco, monospace" }}>
          <div style={{ 'color': 'var(--text-dim)', 'fontSize': '12px', 'marginBottom': '6px' }}>density: 4</div>
          <div style={{ 'color': 'var(--text)', 'fontSize': '18px', 'fontWeight': '700' }}>@4x</div>
          <div style={{ 'color': 'var(--accent)', 'fontSize': '13px', 'marginTop': '8px' }}>256×256 px</div>
        </div>
      </div>

      <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(2, 1fr)', 'gap': '18px' }}>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <h4 style={{ 'fontSize': '14px', 'fontWeight': '700', 'marginBottom': '8px' }}>Phaser-Zoom-Simulator</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>Testet Density, Render-Scale, Filter-Modus und Pointer-to-Tile-Mapping direkt in der Pipeline, vor dem Export.</p>
        </div>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <h4 style={{ 'fontSize': '14px', 'fontWeight': '700', 'marginBottom': '8px' }}>Density-Seam-QC</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>Automatische Prüfung auf sichtbare Kantenbrüche zwischen den Auflösungsstufen desselben Assets.</p>
        </div>
      </div>

      <p style={{ 'color': 'var(--text-dim)', 'fontSize': '12.5px', 'marginTop': '24px', 'fontStyle': 'italic' }}>
        Vergleichbares Prinzip zu Multi-Resolution-Sprite-Pipelines in kommerziellen 2D-Engines — hier vollautomatisiert aus einem einzigen KI-generierten Master-Asset abgeleitet.
      </p>
    </div>
  </div>
</section>

{/*  STUDIO FEATURE: TERRAIN SYNTHESIS (technical, science-backed)  */}
<section className="section" style={{ 'borderTop': '1px solid var(--border)' }}>
  <div className="container">
    <div className="section-header" style={{ 'textAlign': 'left', 'maxWidth': '100%', 'marginBottom': '32px' }}>
      <span className="section-tag">Tileset Generator · Terrain Synthesis</span>
      <h2>Wang-Tile-Synthese statt naiver Interpolation</h2>
      <p>Aus zwei Basis-Tiles werden vollständige, kantenkompatible Terrain-Sets für drei unterschiedliche Autotile-Systeme erzeugt — basierend auf publizierten Verfahren aus der Textur-Synthese-Forschung, nicht auf einfacher Pixel-Interpolation.</p>
    </div>

    <div style={{ 'background': 'var(--card)', 'border': '1px solid var(--border)', 'borderRadius': 'var(--radius)', 'padding': '36px' }}>

      <div style={{ 'display': 'flex', 'alignItems': 'center', 'gap': '16px', 'marginBottom': '28px', 'flexWrap': 'wrap' }}>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '16px 22px', 'fontFamily': "'SF Mono', Monaco, monospace", 'textAlign': 'center' }}>
          <div style={{ 'color': 'var(--text-dim)', 'fontSize': '11.5px', 'marginBottom': '4px' }}>Input</div>
          <div style={{ 'color': 'var(--text)', 'fontSize': '16px', 'fontWeight': '700' }}>2 Tiles</div>
        </div>
        <div style={{ 'fontSize': '22px', 'color': 'var(--accent)' }}>→</div>
        <div style={{ 'flex': '1', 'display': 'grid', 'gridTemplateColumns': 'repeat(3, 1fr)', 'gap': '12px' }}>
          <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--accent)', 'borderRadius': '10px', 'padding': '14px', 'textAlign': 'center' }}>
            <div style={{ 'fontFamily': "'SF Mono', Monaco, monospace", 'fontSize': '14px', 'fontWeight': '700', 'color': 'var(--accent)' }}>Blob-47</div>
            <div style={{ 'fontSize': '11.5px', 'color': 'var(--text-dim)', 'marginTop': '4px' }}>47 Slots</div>
          </div>
          <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--accent-2)', 'borderRadius': '10px', 'padding': '14px', 'textAlign': 'center' }}>
            <div style={{ 'fontFamily': "'SF Mono', Monaco, monospace", 'fontSize': '14px', 'fontWeight': '700', 'color': 'var(--accent-2)' }}>Edge-16</div>
            <div style={{ 'fontSize': '11.5px', 'color': 'var(--text-dim)', 'marginTop': '4px' }}>16 Slots</div>
          </div>
          <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--accent-3)', 'borderRadius': '10px', 'padding': '14px', 'textAlign': 'center' }}>
            <div style={{ 'fontFamily': "'SF Mono', Monaco, monospace", 'fontSize': '14px', 'fontWeight': '700', 'color': 'var(--accent-3)' }}>Dual-Grid-16</div>
            <div style={{ 'fontSize': '11.5px', 'color': 'var(--text-dim)', 'marginTop': '4px' }}>16 Slots</div>
          </div>
        </div>
      </div>

      <table style={{ 'width': '100%', 'borderCollapse': 'collapse', 'marginBottom': '24px', 'fontSize': '13.5px' }}>
        <thead>
          <tr style={{ 'borderBottom': '1px solid var(--border)' }}>
            <th style={{ 'textAlign': 'left', 'padding': '10px 12px', 'color': 'var(--text-dim)', 'fontSize': '12px', 'textTransform': 'uppercase', 'letterSpacing': '0.04em' }}>System</th>
            <th style={{ 'textAlign': 'left', 'padding': '10px 12px', 'color': 'var(--text-dim)', 'fontSize': '12px', 'textTransform': 'uppercase', 'letterSpacing': '0.04em' }}>Slots</th>
            <th style={{ 'textAlign': 'left', 'padding': '10px 12px', 'color': 'var(--text-dim)', 'fontSize': '12px', 'textTransform': 'uppercase', 'letterSpacing': '0.04em' }}>Nachbarschafts-Modell</th>
            <th style={{ 'textAlign': 'left', 'padding': '10px 12px', 'color': 'var(--text-dim)', 'fontSize': '12px', 'textTransform': 'uppercase', 'letterSpacing': '0.04em' }}>Output</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ 'borderBottom': '1px solid var(--border)' }}>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text)', 'fontFamily': "'SF Mono', Monaco, monospace" }}>Blob-47</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>47</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>8-Richtungen (Moore-Nachbarschaft)</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--accent)' }}>Engine-ready Atlas + JSON</td>
          </tr>
          <tr style={{ 'borderBottom': '1px solid var(--border)' }}>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text)', 'fontFamily': "'SF Mono', Monaco, monospace" }}>Edge-16</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>16</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>4-Richtungen (Von-Neumann-Nachbarschaft)</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--accent)' }}>Engine-ready Atlas + JSON</td>
          </tr>
          <tr>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text)', 'fontFamily': "'SF Mono', Monaco, monospace" }}>Dual-Grid-16</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>16</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--text-dim)' }}>Versetztes Dual-Grid-Sampling</td>
            <td style={{ 'padding': '10px 12px', 'color': 'var(--accent)' }}>Engine-ready Atlas + JSON</td>
          </tr>
        </tbody>
      </table>

      <div style={{ 'display': 'grid', 'gridTemplateColumns': 'repeat(2, 1fr)', 'gap': '18px', 'marginBottom': '24px' }}>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <h4 style={{ 'fontSize': '14px', 'fontWeight': '700', 'marginBottom': '8px', 'fontFamily': "'SF Mono', Monaco, monospace" }}>Zugrunde liegende Verfahren</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>
            <strong style={{ 'color': 'var(--text)' }}>Image Quilting</strong> (Efros & Freeman, 2001) für patch-basierte Übergangssynthese, kombiniert mit
            <strong style={{ 'color': 'var(--text)' }}>Graphcut Textures</strong> (Kwatra et al., 2003) für Minimum-Cost-Seam-Berechnung an allen Kantenübergängen.
          </p>
        </div>
        <div style={{ 'background': 'var(--bg-alt)', 'border': '1px solid var(--border)', 'borderRadius': '10px', 'padding': '20px' }}>
          <h4 style={{ 'fontSize': '14px', 'fontWeight': '700', 'marginBottom': '8px' }}>Harte Qualitäts-Gates</h4>
          <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px' }}>Topology-IoU-, Material-Purity- und Worst-Case-Edge-Gates pro Slot; fehlgeschlagene Slots bleiben explizit <code style={{ 'color': 'var(--accent-3)' }}>missing</code> statt fehlerhaft gefüllt.</p>
        </div>
      </div>

      <div style={{ 'paddingTop': '24px', 'borderTop': '1px solid var(--border)', 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': '16px' }}>
        <p style={{ 'color': 'var(--text-dim)', 'fontSize': '13px', 'maxWidth': '480px' }}>
          Vergleichbare Einzelfunktionen werden bei anderen Tools separat kostenpflichtig angeboten und nutzen dort meist einfache lineare Interpolation ohne Seam-Optimierung.
        </p>
        <span style={{ 'background': 'rgba(125,214,160,0.12)', 'color': 'var(--accent-2)', 'fontSize': '12.5px', 'fontWeight': '700', 'padding': '6px 14px', 'borderRadius': '20px', 'whiteSpace': 'nowrap' }}>Teil des kostenlosen Studio-Plans</span>
      </div>

    </div>
  </div>
</section>

    </>
  );
}
