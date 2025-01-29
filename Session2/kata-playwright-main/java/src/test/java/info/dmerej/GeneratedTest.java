package info.dmerej;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;


public class GeneratedTest {
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
                    .setHeadless(false));
            BrowserContext context = browser.newContext();
            Page page = context.newPage();
            page.navigate("https://f.se2.hr.dmerej.info/");
            page.locator("html").click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("List employees")).click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Home")).click();
            page.getByText("Version").click();
            page.locator("html").click();
            page.locator("html").click();
            page.getByText("Home HR DB - Home Employees").click();
            page.locator("html").click();
            page.locator("html").click();
            page.locator("html").click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Create new team")).click();
            page.getByPlaceholder("Name").click();
            page.getByPlaceholder("Name").fill("Hola");
            page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Add")).click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Delete")).nth(2).click();
            page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Proceed")).click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Home")).click();
        }
    }
}