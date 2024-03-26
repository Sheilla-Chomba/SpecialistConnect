import { Pipe, PipeTransform } from '@angular/core';
import { specsDetails } from '../../interfaces/spec';

@Pipe({
  name: 'filterSpecSkills',
  standalone: true,
})
export class FilterSpecSkillsPipe implements PipeTransform {
  transform(specs: specsDetails[], name: string): specsDetails[] {
    if (!specs || name == '') {
      return specs;
    }

    const filtered: specsDetails[] = [];

    for (let spec of specs) {
      if (spec.job_title.toLowerCase().includes(name.toLowerCase())) {
        filtered.push(spec);
      }
    }

    return filtered;
  }
}
