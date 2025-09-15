import { Component } from '@angular/core';

// config. of the component 

@Component({
    selector:"app-header",
    standalone:false,
    templateUrl:"./header.component.html",
    styleUrl:"./header.component.css"
})

export class HeaderComponent{}


/**
 * standalone -> true by default in 19v
 * 
 * standalone VS module based component
 * 
 * styles -> inline styles in list
 * styleUrls -> multiple css files
 * 
 */