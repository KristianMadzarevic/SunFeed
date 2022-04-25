import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayHR',
})
export class DayHRPipe implements PipeTransform {
  public dayNameTranslations: enHrTranslation[] = [
    {
      en: 'Mon',
      hr: 'Ponedjeljak',
    },
    {
      en: 'Tue',
      hr: 'Utorak',
    },
    {
      en: 'Wed',
      hr: 'Srijeda',
    },
    {
      en: 'Thu',
      hr: 'Četvrtak',
    },
    {
      en: 'Fri',
      hr: 'Petak',
    },
    {
      en: 'Sat',
      hr: 'Subota',
    },
    {
      en: 'Sun',
      hr: 'Nedjelja',
    },
  ];

  transform(value: unknown, ...args: unknown[]): string {
    //If value is string, and if its a real english day of the week
    if(typeof value === 'string') {
      let croatianDayName = this.dayNameTranslations.find(
        (e) => e.en.toLowerCase() === value.toLowerCase()
      )?.hr;
      if (croatianDayName) return croatianDayName;
    }
    return '';
  }
}

interface enHrTranslation {
  en: string;
  hr: string;
}
