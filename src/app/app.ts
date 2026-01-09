import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar";

import { LucideAngularModule, HouseIcon, MenuIcon, FileIcon, LayoutDashboard } from 'lucide-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [
    RouterOutlet,
    SidebarComponent,
    LucideAngularModule
  ]
})
export class App {
  protected readonly title = signal('EGAFrontend');

  // Expose icons to the template
  readonly House = HouseIcon;
  readonly Menu = MenuIcon;
  readonly File = FileIcon;
  readonly Dashboard = LayoutDashboard;
}
