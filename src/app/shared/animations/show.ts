import {
  animate,
  style,
  transition,
  trigger,
} from "@angular/animations";

export const SHOW_ANIMATION = trigger("show", [
  transition(":enter", [
    style({ opacity: 0 }),
    animate("200ms", style({ opacity: 1 })),
  ]),
]);
