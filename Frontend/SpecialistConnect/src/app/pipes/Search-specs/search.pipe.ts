import { Pipe, PipeTransform } from '@angular/core';
import { specsDetails } from '../../interfaces/spec';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(specs: specsDetails[], name: string): specsDetails[] {
    if (!specs || name == '') {
      return specs;
    }

    const filtered: specsDetails[] = [];

    for (let spec of specs) {
      if (spec.f_name.toLowerCase().includes(name.toLowerCase())) {
        filtered.push(spec);
      }
    }

    return filtered;
  }
}
