import { Component } from '@angular/core';
import { HeaderComponent } from "./component/header/header.component";
import { ServerStatusComponent } from "./component/dashboard/server-status/server-status.component";
import { TrafficComponent } from "./component/dashboard/traffic/traffic.component";
import { TicketsComponent } from "./component/dashboard/tickets/tickets.component";
import { DashboardItemComponent } from "./component/dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, ServerStatusComponent, TrafficComponent, TicketsComponent, DashboardItemComponent],
})
export class AppComponent {

}
