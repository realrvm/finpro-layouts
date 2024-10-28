import { inject, Injectable } from '@angular/core'
import { map, Observable } from 'rxjs'

import { ApiService } from '@fp/core'

import { PublicationsCategory } from '../../common'

@Injectable()
export class PublicationsService {
  private readonly apiService = inject(ApiService)

  public getCategories(): Observable<PublicationsCategory[]> {
    return this.apiService.get<PublicationsCategory[]>('api/v1/publications/categories/').pipe(
      map((cat) =>
        cat.map((item, index) => {
          return index ? { ...item, isActive: false } : { ...item, isActive: true }
        }),
      ),
    )
  }
}