import { Pipe, PipeTransform } from '@angular/core';
import { specsDetails } from '../../interfaces/spec';

@Pipe({
  name: 'filterSpecSkills',
  standalone: true,
})
export class FilterSpecSkillsPipe implements PipeTransform {
  transform(specs: specsDetails[], j_name: string): specsDetails[] {
    if (!specs || j_name == '') {
      return specs;
    }

    const filtered: specsDetails[] = [];

    for (let spec of specs) {
      if (spec.job_title.includes(j_name)) {
        filtered.push(spec);
      }
    }

    return filtered;
  }
}
