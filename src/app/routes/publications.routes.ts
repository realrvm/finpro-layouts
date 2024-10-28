import type { Routes } from '@angular/router'

import { PATHS } from '@fp/core'
import { PublicationsService } from '@fp/pages/publications/services'

export const publicationsRoutes: Routes = [
  {
    path: PATHS.publications,
    title: 'Публикации',
    providers: [PublicationsService],
    loadComponent: () => import('@fp/pages/publications').then((m) => m.PublicationsComponent),
  },
]
