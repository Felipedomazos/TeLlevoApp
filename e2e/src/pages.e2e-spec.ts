import { browser, element, by } from "protractor";
import { AppPage } from './app.po';

describe("Pruebas", () => {
    let page: AppPage;
    beforeEach(() => {
        page = new AppPage();
        browser.get("/");
    });
    //Prueba 1
    it("La pagina principal es el Login", () => {
        browser.driver.sleep(1000);
        expect(element(by.css('.tituloLogin ion-title')).getText()).toContain("TeLlevoApp");
    });

    //Prueba 2
    it("El usuario puede navegar a la pagina contraseña",async ()=>{
        await element(by.buttonText("Olvide mi Contraseña")).click();
        browser.driver.sleep(1500);
        element(by.buttonText("Atras")).click();
    });
    //Prueba 4
    it("El usuario puede iniciar sesion en la aplicacion", () => {
        browser.driver.sleep(1000);
        expect(element(by.buttonText("Ingresar")).click());
        expect(element(by.css('.home ion-label')).getText()).toContain("fe.domazos");
    });
});
