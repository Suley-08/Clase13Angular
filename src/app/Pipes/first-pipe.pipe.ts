import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstPipe',

})
export class FirstPipePipe implements PipeTransform {

    transform(values: string[], args: string): string[] {
      let result: string[] = [];
      for(const value of values){
        if(value.toLowerCase().indexOf(args.toLowerCase()) > -1){
          result=[...result, value];
      }
    }
    return result;
  }
}
