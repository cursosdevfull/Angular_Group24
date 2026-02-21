import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Loading {
  private _requestLoading = signal(false);
  public requestLoading = this._requestLoading.asReadonly();

  setRequestLoading(value: boolean) {
    this._requestLoading.set(value);
  }
}
