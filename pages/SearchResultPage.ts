import { Page, Locator } from "@playwright/test";
import { ProductPage } from "./ProductPage";

export class SearchResultPage {

    private readonly page: Page;

    //Locators using css selectors 
    private readonly searchPageHeader: Locator;
    private readonly searchProducts: Locator;

    constructor(page: Page) {

        this.page = page;

        this.searchPageHeader = page.locator('#content h1');
        this.searchProducts = page.locator('h4>a');

    }

    //verify if the search results page exists by checking the header text

    async isSearchResultPageExists(): Promise<boolean> {

        if (!(await this.searchPageHeader.isVisible())) {
            return false;
        }

        const headerText = await this.searchPageHeader.textContent();
        return headerText?.toLowerCase().includes("search -") ?? false;

    }

    //check if the product exists in the search results by its name 

    async isProductExists(productName: string): Promise<boolean> {

        const count = await this.searchProducts.count();

        for (let i = 0; i < count; i++) {

            const title = await this.searchProducts.nth(i).textContent();

            if (
                title?.trim().toLowerCase() ===
                productName.trim().toLowerCase()
            ) {
                return true;
            }
        }

        return false;

    }

    //select a product from the search result by its name 

    async selectProduct(productName: string): Promise<ProductPage | null> {

        try {

            const count = await this.searchProducts.count();

            console.log(`Products found: ${count}`);

            for (let i = 0; i < count; i++) {

                const product = this.searchProducts.nth(i);
                const title = (await product.textContent())?.trim();

                console.log(`Found Product: ${title}`);

                if (
                    title?.toLowerCase() ===
                    productName.trim().toLowerCase()
                ) {

                    await product.click();
                    return new ProductPage(this.page);

                }

            }

            console.log(`Product not found: ${productName}`);
            return null;

        } catch (error) {

            console.log(`Error selecting product: ${error}`);
            return null;

        }

    }

    //get count of product in search results 

    async getProductCount(): Promise<number> {

        return await this.searchProducts.count();

    }

}