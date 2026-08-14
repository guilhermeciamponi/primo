# Offboarding — disconnecting this site from Subflow

A client who leaves keeps a fully working, fully editable website. This is the runbook that
makes that true, and it is meant to be *run*, not just read. It takes a few minutes.

This is a **brochure** site.

---

## 1. Revoke the platform's access — shop sites only

Do this first, so nothing can write to the shop while you are mid-way through.

```bash
npx wrangler d1 execute <db> --remote \
  --command "UPDATE admin_tokens SET revoked = 1 WHERE name LIKE 'subflow%'"
```

Confirm it is dead — this must now return **401**:

```bash
curl -s -o /dev/null -w '%{http_code}\n' https://<your-site>/api/admin/products \
  -H "Authorization: Bearer <the platform token>"
```

Your own `/admin` login is unaffected: it uses `admin_sessions`, not `admin_tokens`.

## 2. Remove the connection layer

```bash
node <kit>/install.mjs --site . --uninstall --dry-run   # look first
node <kit>/install.mjs --site . --uninstall
```

This removes the tracking block from `index.html` and the files the kit added. It
deliberately does **not** touch `migrations/`, `admin_users` or `admin_sessions` — those are
how you sign in to your own shop.

## 3. Remove the build variable

In Cloudflare Pages → Settings → Environment variables, delete
`VITE_SUBFLOW_TRACKING_SRC`. (Strictly optional: with the block gone nothing reads it.)

## 4. Rebuild and verify

```bash
npm run build
grep -ri "subflow\|tracking/script\|sf_sid" dist/ || echo "clean — no references"
```

That grep returning nothing is the acceptance test for "zero dead references".

## 5. Confirm the site still works

- [ ] Storefront loads and a product page renders
- [ ] A test checkout still reaches the payment step
- [ ] `/admin` still logs in with the client's email and password
- [ ] Editing a product from `/admin` still saves
- [ ] Browser console is clean — no failed requests to any Subflow host
- [ ] `curl https://<site>/api/health` is `ok`

## What the client keeps

Everything. The repository, the Cloudflare project, the D1 database with every product,
order and customer, and an admin UI to run it. Subflow held no copy of any of it — the
platform read and wrote through this site's own API and stored no shop data of its own.

## What the client loses

Traffic charts, because those were computed from beacons sent to Subflow, and site
monitoring. No site data is lost — none of it ever lived there.
