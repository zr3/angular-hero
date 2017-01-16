import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { AllHeroes } from './mock-heroes';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(AllHeroes);
  }

  getHeroesLagged(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
