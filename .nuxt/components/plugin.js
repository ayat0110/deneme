import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AppBar: () => import('../..\\components\\AppBar.vue' /* webpackChunkName: "components/app-bar" */).then(c => wrapFunctional(c.default || c)),
  Drawer: () => import('../..\\components\\Drawer.vue' /* webpackChunkName: "components/drawer" */).then(c => wrapFunctional(c.default || c)),
  Footer: () => import('../..\\components\\Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c)),
  Loading: () => import('../..\\components\\Loading.vue' /* webpackChunkName: "components/loading" */).then(c => wrapFunctional(c.default || c)),
  Menu: () => import('../..\\components\\Menu.vue' /* webpackChunkName: "components/menu" */).then(c => wrapFunctional(c.default || c)),
  Overlay: () => import('../..\\components\\Overlay.vue' /* webpackChunkName: "components/overlay" */).then(c => wrapFunctional(c.default || c)),
  Project: () => import('../..\\components\\Project.vue' /* webpackChunkName: "components/project" */).then(c => wrapFunctional(c.default || c)),
  Side: () => import('../..\\components\\Side.vue' /* webpackChunkName: "components/side" */).then(c => wrapFunctional(c.default || c)),
  SectionsAbout: () => import('../..\\components\\sections\\About.vue' /* webpackChunkName: "components/sections-about" */).then(c => wrapFunctional(c.default || c)),
  SectionsContact: () => import('../..\\components\\sections\\Contact.vue' /* webpackChunkName: "components/sections-contact" */).then(c => wrapFunctional(c.default || c)),
  SectionsGithubElement: () => import('../..\\components\\sections\\GithubElement.vue' /* webpackChunkName: "components/sections-github-element" */).then(c => wrapFunctional(c.default || c)),
  SectionsHero: () => import('../..\\components\\sections\\Hero.vue' /* webpackChunkName: "components/sections-hero" */).then(c => wrapFunctional(c.default || c)),
  SectionsJobs: () => import('../..\\components\\sections\\Jobs.vue' /* webpackChunkName: "components/sections-jobs" */).then(c => wrapFunctional(c.default || c)),
  SectionsProjects: () => import('../..\\components\\sections\\Projects.vue' /* webpackChunkName: "components/sections-projects" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
