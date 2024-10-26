import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'fp-main',
  standalone: true,
  imports: [],
  template: ` <p>main works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {}
