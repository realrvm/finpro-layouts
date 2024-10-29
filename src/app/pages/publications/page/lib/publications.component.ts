import { CommonModule, NgOptimizedImage } from '@angular/common'
import { ChangeDetectionStrategy, Component, inject, OnInit, signal, WritableSignal } from '@angular/core'

import type { PublicationsCategory, PublicationsPost } from '@fp/pages/publications/common'
import { PublicationsService } from '@fp/pages/publications/services'
import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { PlainButtonComponent } from '@fp/ui/buttons'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-publications',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    BreadcrumbsComponent,
    PageTitleComponent,
    PlainButtonComponent,
    NgOptimizedImage,
  ],
  templateUrl: './publications.component.html',
  styles: `
    :host {
      @apply block pb-[82px] desktop:pb-[92px];
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationsComponent implements OnInit {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Публикации' }]
  public readonly title = 'Публикации'

  private readonly publicationsService = inject(PublicationsService)
  public categories: WritableSignal<PublicationsCategory[]> = signal([])
  public posts: WritableSignal<PublicationsPost[]> = signal([])

  ngOnInit(): void {
    this.publicationsService.getCategories().subscribe((cat) => this.categories.set(cat))

    this.publicationsService.getPosts().subscribe((post) => this.posts.set(post))
  }

  public handleSortBtn(id: number): void {
    this.categories.update((prev) => {
      return prev.map((btn) => {
        if (btn.id === id) {
          return { ...btn, isActive: true }
        }
        return { ...btn, isActive: false }
      })
    })
  }
}
