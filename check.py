import asyncio
from playwright.async_api import async_playwright
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(headless=True)
        ctx = await b.new_context(viewport={"width":1280,"height":1800})
        page = await ctx.new_page()
        ext = []
        page.on("request", lambda r: ext.append(r.url) if not r.url.startswith("http://localhost:9911") and not r.url.startswith("data:") else None)
        await page.goto("http://localhost:9911/", wait_until="networkidle")
        await page.screenshot(path="/tmp/verify/home.png")
        print("external requests:", ext)
        await b.close()
asyncio.run(main())
