import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser'
import { Project } from '../models/Project';
import { Tag } from '../models/Tag';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  projects = {} as Project[];
  isCollapsed: boolean = true;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Gaurav Shinde - PORTFOLIO')
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }
}
