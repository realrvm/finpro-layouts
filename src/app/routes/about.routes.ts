import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const aboutRoutes: Routes = [
  {
    path: PATHS.about,
    title: 'О проекта',
    providers: [],
    loadComponent: () => import('@fp/pages/about').then((m) => m.AboutComponent),
  },
]
