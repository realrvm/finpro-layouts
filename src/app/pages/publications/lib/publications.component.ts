import { CommonModule } from '@angular/common'
import { ChangeDetectionStrategy, Component } from '@angular/core'

import { BreadcrumbsComponent } from '@fp/ui/breadcrumbs'
import { ContainerComponent } from '@fp/ui/container'
import { PageTitleComponent } from '@fp/ui/page-title'

@Component({
  selector: 'fp-publications',
  standalone: true,
  imports: [CommonModule, ContainerComponent, BreadcrumbsComponent, PageTitleComponent],
  templateUrl: './publications.component.html',
  styles: `
    :host {
      @apply block pb-[82px] desktop:pb-[92px];
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicationsComponent {
  public readonly items = [{ route: '/', label: 'Главная' }, { label: 'Публикации' }]
  public readonly title = 'Публикации'
}
