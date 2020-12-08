import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationMetadata,
} from '@angular/animations';

export function transitionMenuFixed(): AnimationMetadata {
  return trigger('transitionMenuFixed', [
    state(
      'shown',
      style({
        opacity: 1,
        transform: 'translateY(0)',
      })
    ),
    state(
      'hidden',
      style({
        opacity: 0,
        transform: 'translateY(-150%)',
      })
    ),
    transition('* => *', animate('0.3s ease-in-out')),
  ]);
}

export function expand(): AnimationMetadata {
  return trigger('expand', [
    state('*', style({ opacity: 1, transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateY(-50%)', opacity: 0 }),
      animate(
        '200ms ease-in',
        style({ opacity: 1, transform: 'translateX(0)' })
      ),
    ]),
  ]);
}

export function fadeIn(): AnimationMetadata {
  return trigger('fadeIn', [
    state('*', style({ opacity: 1 })),
    transition(':enter', [
      style({ opacity: 0 }),
      animate('600ms 0s ease-in-out'),
    ]),
  ]);
}
export function fadeInOut(): AnimationMetadata {
  return trigger('fadeInOut', [
    state('void => *', style({ opacity: 1 })),
    transition(':enter', [style({ opacity: 0 }), animate('300ms 0s ease-in')]),
    transition(':leave', [animate('300ms 0s ease-out', style({ opacity: 0 }))]),
  ]);
}

export function flyIn(): AnimationMetadata {
  return trigger('flyIn', [
    state('void => *', style({ transform: 'translateX(0)' })),
    transition(':enter', [
      style({ transform: 'translateX(-5%)' }),
      animate('300ms 0s ease-in'),
    ]),
    transition(':leave', [
      animate('300ms ease-out', style({ transform: 'translateX(100%)' })),
    ]),
  ]);
}

export function shrinkOut(): AnimationMetadata {
  return trigger('shrinkOut', [
    state('in', style({ height: '*' })),
    transition('* => void', [
      style({ height: '*' }),
      animate(250, style({ height: 0 })),
    ]),
  ]);
}
