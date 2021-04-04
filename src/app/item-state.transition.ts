import {
	trigger,
	transition,
	style,
	state,
	query,
	group,
	animateChild,
	animate,
	keyframes,
} from '@angular/animations';

export const itemStateTransition =
	trigger('ItemStateTransition', [
    state('in', style({ opacity:1,transform: 'translateY(0)' })),
    transition(':enter', [
      style({ opacity:0,transform: 'translateY(-100%)' }),
      animate(100)
    ]),
    transition(':leave', [
      animate(200, style({ opacity:0,transform: 'rotate(30deg) translate(100%, 100%)' }))
    ])
  ])