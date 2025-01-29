package info.dmerej;

import com.microsoft.playwright.*;
import com.microsoft.playwright.options.*;
import static com.microsoft.playwright.assertions.PlaywrightAssertions.assertThat;
import java.util.*;

public class GeneratedTest1 {
    public static void main(String[] args) {
        try (Playwright playwright = Playwright.create()) {
            Browser browser = playwright.chromium().launch(new BrowserType.LaunchOptions()
                    .setHeadless(false));
            BrowserContext context = browser.newContext();
            Page page = context.newPage();
            page.navigate("https://f.se2.hr.dmerej.info/");
            page.locator("html").click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("List employees")).click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("List employees")).click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Edit")).first().click();
            page.locator("li").filter(new Locator.FilterOptions().setHasText("Update basic info")).click();
            page.getByRole(AriaRole.LINK, new Page.GetByRoleOptions().setName("Update basic info")).click();
            page.getByPlaceholder("Name").click();
            page.getByPlaceholder("Name").fill("sebs");
            page.getByPlaceholder("Name").press("Tab");
            page.getByPlaceholder("Email").fill("sebs@sebs.com");
            page.getByRole(AriaRole.BUTTON, new Page.GetByRoleOptions().setName("Update")).click();
        }
    }
}
