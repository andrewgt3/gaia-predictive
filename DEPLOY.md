# How to Deploy to Cloudflare Pages

Since you are seeing issues with `git` on your machine (missing developer tools), here are two ways to get your site live.

# The Easiest Way: Drag & Drop to GitHub
Since your computer is missing some developer tools, the easiest way is to just drag your files onto the GitHub website.

## Step 1: Create a Repo
1.  Log in to [GitHub.com](https://github.com).
2.  Click the **+** icon (top right) > **New repository**.
3.  Name it `gaia-predictive`.
4.  **Important**: Check "Add a README file".
5.  Click **Create repository**.

## Step 2: Upload Your Code
1.  In your new repository, click **Add file** > **Upload files**.
2.  Open your project folder on your computer: `/Users/andrewgt3/Desktop/gaia landing page code `
3.  **Drag and drop** these specific folders and files into the browser:
    *   `src` (Folder)
    *   `public` (Folder)
    *   `index.html`
    *   `package.json`
    *   `vite.config.js`
    *   `eslint.config.js`
4.  **Do NOT upload**: `node_modules` or `dist`.
5.  Scroll down and click **Commit changes**.

## Step 3: Connect Cloudflare
1.  Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages**.
2.  **Create Application** > **Pages** > **Connect to Git**.
3.  Select the `gaia-predictive` repo you just made.
4.  **Build Settings**:
    *   **Framework**: `Vite`
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  Click **Save and Deploy**.

Now, every time you drag new files to that GitHub repo, your site will update automatically!

---

## Option 2: The "Quick Fix" (Direct Upload)
If you just want it live *now* without GitHub:

1.  **Build the project locally**:
    Run this command in your terminal:
    ```bash
    npm run build
    ```
    This will create a new `dist` folder in your project.

2.  **Upload to Cloudflare**:
    *   Go to **Workers & Pages** > **Create Application** > **Pages**.
    *   Select **Upload Assets** (Direct Upload).
    *   Drag and drop the **`dist`** folder you just created.
    *   Name your project and deploy.

> **Note**: This method won't auto-update. You'll have to repeat these steps for every change.

---

## Step 3: Connect Your Custom Domain
Now that your site is live on a `pages.dev` or `workers.dev` link, here is how to put it on your `.com` domain:

1.  **Go to your Project**: In the Cloudflare Dashboard, click on your new Pages project.
2.  **Custom Domains**: Click the **"Custom domains"** tab at the top.
3.  **Setup**: Click **"Set up a custom domain"**.
4.  **Enter Domain**: Type the domain you bought (e.g., `gaiapredictive.com`) and click **Continue**.
5.  **DNS Config**:
    *   **If you bought the domain on Cloudflare**: It will automatically configure everything. Just click "Activate".
    *   **If you bought it elsewhere (GoDaddy, Namecheap, etc.)**: Cloudflare will give you two "Nameservers" (e.g., `bob.ns.cloudflare.com`). You need to log in to your domain registrar and replace their nameservers with these two.

---

## Step 4: Fix the Video (R2 Subdomain)
Since we are using the main domain for the website, we need to move the video to a subdomain (like `assets.gaiapredictive.com`).

1.  **Go to R2**: In Cloudflare, go to **R2** on the left sidebar.
2.  **Select Bucket**: Click on the bucket where your video is stored.
3.  **Settings**: Click the **"Settings"** tab.
4.  **Connect Domain**: Scroll down to "Public Access" > "Custom Domains" and click **"Connect Domain"**.
5.  **Enter Subdomain**: Type `assets.gaiapredictive.com` and click **Continue** > **Connect Domain**.

**I have already updated the code** to look for the video at this new address! Just re-deploy your site (Step 2) and it will work.
