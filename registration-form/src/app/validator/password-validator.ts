import { AbstractControl } from "@angular/forms";

export function passwordValidator(control: AbstractControl) {
  if(control && (control.value !== null || control.value !== undefined)) {
    const confirmpassValue = control.value;

    // get password control from form structure
    const passwordControl = control.root.get('password');

    if(passwordControl) {
      const passwordValue = passwordControl.value;

      if(passwordValue !== confirmpassValue) {
        return {
          isError: true
        }
      }
    }
  }
  return null;
}
