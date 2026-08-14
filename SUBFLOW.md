# This site and Subflow

This file is installed by `subflow-site-kit`. It describes every connection between this
website and the Subflow platform, so nothing about the relationship is hidden in code.

**This site does not depend on Subflow.** It is hosted on your own Cloudflare account, its
code is in your own repository, and (for a shop) its database is your own D1. If you stop
using Subflow, the site keeps working and stays fully editable. Nothing here is a lock-in.

This is a **brochure** site.

---

## What is connected

### 1. Traffic beacon — every site

One block in `index.html`, between `<!-- subflow:tracking:start -->` and
`<!-- subflow:tracking:end -->`.

It loads a small script from Subflow that counts page views, including client-side route
changes. It sets one first-party cookie, `sf_sid`, for a 30-minute session window. There is
no third-party analytics, no Google Analytics, no Meta Pixel and no fingerprinting.

It is switched on by a **build variable**, `VITE_SUBFLOW_TRACKING_SRC`, set in Cloudflare
Pages. With the variable unset, the block does nothing at all — no script, no request, no
cookie. Deleting the block removes it permanently.

### 2. Admin API token — shop sites only

Subflow manages your products and orders by calling this site's own `/api/admin/*`
endpoints with a token stored in your `admin_tokens` table (as a hash — the raw token is
not recoverable from the database).

**Subflow has no private back door.** It calls exactly the same endpoints your own `/admin`
uses, so there is nothing it can see or change that you cannot. Revoking the token removes
its access immediately and affects nothing else.

---

## Running the shop without Subflow — shop sites only

Your own admin lives at **`/admin`** on this site, and it does not talk to Subflow at all.
It manages products, variants, categories, colours, images, orders and customers.

### First-time setup

The first admin user is created with the bootstrap token, before any admin exists:

```bash
# 1. set a temporary bootstrap token
npx wrangler pages secret put ADMIN_BOOTSTRAP_TOKEN

# 2. create the owner account
curl -X POST https://<your-site>/api/admin/users \
  -H "Authorization: Bearer <the bootstrap token>" \
  -H "content-type: application/json" \
  -d '{"email":"you@example.com","password":"a long passphrase","name":"Your name"}'

# 3. remove the bootstrap token — the account you just made can create the rest
npx wrangler pages secret delete ADMIN_BOOTSTRAP_TOKEN
```

Then sign in at `/admin` with that email and password.

Passwords are stored as PBKDF2-HMAC-SHA256 with a per-user random salt. Sessions are bearer
tokens; only their hashes are stored, they expire after 14 days, and changing a password
invalidates every existing session.

### Wiring the route

The installer copies the admin pages into `src/pages/admin/`. Add one route to your router:

```tsx
import AdminApp from "@/pages/admin/AdminApp";
// ...
<Route path="/admin/*" element={<AdminApp />} />
```

It is lazy-loadable and shares no state with the storefront, so it adds nothing to the
main bundle if you `React.lazy` it.

---

## Removing Subflow entirely

See `OFFBOARDING.md`. Short version:

```bash
node <kit>/install.mjs --site . --uninstall
```

Then revoke the platform's token. Your `/admin`, your data and your storefront are
unaffected — the uninstall deliberately keeps `admin_users`, because that is how you log in.
