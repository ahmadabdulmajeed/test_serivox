const express = require('express');

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get('/', (_req, res) => {
  const deployedAt = new Date().toUTCString();
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Serivox Deployment Successful</title>
    <style>
      :root {
        color-scheme: dark;
        --bg: #0b1220;
        --bg-2: #0f172a;
        --card: #0f1b33;
        --card-2: #0c162b;
        --border: rgba(148, 163, 184, 0.18);
        --text: #e2e8f0;
        --muted: #94a3b8;
        --accent: #3b82f6;
        --accent-2: #22d3ee;
        --success: #22c55e;
      }
      * {
        box-sizing: border-box;
      }
      body {
        margin: 0;
        font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Inter, Arial, sans-serif;
        background: radial-gradient(1200px 600px at 80% -10%, rgba(59, 130, 246, 0.25), transparent),
          radial-gradient(900px 500px at -10% 10%, rgba(34, 211, 238, 0.18), transparent),
          var(--bg);
        color: var(--text);
        min-height: 100vh;
      }
      .page {
        max-width: 1100px;
        margin: 0 auto;
        padding: 56px 24px 40px;
        display: flex;
        flex-direction: column;
        gap: 32px;
      }
      .hero {
        background: linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(15, 23, 42, 0.35));
        border: 1px solid var(--border);
        border-radius: 20px;
        padding: 36px;
        display: grid;
        gap: 20px;
        box-shadow: 0 24px 60px rgba(2, 8, 23, 0.45);
      }
      .brand {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        letter-spacing: 0.02em;
      }
      .brand-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 6px 12px;
        border-radius: 999px;
        background: rgba(34, 197, 94, 0.14);
        color: #86efac;
        font-size: 12px;
        border: 1px solid rgba(34, 197, 94, 0.3);
      }
      h1 {
        margin: 0;
        font-size: clamp(28px, 4vw, 44px);
        line-height: 1.1;
      }
      p {
        margin: 0;
        color: var(--muted);
        line-height: 1.6;
        font-size: 16px;
      }
      .status-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: 16px;
      }
      .card {
        background: var(--card);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .card .label {
        color: var(--muted);
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }
      .card .value {
        font-size: 18px;
        font-weight: 600;
        display: inline-flex;
        align-items: center;
        gap: 8px;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 10px;
        border-radius: 999px;
        font-size: 12px;
        background: rgba(59, 130, 246, 0.15);
        color: #93c5fd;
        border: 1px solid rgba(59, 130, 246, 0.35);
      }
      .success-dot {
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--success);
        box-shadow: 0 0 10px rgba(34, 197, 94, 0.6);
      }
      .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 16px;
      }
      .info {
        background: var(--card-2);
        border: 1px solid var(--border);
        border-radius: 16px;
        padding: 18px;
        display: grid;
        gap: 10px;
      }
      .list {
        margin: 0;
        padding: 0 0 0 18px;
        color: var(--muted);
      }
      .footer {
        text-align: center;
        color: var(--muted);
        font-size: 12px;
        padding-top: 12px;
      }
      .timestamp {
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace;
        color: #7dd3fc;
        font-size: 13px;
      }
      @media (max-width: 640px) {
        .hero {
          padding: 24px;
        }
        .page {
          padding: 36px 18px 32px;
        }
      }
    </style>
  </head>
  <body>
    <div class="page">
      <section class="hero">
        <div class="brand">
          <span class="pill">Serivox</span>
          <span class="brand-badge"><span class="success-dot"></span> Live Deployment</span>
        </div>
        <h1>Deployment Successful</h1>
        <p>
          This application is live on Serivox App Hosting. Routing is active, the domain is connected, and the runtime
          is serving production traffic successfully.
        </p>
        <p class="timestamp">Deployed: ${deployedAt}</p>
      </section>

      <section class="status-grid">
        <div class="card">
          <div class="label">Deployment</div>
          <div class="value"><span class="success-dot"></span> Successful</div>
        </div>
        <div class="card">
          <div class="label">Domain</div>
          <div class="value">Connected</div>
        </div>
        <div class="card">
          <div class="label">Routing</div>
          <div class="value">Active</div>
        </div>
        <div class="card">
          <div class="label">Runtime</div>
          <div class="value">Healthy</div>
        </div>
        <div class="card">
          <div class="label">Access</div>
          <div class="value">Ready</div>
        </div>
        <div class="card">
          <div class="label">Environment</div>
          <div class="value">Test Deployment</div>
        </div>
      </section>

      <section class="info-grid">
        <div class="info">
          <strong>What this proves</strong>
          <ul class="list">
            <li>Live deployment from Serivox App Hosting</li>
            <li>Domain routing and runtime delivery are working</li>
            <li>Production-grade hosting is serving this app now</li>
          </ul>
        </div>
        <div class="info">
          <strong>Deployment summary</strong>
          <p>
            This demo confirms that Serivox successfully deployed the application, attached the domain, and routed
            traffic to a healthy runtime environment.
          </p>
        </div>
      </section>

      <div class="footer">Test deployment environment powered by Serivox.</div>
    </div>
  </body>
</html>`;

  res.type('html').send(html);
});

app.listen(port, () => {
  console.log(`test_serivox listening on port ${port}`);
});
