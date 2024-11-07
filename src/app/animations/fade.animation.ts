import { trigger, transition, style, animate, state } from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
  state('void', style({
    opacity: 0,
    transform: 'translateY(20px)'
  })),
  state('*', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('void => *', [
    animate('600ms ease-out')
  ]),
  transition('* => void', [
    animate('600ms ease-out', style({
      opacity: 0,
      transform: 'translateY(20px)'
    }))
  ])
]);

export const slideAnimation = trigger('slideAnimation', [
  state('void', style({
    opacity: 0,
    transform: 'translateX(-100%)'
  })),
  state('*', style({
    opacity: 1,
    transform: 'translateX(0)'
  })),
  transition('void => *', [
    animate('600ms ease-out')
  ]),
  transition('* => void', [
    animate('600ms ease-out', style({
      opacity: 0,
      transform: 'translateX(-100%)'
    }))
  ])
]);