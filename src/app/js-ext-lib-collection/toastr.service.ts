import { InjectionToken } from '@angular/core';

export let TOSTER_TOKEN = new InjectionToken('toastr');
export let TOSTER_TOKEN1 = new InjectionToken('toastr'); // sample to show both are differet

// If needed we can define an interface for Toaster here so that we can get intelisense
