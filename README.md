# PathBuilder

## Setup

### 1. Setup Angular UI
based on (https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/3-generating-components-and-nx-lib)[https://duncanhunter.gitbook.io/enterprise-angular-applications-with-ngrx-and-nx/introduction/3-generating-components-and-nx-lib]

`yarn add @nrwl/angular`
`nx generate @nrwl/angular:app`

### Domain Driven design
`yarn add @angular-architects/ddd --dev`
`npx nx g @angular-architects/ddd:init`
`npx nx g @angular-architects/ddd:domain pathBuilder --standalone --add-app`

1. Add a new Feature: Auth
`npx nx g @angular-architects/ddd:feature auth --domain pathBuilder --standalone --entity pathBuilder`

2. Add a new Domain: Ofo
`npx nx g @angular-architects/ddd:feature ofo --domain pathBuilder --standalone --entity pathBuilder`

3. Add firebase api domain
`npx nx g @angular-architects/ddd:domain api`

4. Add UI lib
`npx nx g @angular-architects/ddd:feature ui --domain pathBuilder --standalone --entity pathBuilder`
