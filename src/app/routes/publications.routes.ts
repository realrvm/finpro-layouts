import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'

export const publicationsRoutes: Routes = [
  {
    path: PATHS.publications,
    title: 'Публикации',
    providers: [],
    loadComponent: () => import('@fp/pages/publications').then((m) => m.PublicationsComponent),
  },
]
