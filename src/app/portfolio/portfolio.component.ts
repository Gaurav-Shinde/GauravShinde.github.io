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
  filtering: boolean = false;

  javascript: boolean = false;
  node: boolean = false;
  python: boolean = false;
  mysql: boolean = false;
  java: boolean = false;
  angular: boolean = false;
  springboot: boolean = false;
  jenkins: boolean = false;
  docker: boolean = false;
  ansible: boolean = false;


  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Gaurav Shinde - PORTFOLIO')
  }
  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  filter() {
    let filterTags: Tag[] = [];

    if (this.javascript) filterTags.push(Tag.JAVASCRIPT)
    if (this.java) filterTags.push(Tag.JAVA)
    if (this.python) filterTags.push(Tag.PYTHON)
    if (this.angular) filterTags.push(Tag.ANGULAR)
    if (this.springboot) filterTags.push(Tag.SPRINGBOOT)
    if (this.node) filterTags.push(Tag.NODE)
    if (this.jenkins) filterTags.push(Tag.JENKINS)
    if (this.docker) filterTags.push(Tag.DOCKER)
    if (this.ansible) filterTags.push(Tag.ANSIBLE)
    if (this.mysql) filterTags.push(Tag.MYSQL)

    if (this.java || this.javascript || this.python || this.angular || this.springboot || this.node || this.jenkins || this.docker || this.ansible || this.mysql) {
      this.filtering = true
    } else {
      this.filtering = false;
    }

    this.projects = this.projectService.getProjectByFilter(filterTags)
  }

  resetFilter() {
    this.javascript = false;
    this.java = false;
    this.python = false;
    this.angular = false;
    this.springboot = false;
    this.node = false;
    this.jenkins = false;
    this.docker = false;
    this.ansible = false;
    this.mysql = false;

    this.filtering = false

    this.projects = this.projectService.getProjects();
  }
}
