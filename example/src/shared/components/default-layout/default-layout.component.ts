import { Component } from "@angular/core";
import { resourceEN } from 'src/shared/resources/resourceEN';

@Component({
    selector: 'default-layout',
    templateUrl: './default-layout.component.html',
    styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent {
    resource = resourceEN;
    sideBarItems = resourceEN.app_sidebar_item;
}
