import { NgModule } from "@angular/core";
import { CardComponent } from "../component/card/card.component";

@NgModule({
    declarations:[CardComponent],
    exports:[CardComponent] 
})
export class CardModule{

}
/**
 *     declarations:[CardComponent],
    exports:[CardComponent] 

    this means that this compoenet should be availabel to all who uses this CardModule


 * Purpose: This is a small feature module specifically for the CardComponent. It encapsulates everything related to displaying a generic "card."

declarations:
[CardComponent]: CardComponent is declared here, meaning it belongs to CardModule. Its template can only use things declared within CardModule or imported by CardModule.

exports:
[CardComponent]: This is crucial. By exporting CardComponent, CardModule makes CardComponent available for other modules (like AppModule and TaskModule, as we'll see) to import and use in their templates. If CardComponent wasn't exported, AppModule wouldn't be able to use <app-card> in its template, even if it imported CardModule.

imports: (None explicitly listed here)
This module doesn't explicitly import any other Angular modules. If CardComponent's template used *ngIf or *ngFor, it would implicitly rely on CommonModule being available through BrowserModule (if only AppModule uses it) or would need to import CommonModule itself if it were a truly standalone reusable library module. In typical setups, if CardComponent is simple and doesn't use these, it might not need any imports.    
 */