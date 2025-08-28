import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailDomain',
  standalone: true
})
export class EmailDomainPipe implements PipeTransform {
  transform(value: string): string {
    return value ? value.split('@')[1] : '';
  }
}
