import { test, expect } from "@playwright/test";

test("404 page renders heading and is noindex", async ({ page }) => {
  await page.goto("/404");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(/no existe/i);

  const robots = await page.locator('meta[name="robots"]').getAttribute("content");
  expect(robots).toContain("noindex");
});
