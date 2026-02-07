import { CanDeactivateFn } from '@angular/router';
import { UserForm } from '../../features/users/components/user-form/user-form';
import { IDeactivate } from '../interface/deactivate.interface';

export const deactivateGuard: CanDeactivateFn<IDeactivate> = (
  component,
  currentRoute,
  currentState,
  nextState,
) => {
  const dataChanged = component.dataChanged();

  if (dataChanged) {
    const confirmLeave = confirm('You have unsaved changes. Do you really want to leave?');
    return confirmLeave;
  }

  return true;
};
